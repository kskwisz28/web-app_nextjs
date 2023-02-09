import client from "@/apollo-client";
import {gql} from "@apollo/client";
import {
  COLOR_FRAGMENT,
  CONTENT_FRAGMENT,
  CONTENTELEMENTS_FRAGMENT,
  HEROCOLORS_FRAGMENT,
  IMAGE_FRAGMENT,
  IMAGEASSET_FRAGMENT,
  IMAGECROP_FRAGMENT,
  IMAGEHOTSPOT_FRAGMENT,
  IMAGEMETADATA_FRAGMENT,
  IMAGEPALETTE_FRAGMENT,
  IMAGEPALETTESWATCH_FRAGMENT, INFOTEXT_FRAGMENT,
  LANGUAGE_FRAGMENT,
  LANGUAGETEXT_FRAGMENT,
  LOCALEIMAGE_FRAGMENT,
  MAINIMAGE_FRAGMENT,
  NAVIGATION_FRAGMENT,
  OPENGRAPH_FRAGMENT,
  PADDING_FRAGMENT, PRICINGPLANITEMS_FRAGMENT,
  SIMPLEILLUSTRATION_FRAGMENT,
  STARTHERO_FRAGMENT,
  STARTTABITEMS_FRAGMENT,
} from "@/helpers/content";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'
import {useTranslation} from "next-i18next";
import {Breadcrumbs} from '@/components/breadcrumbs'
import {Box, Divider, Flex, Grid, Heading, Text, useThemeUI} from 'theme-ui'
import AcademyCard from '@/components/academyCard'
import Container from '@/components/container'
import {useRouter} from "next/router";
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'
import PageBuilder from '@/components/pageBuilder'

import MainImage from '@/components/mainImage'
import LinkCustom from '@/components/linkCustom'
import {BiNews} from 'react-icons/bi'
import serializer from '@/helpers/serializers'

export default function ResellerList(props) {
  const {t} = useTranslation('common')
  const router = useRouter()
  const context = useThemeUI()
  const {theme} = context
  const post = props.page
  const {content} = post

  const authorImage = post?.author?.image?.asset?.url

  const CategoryLink = styled(LinkCustom)`
    color: ${theme.colors.primary600};
    &:hover {
    }
    `
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={props.allNavigationMenu}
      siteSettings={props.allSiteSettings[0]}
    >
      <Box sx={{pb: 4}}>
        <article>
          <Box
            bg={
              post.bgHeader
                ? post.bgHeader.colorSelection &&
                post.bgHeader.colorSelection.value
                : '#0e1b25'
            }
          >
            {post.mainImage && (
              <Box
                sx={{
                  pt: 4,
                  pb: 5,
                  mb: 4,
                }}
              >
                <MainImage
                  centered
                  bottomIn
                  shadowed
                  mainImage={post.mainImage}
                  altText={post && post.imageAlt}
                />
              </Box>
            )}
          </Box>

          <Container containersize="read">
            <Flex
              pt={4}
              pb={2}
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Flex
                sx={{
                  alignItems: 'center',
                }}
              >
                {post.author && (
                  <Image
                    src={authorImage}
                    alt={'author ' + post.author && post.author.name}
                    fill
                    sx={{
                      borderRadius: '50%',
                      maxHeight: '2rem',
                      // mx: 'auto',
                      // display: 'block',
                    }}
                  />
                )}
                <Box p={2}>
                  <Box css={{textAlign: post.author ? 'left' : 'center'}}>
                    {post && post.author && post.author.name}
                  </Box>
                  {post && post.publishedAt && (
                    <Text
                      variant="lead"
                      sx={{color: 'dark300', textAlign: 'center'}}
                    >
                      {post.publishedAt}
                    </Text>
                  )}
                </Box>
              </Flex>
              <Flex sx={{fontSize: '0.8rem'}}>
                <LinkCustom
                  to={'/' + t('common:lang') + '/' + t('common:blog')}
                >
                  <Flex
                    sx={{
                      alignItems: 'center',
                      color: 'primary600',
                      mr: 2,
                    }}
                  >
                    <BiNews/> <Box pl={1}>{t('common:Blog')}</Box>
                  </Flex>
                </LinkCustom>

                {post.categories &&
                  post.categories.map(category => (
                    <CategoryLink
                      key={category._key}
                      to=""
                      // to={'/' + category._rawSlug && category._rawSlug.current}
                      effect="fade"
                      length={0}
                    >
                      #{category.title}
                    </CategoryLink>
                  ))}
              </Flex>
            </Flex>

            {!post.disableTitle && (
              <Heading as="h1" variant="text.h3">
                {post.title}
              </Heading>
            )}

            <Box py={3}>
              {content &&
                <PageBuilder content={content}/>
              }
              {post.bodyRaw && (
                <BlockContent
                  blocks={post.bodyRaw}
                  serializers={serializer}
                  hardBreak
                />
              )}
            </Box>
          </Container>
        </article>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  const {data} = await client.query({
    query: gql`
  query Page {
    allPost
    {
      _id
      slug
      {
        current
      }
      language
      alternativePages
      {
        language
        slug
        {
          current
        }
      }
    }
  }
  `,
  });

  const paths = data.allPost.filter(page => page.slug.current).map(page => ({
    locale: page.language,
    params: {
      post: page.slug.current
    }
  }))
  return {
    paths,
    fallback: false,
  }
}

