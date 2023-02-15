import apolloClient from "@/apollo-client";
import {gql} from "@apollo/client";
import {
  IMAGE_FRAGMENT,
  IMAGEASSET_FRAGMENT,
  IMAGECROP_FRAGMENT,
  IMAGEHOTSPOT_FRAGMENT,
  IMAGEMETADATA_FRAGMENT,
  IMAGEPALETTE_FRAGMENT,
  IMAGEPALETTESWATCH_FRAGMENT,
  LANGUAGE_FRAGMENT,
  LANGUAGETEXT_FRAGMENT,
  LOCALEIMAGE_FRAGMENT,
  NAVIGATION_FRAGMENT, OPENGRAPH_FRAGMENT,
} from "@/helpers/content";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'
import {useTranslation} from "next-i18next";
import {Breadcrumbs} from '@/components/breadcrumbs'
import {Box, Button, Flex, Link, Heading, Text} from 'theme-ui'
import Container from '@/components/container'
import {useRouter} from "next/router";
import {forwardRef, useEffect, useRef, useState} from "react";
import useThrottle from "@/hooks/useThrottle";
import Image from "next/image";
import BlockContent from '@sanity/block-content-to-react'
import serializer from '@/helpers/serializers'
import {slugify} from '@/helpers/slugify'


const SUMMARY_TAGS = ['H1', 'H2', 'H3', 'H4', 'H5']

function Summary({
                   academyIndex,
                   academy,
                   summaryStructure,
                   previousAcademy,
                   nextAcademy,
                   lowestIndex,
                   activeIndex,
                 }) {
  const {t} = useTranslation('academy')
  useEffect(() => {
    const hashbang = window.location.hash.split('#')[1]

    if (hashbang && summaryStructure.length) {
      const tag = summaryStructure.find(
        tag => slugify(tag.innerText) === hashbang
      )

      if (tag) {
        setTimeout(() => {
          scrollToTag(tag, 'auto')
        }, 500)
      }
    }
  }, [summaryStructure])

  const scrollToTag = (tag, behavior = 'smooth') => {
    const {top} = tag.getBoundingClientRect()

    window.scrollTo({
      top: top + window.pageYOffset - (top < 0 ? 80 : 0),
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Box sx={{position: 'sticky', top: 100}}>
        <Flex
          sx={{
            p: 4,
            backgroundColor: '#fff',
            filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.05))',
            flexDirection: 'column',
          }}
        >
          <Heading variant="h5" as="h5" sx={{mb: 3}}>
            {t('course')} {academyIndex}
          </Heading>

          <Text variant="bread">{academy.title}</Text>

          <Text
            variant="bread"
            sx={{
              mb: 4,
            }}
          >
            {t('readTime')}: {academy.readTime} {t('minutes')}
          </Text>

          {summaryStructure.map((summaryItem, summaryItemIndex) => (
            <Box
              sx={{
                pl: `${(SUMMARY_TAGS.indexOf(summaryItem.tagName) - lowestIndex.current) * 32}px`,
                mt: 2,
              }}
            >
              <Text
                variant={
                  summaryItemIndex === activeIndex
                    ? 'summaryLinkActive'
                    : 'summaryLink'
                }
                sx={{cursor: 'pointer'}}
                onClick={() => {
                  window.location.hash = slugify(summaryItem.innerText)

                  scrollToTag(summaryItem)
                }}
              >
                {summaryItem.innerText}
              </Text>
            </Box>
          ))}
        </Flex>
        <Box sx={{mt: 3}}>
          {nextAcademy && (
            <Button
              as={Link}
              href={nextAcademy.path}
              sx={{
                width: '100%',
                fontWeight: 700,
                mb: 3,
              }}
            >
              {t('goToNext')} ({t('course')} {academyIndex + 1})
            </Button>
          )}
          {previousAcademy && (
            <Button
              as={Link}
              href={previousAcademy.path}
              sx={{
                width: '100%',
                fontWeight: 700,
              }}
            >
              {t('goToPrevious')} ({t('course')} {academyIndex - 1})
            </Button>
          )}
        </Box>
      </Box>
    </>
  )
}

const Article = forwardRef(({academy, academyIndex}, contentRef) => {
  const {t} = useTranslation('academy')
  return (
    <>
      <Heading variant="h6" as="h6" sx={{mb: 3}}>
        {t('course')} {academyIndex}
      </Heading>

      <Heading variant="h3" as="h3" sx={{mb: 3}}>
        {academy.title}
      </Heading>

      {academy?.mainImage?.asset?.url && (
        <Image src={academy?.mainImage?.asset?.url}/>
      )}

      {academy.excerpt && <Text>{academy.excerpt}</Text>}

      <Box
        ref={contentRef}
        sx={{
          mt: 4,
          h1: {
            lineHeight: 1.2,
            fontSize: 46,
          },
          h2: {
            lineHeight: 1.2,
            fontSize: 36,
          },
          h3: {
            lineHeight: 1.2,
            fontSize: 28,
          },
          h4: {
            lineHeight: 1.2,
            fontSize: 22,
          },
          h5: {
            lineHeight: 1.2,
          },
          p: {
            lineHeight: 1.5,
          },
        }}
      >
        <BlockContent
          blocks={academy.bodyRaw}
          serializers={serializer}
          hardBreak
        />
      </Box>
    </>
  )
})
Article.displayName = 'Article'

