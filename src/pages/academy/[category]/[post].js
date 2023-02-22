import {client} from "@/sanity-client";
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
import Seo from "@/components/seo";
import ExitFromPreview from "@/components/ExitFromPreview";
import {PreviewSuspense} from "next-sanity/preview";
import {usePreview} from "@/lib/sanity.preview";
import {groq} from "next-sanity";

export default function PageOrPreview({preview, ...props}) {
  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <PreviewPage query={query} queryParams={props.queryParams}/>
    </PreviewSuspense>
  ) : (
    <Page {...props}/>
  );
}

function PreviewPage({query, queryParams: {post_slug, queryParams}}) {
  const data = usePreview(null, query, queryParams);
  const props = generateProps(data, post_slug)

  return (
    <>
      <Page {...props}/>
      <ExitFromPreview/>
    </>
  );
}

function Page({page, category, academyIndex, previousAcademy, nextAcademy, settings, navigation}) {
  const {t} = useTranslation('academy')
  const router = useRouter()
  const language = router.locale

  const contentRef = useRef(null)
  const lowestIndex = useRef(0)

  const [activeIndex, setActiveIndex] = useState(null)
  const [summaryStructure, setSummaryStructure] = useState([])

  const ogMeta = page.openGraph
  const defaultMeta = settings.openGraphDefault

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
      navMenu={navigation}
      siteSettings={settings}
    >
      <Seo
        title={page?.title}
        ogTitle={ogMeta?.title || page.title}
        ogDescription={
          ogMeta?.description || page.excerpt || defaultMeta?.description
        }
        ogImage={ogMeta?.image || defaultMeta?.image}
      />
      <Breadcrumbs
        links={[
          {title: t('home'), href: `/${language}/academy`},
          {title: category.title, href: `/${language}/academy/${category.slug.current}`},
          {title: page.title},
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
                  academy: page,
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
                academy={page}
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
              key={summaryItem._id}
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
          blocks={academy.body}
          serializers={serializer}
          hardBreak
        />
      </Box>
    </>
  )
})
Article.displayName = 'Article'

export async function getStaticPaths() {
  const data = await client.fetch('*[_type == "academyCategory"]{slug, language, academies[]-> {slug}}')

  const paths = data.filter(page => page.slug.current).reduce(
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

const query = groq`
  {
    "category": *[_type == "academyCategory" && slug.current == $slug && language == $language][0] {
      ...,
      academies[]->,
    },
    "navigation": *[_type == "navigationMenu"],
    "settings": *[_type == "siteSettings"][0],
  }
  `

function generateProps({category, settings, navigation}, post_slug) {
  const academyIndex = category.academies.findIndex(academy => academy.slug.current === post_slug)
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
    category,
    academyIndex: academyIndex + 1,
    page: academy,
    previousAcademy,
    nextAcademy,
    settings,
    navigation,
  }
}

export async function getStaticProps({params, locale, preview = false}) {
  const queryParams = {slug: params.category, language: locale}

  if (preview) {
    return {
      props: {
        ...(await serverSideTranslations(locale)),
        preview,
        queryParams: {
          ...queryParams,
          post_slug: params.post,
        }
      }
    }
  }

  const data = await client.fetch(query, queryParams)
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      preview,
      queryParams: {},
      ...generateProps(data, params.post)
    },
  }
}
