import {client} from "@/sanity-client";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'
import {useTranslation} from "next-i18next";
import {Box, Flex, Heading, Text, useThemeUI} from 'theme-ui'
import Container from '@/components/container'
import styled from '@emotion/styled'
import BlockContent from '@sanity/block-content-to-react'
import PageBuilder from '@/components/pageBuilder'

import MainImage from '@/components/mainImage'
import LinkCustom from '@/components/linkCustom'
import {BiNews} from 'react-icons/bi'
import serializer from '@/helpers/serializers'
import Seo from "@/components/seo";
import site from "@/config";
import OptimizedImage from "@/components/optimizedImage";
import ExitFromPreview from "@/components/ExitFromPreview";
import {PreviewSuspense} from "next-sanity/preview";
import {usePreview} from "@/lib/sanity.preview";
import {groq} from "next-sanity";
import {useRouter} from "next/router";

export default function PageOrPreview({preview, ...props}) {
  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <PreviewPage query={query} queryParams={props.queryParams}/>
    </PreviewSuspense>
  ) : (
    <Page {...props}/>
  );
}

function PreviewPage({query, queryParams}) {
  const data = usePreview(null, query, queryParams);

  return (
    <>
      <Page {...data}/>
      <ExitFromPreview/>
    </>
  );
}


function Page({page, navigation, settings}) {
  const {t} = useTranslation('common')
  const {locale} = useRouter()
  const context = useThemeUI()
  const {theme} = context

  const defaultMeta = settings.openGraphDefault
  const ogMeta = page.openGraph

  const CategoryLink = styled(LinkCustom)`
    color: ${theme.colors.primary600};
  `
  return (
    <Layout
      headerBg={
        page.bgHeader
          ? page.bgHeader.colorSelection && page.bgHeader.colorSelection.value
          : '#0e1b25'
      }
      headerColor={page.colorHeader === 'dark' ? '#000000' : '#ffffff'}
      logoDark={page.colorHeader === 'dark'}
      navMenu={navigation}
      siteSettings={settings}
    >
      <Seo
        title={page.title ? page.title : ''}
        ogTitle={ogMeta && ogMeta.title ? ogMeta.title : page.title}
        ogDescription={
          ogMeta && ogMeta.description
            ? ogMeta.description
            : defaultMeta && defaultMeta.description && defaultMeta
        }
        ogUrl={
          `${site.siteMetadata?.siteUrl}/${page.language}/${page.slug.current}`
        }
        ogImage={
          ogMeta && ogMeta.image
            ? ogMeta.image
            : defaultMeta && defaultMeta.image && defaultMeta.image
        }
      />
      <Box sx={{pb: 4}}>
        <article>
          <Box
            bg={
              page.bgHeader
                ? page.bgHeader.colorSelection &&
                page.bgHeader.colorSelection.value
                : '#0e1b25'
            }
          >
            {page.mainImage && (
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
                  mainImage={page.mainImage}
                  altText={page.imageAlt}
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
                {page.author && (
                  <Box
                    sx={{
                      borderRadius: '50%',
                      maxHeight: '2rem',
                      overflow: 'hidden',
                    }}
                  >
                    <OptimizedImage
                      image={page.author.image}
                      alt={'author ' + page.author && page.author.name}
                      maxWidth="32px"
                    />
                  </Box>
                )}
                <Box p={2}>
                  <Box css={{textAlign: page.author ? 'left' : 'center'}}>
                    {page.author && page.author.name}
                  </Box>
                  {page.publishedAt && (
                    <Text
                      variant="lead"
                      sx={{color: 'dark300', textAlign: 'center'}}
                    >
                      {(new Date(page.publishedAt)).toLocaleDateString(locale)}
                    </Text>
                  )}
                </Box>
              </Flex>
              <Flex sx={{fontSize: '0.8rem'}}>
                <LinkCustom
                  to={'/' + t('lang') + '/' + t('blog')}
                >
                  <Flex
                    sx={{
                      alignItems: 'center',
                      color: 'primary600',
                      mr: 2,
                    }}
                  >
                    <BiNews/> <Box pl={1}>{t('Blog')}</Box>
                  </Flex>
                </LinkCustom>

                {page.categories &&
                  page.categories.map(category => (
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

            {!page.disableTitle && (
              <Heading as="h1" variant="text.h3">
                {page.title}
              </Heading>
            )}

            <Box py={3}>
              {page.content &&
                <PageBuilder content={page.content}/>
              }
              {page.body && (
                <BlockContent
                  blocks={page.body}
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
  const data = await client.fetch('*[_type == "post"]{slug, language}')

  const paths = data.filter(page => page.slug.current).filter(page => isNaN(page.slug.current)).map(page => ({
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

const query = groq`
    {
      "page": *[_type == "post" && slug.current == $slug && language == $language][0] {
        ...,
        author-> {
          ...,
          image {..., asset->},
        },
        categories[]->
      },
      "navigation": *[_type == "navigationMenu"],
      "settings": *[_type == "siteSettings"][0],
    }
  `

export async function getStaticProps({params, locale, preview = false}) {
  const queryParams = {slug: params.post, language: locale}

  if (preview) {
    return {
      props: {
        ...(await serverSideTranslations(locale)),
        preview,
        queryParams
      }
    }
  }

  let data = await client.fetch(query, queryParams)
  if (!data.page) {
    if (locale === 'sv') {
      data = await client.fetch(query, {
        ...queryParams,
        language: null
      })
    } else {
      return {
        notFound: true,
      }
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      preview,
      queryParams: {},
      ...data,
    },
  }
}