export default function ResellerList({academy, category, academyIndex, previousAcademy, nextAcademy, ...props}) {
  const {t} = useTranslation('academy')
  const router = useRouter()
  const language = router.locale

  const contentRef = useRef(null)
  const lowestIndex = useRef(0)

  const [activeIndex, setActiveIndex] = useState(null)
  const [summaryStructure, setSummaryStructure] = useState([])

  useEffect(() => {
    const articleContent = contentRef?.current?.children[0]

    const summary = []

    // Extract all tags that are present in SUMMARY_TAGS array from academy body
    if (contentRef?.current && articleContent) {
      Array.from(articleContent.children).forEach(item => {
        if (SUMMARY_TAGS.includes(item.tagName)) {
          summary.push(item)
        }
      })
    }

    // Used to subtract indent for example if no H1 tags are present in body H2 is the first indent level
    lowestIndex.current = Math.min(
      ...summary.map(summaryItem => SUMMARY_TAGS.indexOf(summaryItem.tagName))
    )

    setSummaryStructure(summary)

    window.addEventListener('scroll', () => handleOnScroll(summary))

    return () =>
      window.removeEventListener('scroll', () => handleOnScroll(summary))
  }, [contentRef])

  const handleOnScroll = useThrottle(summary => {
    let lowest = null

    summary.forEach((summaryItem, summaryItemIndex) => {
      const {top} = summaryItem.getBoundingClientRect()

      if (top < 100) {
        lowest = summaryItemIndex
      }
    })

    setActiveIndex(lowest)
  }, 100)

  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={props.allNavigationMenu}
      siteSettings={props.allSiteSettings[0]}
    >
      <Breadcrumbs
        links={[
          {title: t('home'), href: `/${language}/academy`},
          {title: category.title, href: `/${language}/academy/${category.slug.current}`},
          {title: academy.title},
        ]}
      />

      <Box sx={{backgroundColor: 'marble', pt: 4, pb: 6}}>
        <Container>
          <Flex sx={{gap: 4}}>
            <Box
              sx={{
                flex: 4,
                display: ['none', null, null, null, 'block'],
              }}
            >
              <Summary
                {...{
                  academyIndex,
                  academy,
                  summaryStructure,
                  previousAcademy,
                  nextAcademy,
                  lowestIndex,
                  activeIndex,
                }}
              />
            </Box>

            <Flex
              backgroundColor="white"
              sx={{
                flex: 6,
                py: [4, null, null, null, 5],
                px: [4, null, null, 5, 6],
                borderRadius: 6,
                filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.05))',
                flexDirection: 'column',
              }}
            >
              <Article
                academy={academy}
                academyIndex={academyIndex}
                ref={contentRef}
              />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  const {data} = await apolloClient.query({
    query: gql`
    query Page {
     allAcademyCategory {
      slug {
       current
      }
      language
      academies {
        slug {
          current
        }
      }
     }
    }
  `,
  });

  const paths = data.allAcademyCategory.filter(page => page.slug.current).reduce(
    (acc, category) => acc.concat(category.academies.filter(page => page.slug.current).map(post => ({
      locale: category.language,
      params: {
        category: category.slug.current,
        post: post.slug.current
      }
    }))),
    []
  )
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params, locale}) {
  const {data} = await apolloClient.query({
    query: gql`
    ${LANGUAGE_FRAGMENT}
    ${LANGUAGETEXT_FRAGMENT}
    ${IMAGEPALETTESWATCH_FRAGMENT}
    ${IMAGEPALETTE_FRAGMENT}
    ${IMAGEMETADATA_FRAGMENT}
    ${IMAGEASSET_FRAGMENT}
    ${IMAGECROP_FRAGMENT}
    ${IMAGEHOTSPOT_FRAGMENT}
    ${LOCALEIMAGE_FRAGMENT}
    ${OPENGRAPH_FRAGMENT}
    ${IMAGE_FRAGMENT}
    ${NAVIGATION_FRAGMENT}
    query PageReseller($category: String, $language: String) {
     allAcademyCategory(
  where: { slug: { current: { eq: $category } }, language: { eq: $language } }
 ) {
  _id
  slug {
   current
  }
  language
  language
  title
  order
  description
  icon {
   name
   icon
   provider
  }
  iconColor {
   theme {
    value
   }
  }
  academies {
   _id
   title
   alternativePages {
    slug {
     current
    }
   }
   author {
    bioRaw
    image {
     ...SanityImage
    }
    name
    slug {
     current
    }
   }
   bgHeader {
    colorSelection {
     title
     value
    }
   }
   bodyRaw
   colorHeader
   containerSize
   disableTitle
   excerpt
   slug {
    current
   }
   language
   readTime
   publishedAt
   openGraph {
    ...SanityOpenGraph
   }
   mainImage {
    ...SanityImage
   }
   imageAlt
  }
 }
     allNavigationMenu {
      ...SanityNavigationMenu
     }
     allSiteSettings {
      ...SanitySiteSettings
     }
    }
  `,
    variables: {
      category: params.category,
      language: locale
    }
  });
  const category = data.allAcademyCategory[0]
  const academyIndex = category.academies.findIndex(academy => academy.slug.current === params.post)
  const academy = category.academies[academyIndex]
  const previousAcademy = academyIndex > 0 ? {
    title: category.academies[academyIndex - 1].title,
    path: category.academies[academyIndex - 1].slug.current
  } : null
  const nextAcademy = academyIndex < category.academies.length - 1 ? {
    title: category.academies[academyIndex + 1].title,
    path: category.academies[academyIndex + 1].slug.current
  } : null
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      category,
      academy,
      academyIndex: academyIndex + 1,
      previousAcademy,
      nextAcademy,
      allNavigationMenu: data.allNavigationMenu,
      allSiteSettings: data.allSiteSettings,
    },
  }
}