/*

   ${LANGUAGE_FRAGMENT}
    ${LANGUAGETEXT_FRAGMENT}
  ${IMAGEPALETTESWATCH_FRAGMENT}
  ${IMAGEPALETTE_FRAGMENT}
  ${IMAGEMETADATA_FRAGMENT}
  ${IMAGEASSET_FRAGMENT}
  ${IMAGECROP_FRAGMENT}
  ${IMAGEHOTSPOT_FRAGMENT}
  ${OPENGRAPH_FRAGMENT}
  ${COLOR_FRAGMENT}
  ${MAINIMAGE_FRAGMENT}
  ${SIMPLEILLUSTRATION_FRAGMENT}
  ${LOCALEIMAGE_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${PADDING_FRAGMENT}
  ${STARTTABITEMS_FRAGMENT}
  ${HEROCOLORS_FRAGMENT}
  ${STARTHERO_FRAGMENT}
  ${PRICINGPLANITEMS_FRAGMENT}
  ${INFOTEXT_FRAGMENT}
  ${NAVIGATION_FRAGMENT}
  ${CONTENTELEMENTS_FRAGMENT}
 */

/*

    ${LANGUAGE_FRAGMENT}
    ${LANGUAGETEXT_FRAGMENT}
  ${IMAGEMETADATA_FRAGMENT}
  ${IMAGEPALETTE_FRAGMENT}
  ${IMAGEPALETTESWATCH_FRAGMENT}
  ${IMAGEASSET_FRAGMENT}
  ${IMAGECROP_FRAGMENT}
  ${IMAGEHOTSPOT_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${LOCALEIMAGE_FRAGMENT}
  ${NAVIGATION_FRAGMENT}
  ${OPENGRAPH_FRAGMENT}
 */

export async function getStaticProps({params, locale}) {
  const {data} = await client.query({
    query: gql`
  ${LANGUAGE_FRAGMENT}
    ${LANGUAGETEXT_FRAGMENT}
  ${IMAGEMETADATA_FRAGMENT}
  ${IMAGEPALETTE_FRAGMENT}
  ${IMAGEPALETTESWATCH_FRAGMENT}
  ${IMAGEASSET_FRAGMENT}
  ${IMAGECROP_FRAGMENT}
  ${IMAGEHOTSPOT_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${LOCALEIMAGE_FRAGMENT}
  ${NAVIGATION_FRAGMENT}
  ${OPENGRAPH_FRAGMENT}
  query PageReseller($slug: String, $language: String) {
    allPost(
  where: { slug: { current: { eq: $slug } }, language: { eq: $language } }
 ) {
  _id
  alternativePages {
   slug {
    current
   }
  }
  slug {
   current
  }
  author {
   name
   slug {
    current
   }
   bioRaw
   image {
    ...SanityImage
   }
  }
  bgHeader {
   colorSelection {
    title
    value
   }
  }
  bodyRaw
  content {
   ... on Editor {
    _key
    _type
    blockContentRaw
   }
  }
  categories {
   title
   language
   description
   slug {
    current
   }
  }
  colorHeader
  containerSize
  disableTitle
  excerpt
  imageAlt
  language
  mainImage {
   ...SanityImage
  }
  openGraph {
   ...SanityOpenGraph
  }
  publishedAt
 }
      allNavigationMenu {...SanityNavigationMenu}
      allSiteSettings {...SanitySiteSettings}
  }
  `,
    variables: {
      slug: params.post,
      language: locale
    }
  });
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      page: data.allPost[0],
      allNavigationMenu: data.allNavigationMenu,
      allSiteSettings: data.allSiteSettings,
    },
  }
}
