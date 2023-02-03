import {createClient} from "next-sanity";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  apiVersion: "2022-03-25",
  useCdn: true
});

export default function PageDefault(props) {
  console.log(props.data)
  return (
    <Layout
      headerBg={props?.data?.sanityPage?.menuBg?.hex ? props.data.sanityPage.menuBg.hex : 'aubergine'}
      headerColor="white"
      alternateLink={props.alternateLinks}
      navMenu={props.data.allSanityNavigationMenu}
      siteSettings={props.data.allSanitySiteSettings}
      currentLanguage={props?.pageContext?.language}
    >
      PageDefault
    </Layout>
  )
}

export async function getStaticPaths() {
  const pages = await client.fetch(`*[_type == "page"]{_id,'slug': slug.current,language,alternativePages}`);
  const paths = pages.filter(page => page.slug).map(page => ({
    params: {
      slug: page.slug,
    },
    locale: page.language
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params, locale}) {
  const data = await client.fetch(`*[_type == "page" && slug.current == ${params.slug}]`);
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      data,
    },
  }
}
