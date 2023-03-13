import PageOrPreview, {getPropsForIndex} from "@/views/blogIndex";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


export default function Page(props) {
  return <PageOrPreview {...props}/>
}

export async function getStaticProps({locale, defaultLocale, preview = false}) {
  if (locale === defaultLocale) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      ...(await getPropsForIndex(null, locale, preview))
    }
  }
}