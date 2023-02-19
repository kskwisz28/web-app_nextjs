import {useTranslation} from "next-i18next";
import DivUpper from '@/components/divTop'
import InfoText from '@/components/infoText'
import Layout from '@/components/layout'
import Seo from '@/components/seo'
import {client} from "@/sanity-client";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Custom404(props) {
  const {t} = useTranslation('404')
  const defaultMeta = props.settings.openGraph

  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={props.navigation}
      siteSettings={props.settings}
    >
      <Seo
        ogTitle={'404 - ' + t('404:404Headline')}
        ogDescription={
          defaultMeta &&
          defaultMeta.description &&
          defaultMeta.description.translate
        }
        ogImage={
          defaultMeta && defaultMeta.image && defaultMeta.image.translate
        }
      />

      <InfoText
        centered
        topLine={t('404:404Top')}
        headline={t('404:404Headline')}
        description={t('404:404Text')}
        buttonText={t('404:404PrimaryButton')}
        buttonUrl={t('404:404PrimaryLink')}
        buttonSecondText={t('404:404SecondaryButton')}
        buttonSecondUrl={t('404:404SecondaryLink')}
        buttonSecondType="secondary"
        padding={{top: 5, bottom: 4}}
      />

      <DivUpper/>
    </Layout>
  )
}

export async function getStaticProps({locale}) {
  const data = await client.fetch(`
    {
      "navigation": *[_type == "navigationMenu"],
      "settings": *[_type == "siteSettings"][0],
      "meta": *[_type == "siteMetadata"][0],
    }
  `, {
    language: locale
  })
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      navigation: data.navigation,
      settings: data.settings,
      meta: data.meta,
    },
  }
}
