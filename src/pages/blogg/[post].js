import {client} from "@/sanity-client";
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
import Seo from "@/components/seo";
import site from "@/config";
import OptimizedImage from "@/components/optimizedImage";

export default function ResellerList(props) {
  const {t} = useTranslation('common')
  const context = useThemeUI()
  const {theme} = context
  const post = props.page

  const defaultMeta = props.settings.openGraphDefault
  const ogMeta = post && post.openGraph

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
      navMenu={props.navigation}
      siteSettings={props.settings}
    >
      <Seo
        title={post.title ? post.title : ''}
        ogTitle={ogMeta && ogMeta.title ? ogMeta.title : post.title}
        ogDescription={
          ogMeta && ogMeta.description
            ? ogMeta.description
            : defaultMeta && defaultMeta.description && defaultMeta
        }
        ogUrl={
          `${site.siteMetadata?.siteUrl}/${post.language}/${post.slug.current}`
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
                  <Box
                    sx={{
                      borderRadius: '50%',
                      maxHeight: '2rem',
                      overflow: 'hidden',
                    }}
                  >
                    <OptimizedImage
                      image={post.author.image}
                      alt={'author ' + post.author && post.author.name}
                      width={32}
                    />
                  </Box>
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
              {post.content &&
                <PageBuilder content={post.content}/>
              }
              {post.body && (
                <BlockContent
                  blocks={post.body}
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

  const paths = data.filter(page => page.slug.current).map(page => ({
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

export async function getStaticProps({params, locale, defaultLocale}) {
  let data = await client.fetch(`
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
  `, {
    slug: params.post,
    language: locale
  })
  if (!data.page) {
    if (locale === defaultLocale) {
      data = await client.fetch(`
    {
      "page": *[_type == "post" && slug.current == $slug && language == null][0] {
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
  `, {
        slug: params.post,
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
      page: data.page,
      navigation: data.navigation,
      settings: data.settings,
    },
  }
}
