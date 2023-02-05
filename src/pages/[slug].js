import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout";
import client from "../apollo-client";
import {gql} from "@apollo/client";
import {CONTENT_FRAGMENT, LOCALIZATION_FRAGMENT, NAVIGATION_FRAGMENT} from "@/helpers/content";

export default function PageDefault(props) {
  console.log('main', props)
  return (
    <Layout
      headerBg={props?.data?.sanityPage?.menuBg?.hex ? props.data.sanityPage.menuBg.hex : 'aubergine'}
      headerColor="white"
      navMenu={props.allNavigationMenu}
      siteSettings={props.allSiteSettings[0]}
    >
      PageDefault
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

  const paths = data.allPage.filter(page => page.slug.current).map(page => ({
    params: {
      slug: page.slug.current,
    },
    locale: page.language
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params, locale}) {
  const {data} = await client.query({
    query: gql`
    ${LOCALIZATION_FRAGMENT}
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
      openGraph {
       title
       description
       image {
        asset {
         _id
         url
        }
       }
      }
     }
      allNavigationMenu {...SanityNavigationMenu}
      allSiteSettings {...SanitySiteSettings}
    }
  `,
    variables: {
      page: params.slug,
      language: locale
    }
  });
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      ...data,
    },
  }
}
