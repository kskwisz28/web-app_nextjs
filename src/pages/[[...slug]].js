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
import {groq} from "next-sanity";
import {PreviewSuspense} from "next-sanity/preview";
import {usePreview} from "@/lib/sanity.preview";
import ExitFromPreview from "@/components/ExitFromPreview";

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
  const {content, body} = page
  const wrapIntoContainer = page && page.containerSize && page.containerSize !== 'fullwidth'
  const defaultMeta = settings.openGraphDefault
  const ogMeta = page.openGraph

  const contentJSX = <>
    {content && <BlockContent
      blocks={content}
      serializers={serializer}
      hardBreak
    />}
    {body && <BlockContent
      blocks={body}
      serializers={serializer}
      hardBreak
    />}
  </>
  return (
    <Layout
      headerBg={page.menuBg ? page.menuBg.hex : 'aubergine'}
      headerColor="white"
      navMenu={navigation}
      siteSettings={settings}
    >
      <Seo
        title={page.title ? page.title : ''}
        ogTitle={
          ogMeta && ogMeta.title ? ogMeta.title : page.title
        }
        ogUrl={
          `${site.siteMetadata?.siteUrl}/${PathCheck(page.language + '/' + page.slug.current)}`
        }
        ogTest={
          `${PathCheck(page.language + '/' + page.slug.current)}`
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
            page.containerSize
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
        slug: page.slug.current.split('/'),
      }
    }
    return path
  })
  return {
    paths,
    fallback: false,
  }
}

const query = groq`
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
           image {
            _type == 'localeImage' => @->,
            _type != 'localeImage' => @,
           }
        }
      },
      "navigation": *[_type == "navigationMenu"],
      "settings": *[_type == "siteSettings"][0],
    }
  `

export async function getStaticProps({params, locale, preview = false}) {
  const slug = params.slug ? params.slug.join("/") : `startpage-${locale}`
  const queryParams = {slug, language: locale}

  if (preview) {
    return {
      props: {
        ...(await serverSideTranslations(locale)),
        preview,
        queryParams
      }
    }
  }

  const data = await client.fetch(query, queryParams)
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      preview,
      queryParams: {},
      ...data,
    },
  }
}
