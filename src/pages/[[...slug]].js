import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout";
import {client} from "@/sanity-client";
import serializer from '@/helpers/serializers'
import Container from '@/components/container'
import BlockContent from '@sanity/block-content-to-react'
import {isHomepage} from "@/helpers/general";
import Seo from '@/components/seo'
import {PathCheck} from '@/helpers/pathCheck'
import site from "@/config";

export default function PageDefault(props) {
  const {content, body} = props.page
  const wrapIntoContainer = props.page && props.page.containerSize && props.page.containerSize !== 'fullwidth'
  const defaultMeta = props.settings.openGraphDefault
  const ogMeta = props.page.openGraph

  const contentJSX = <>
    <BlockContent
      blocks={content}
      serializers={serializer}
      hardBreak
    />
    <BlockContent
      blocks={body}
      serializers={serializer}
      hardBreak
    />
  </>
  return (
    <Layout
      headerBg={props.page.menuBg ? props.page.menuBg.hex : 'aubergine'}
      headerColor="white"
      navMenu={props.navigation}
      siteSettings={props.settings}
    >
      <Seo
        title={props.page.title ? props.page.title : ''}
        ogTitle={
          ogMeta && ogMeta.title ? ogMeta.title : props.page.title
        }
        ogUrl={
          `${site.siteMetadata?.siteUrl}/${PathCheck(props.page.language + '/' + props.page.slug.current)}`
        }
        ogTest={
          `${PathCheck(props.page.language + '/' + props.page.slug.current)}`
        }
        ogDescription={
          ogMeta && ogMeta.description
            ? ogMeta.description
            : defaultMeta && defaultMeta.description && defaultMeta.description
        }
        ogImage={
          ogMeta && ogMeta.image
            ? ogMeta.image
            : defaultMeta && defaultMeta.image && defaultMeta.image
        }
      />
      {wrapIntoContainer ? (
        <Container
          containersize={
            props.page.containerSize
          }
        >
          <div
            sx={{
              variant: 'styles',
            }}
          >
            {contentJSX}
          </div>
        </Container>
      ) : contentJSX}
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await client.fetch('*[_type == "page"]{slug, language}')

  const paths = data.filter(page => page.slug.current).map(page => {
    let path = {
      locale: page.language,
      params: {
        slug: []
      }
    }
    if (!isHomepage(page.slug.current)) {
      path.params = {
        slug: [page.slug.current]
      }
    }
    return path
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params, locale}) {
  const slug = params.slug ? params.slug[0] : `startpage-${locale}`
  const data = await client.fetch(`
    {
      "page": *[_type == "page" && slug.current == $slug && language == $language][0] {
        ...,
        alternativePages[]->,
        content[] {
          ...,
          _type == "integrationsBasic" => {
            ...,
            integrationPicker[]->
          },
        },
        openGraph {
          ...,
          image->
        }
      },
      "navigation": *[_type == "navigationMenu"],
      "settings": *[_type == "siteSettings"][0],
    }
  `, {
    slug, language: locale
  })
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      page: data.page,
      navigation: data.navigation,
      settings: data.settings,
    },
  }
}
