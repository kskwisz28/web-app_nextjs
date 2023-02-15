import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout";
import {client} from "@/apollo-client";
import serializer from '@/helpers/serializers'
import Container from '@/components/container'
import PageBuilder from '@/components/pageBuilder'
import BlockContent from '@sanity/block-content-to-react'
import {isHomepage} from "@/helpers/general";

export default function PageDefault(props) {
  const {content, body} = props.page
  const wrapIntoContainer = props.page && props.page.containerSize && props.page.containerSize !== 'fullwidth'

  /*
  const contentJSX = <>
    {content && <PageBuilder content={content}/>}
    {bodyRaw && <BlockContent
      blocks={bodyRaw}
      serializers={serializer}
      hardBreak
    />}
  </>

   */

  const contentJSX = <BlockContent
    blocks={content || body}
    serializers={serializer}
    hardBreak
  />
  return (
    <Layout
      headerBg={props?.data?.sanityPage?.menuBg?.hex ? props.data.sanityPage.menuBg.hex : 'aubergine'}
      headerColor="white"
      navMenu={props.navigation}
      siteSettings={props.settings}
    >
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
  const data = await client.fetch('{' +
    '"page": *[_type == "page" && slug.current == $slug && language == $language][0] {' +
      '...,' +
      'alternativePages[]->,' +
      'content[] {' +
        '...,' +
        '_type == "integrationsBasic" => {' +
          '...,' +
          'integrationPicker[]->' +
        '}' +
      '}' +
    '},' +
    '"navigation": *[_type == "navigationMenu"],' +
    '"settings": *[_type == "siteSettings"][0],' +
    '}', {
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
