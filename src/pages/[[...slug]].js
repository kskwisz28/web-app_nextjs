import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout";
import client from "../apollo-client";
import {gql} from "@apollo/client";
import {
  CONTENT_FRAGMENT,
  COLOR_FRAGMENT,
  NAVIGATION_FRAGMENT,
  LANGUAGE_FRAGMENT,
  LANGUAGETEXT_FRAGMENT,
  OPENGRAPH_FRAGMENT,
  IMAGEPALETTESWATCH_FRAGMENT,
  IMAGEPALETTE_FRAGMENT,
  IMAGEASSET_FRAGMENT,
  IMAGEMETADATA_FRAGMENT,
  IMAGECROP_FRAGMENT,
  IMAGEHOTSPOT_FRAGMENT,
  LOCALEIMAGE_FRAGMENT,
  IMAGE_FRAGMENT,
  INFOTEXT_FRAGMENT,
  MAINIMAGE_FRAGMENT,
  SIMPLEILLUSTRATION_FRAGMENT,
  PADDING_FRAGMENT,
  STARTTABITEMS_FRAGMENT, HEROCOLORS_FRAGMENT, STARTHERO_FRAGMENT, PRICINGPLANITEMS_FRAGMENT
} from "@/helpers/content";
import serializer from '../helpers/serializers'
import Container from '@/components/container'
import PageBuilder from '@/components/pageBuilder'
import BlockContent from '@sanity/block-content-to-react'
import {isHomepage} from "@/helpers/general";

export default function PageDefault(props) {
  const {content} = props.page
  const wrapIntoContainer = props.page && props.page.containerSize && props.page.containerSize !== 'fullwidth'

  const contentJSX = <>
    {content &&
      <PageBuilder content={content.slice(0, 1)}/>
    }
    <BlockContent
      blocks={props?.page?.bodyRaw}
      serializers={serializer}
      hardBreak
    />
  </>

  return (
    <Layout
      headerBg={props?.data?.sanityPage?.menuBg?.hex ? props.data.sanityPage.menuBg.hex : 'aubergine'}
      headerColor="white"
      navMenu={props.allNavigationMenu}
      siteSettings={props.allSiteSettings[0]}
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
  const {data} = await client.query({
    query: gql`
    query Page {
     allPage {
      _id
      slug {
       current
      }
      language
      alternativePages {
       language
       slug {
        current
       }
      }
     }
    }
  `,
  });

  const paths = data.allPage.filter(page => page.slug.current).map(page => {
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
  const {data} = await client.query({
    query: gql`
    ${LANGUAGE_FRAGMENT}
    ${LANGUAGETEXT_FRAGMENT}
    ${OPENGRAPH_FRAGMENT}
    ${IMAGEPALETTESWATCH_FRAGMENT}
    ${IMAGEPALETTE_FRAGMENT}
    ${INFOTEXT_FRAGMENT}
    ${IMAGEMETADATA_FRAGMENT}
    ${COLOR_FRAGMENT}
    ${IMAGEASSET_FRAGMENT}
    ${IMAGECROP_FRAGMENT}
    ${IMAGEHOTSPOT_FRAGMENT}
    ${MAINIMAGE_FRAGMENT}
    ${SIMPLEILLUSTRATION_FRAGMENT}
    ${LOCALEIMAGE_FRAGMENT}
    ${IMAGE_FRAGMENT}
    ${PADDING_FRAGMENT}
    ${STARTTABITEMS_FRAGMENT}
    ${HEROCOLORS_FRAGMENT}
    ${STARTHERO_FRAGMENT}
    ${PRICINGPLANITEMS_FRAGMENT}
    ${NAVIGATION_FRAGMENT}
    ${CONTENT_FRAGMENT}
    query PageDefault($page: String, $language: String) {
    allPage(
      where: { slug: { current: { eq: $page } }, language: { eq: $language } }
     ) {
      containerSize
      title
      slug {
       current
      }
      language
      bodyRaw
      menuBg {
       hex
      }
      ...Content
      alternativePages {
       language
       slug {current}
      }
      openGraph {...SanityOpenGraph}
     }
      allNavigationMenu {...SanityNavigationMenu}
      allSiteSettings {...SanitySiteSettings}
    }
  `,
    variables: {
      page: slug,
      language: locale
    }
  });
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      page: data.allPage[0],
      allNavigationMenu: data.allNavigationMenu,
      allSiteSettings: data.allSiteSettings,
    },
  }
}
