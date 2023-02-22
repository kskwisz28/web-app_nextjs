import {client} from "@/sanity-client";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'
import {Box, Heading, Flex, Text} from 'theme-ui'
import Image from 'next/image'

import Container from '@/components/container'

import DivUpper from '@/components/divTop'
import DivBottom from '@/components/divBottom'

import ResellerImage from '../images/qb-reseller.svg'
import MapsLocations from '@/components/mapsLocations'
import ResellerInfo from '@/components/resellerInfo'
import CompanyInfoBox from '@/components/companyInfoBox'
import Seo from "@/components/seo";
import {PreviewSuspense} from "next-sanity/preview";
import ExitFromPreview from "@/components/ExitFromPreview";
import {groq} from "next-sanity";
import {usePreview} from "@/lib/sanity.preview";

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

function Page({page, settings, navigation}) {
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={navigation}
      siteSettings={settings}
    >
      <Seo ogTitle="Återförsäljare"/>
      <Container containersize="read">
        <Image
          src={ResellerImage}
          sx={{maxWidth: '8rem', display: 'block', mx: 'auto', pb: '3', pt: '5'}}
        />
        <Heading as="h1" pt={2} css={{textAlign: 'center'}}>
          Hitta din lokala återförsäljare
        </Heading>
        <Text as="div" css={{textAlign: 'center'}}>
          Hitta ett lokalt företag nära dig som arbetar med Quickbutik dagligen
          och som personligen hjälper dig igång bästa möjliga sätt. Alla våra
          återförsäljare är svenska företag, kan e-handel och svarar inom 48
          timmar.
        </Text>
      </Container>

      <Box py={4}>
        <MapsLocations items={page}/>
      </Box>

      <Container sx={{py: 5}}>
        <Heading as="h1" variant="text.h2" py={3} css={{textAlign: 'center'}}>
          Återförsäljare
        </Heading>
        <Flex css={{flexWrap: 'wrap'}}>
          {page.map(r => (
            <Box
              key={r._id}
              p={2}
              sx={{
                width: ['100%', null, '50%', null, '33.33%'],
              }}
            >
              <CompanyInfoBox {...r} />
            </Box>
          ))}
        </Flex>
      </Container>
      <DivUpper/>
      <Box bg="light300">
        <Container containersize="read">
          <ResellerInfo/>
        </Container>
        <DivBottom/>
      </Box>
    </Layout>
  )
}

const query = groq`
    {
      "page": *[_type == "reseller" && language == $language],
      "navigation": *[_type == "navigationMenu"],
      "settings": *[_type == "siteSettings"][0],
     }
  `

export async function getStaticProps({locale, preview = false}) {
  const queryParams = {language: locale}

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
