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
import site from "@/config";
import {PathCheck} from "@/helpers/pathCheck";

export default function ResellerList(props) {
  const resellers = props.page
  const defaultMeta = props.settings.openGraphDefault
  const ogMeta = props.page.openGraph
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={props.navigation}
      siteSettings={props.settings}
    >
      <Seo title="Återförsäljare"/>
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
        <MapsLocations items={resellers}/>
      </Box>

      <Container sx={{py: 5}}>
        <Heading as="h1" variant="text.h2" py={3} css={{textAlign: 'center'}}>
          Återförsäljare
        </Heading>
        <Flex css={{flexWrap: 'wrap'}}>
          {resellers.map(r => (
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

export async function getStaticProps({locale}) {
  const data = await client.fetch(`
    {
      "resellers": *[_type == "reseller" && language == $language],
      "navigation": *[_type == "navigationMenu"],
      "settings": *[_type == "siteSettings"][0],
     }
  `, {
    language: locale
  })
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      page: data.resellers,
      navigation: data.navigation,
      settings: data.settings,
    },
  }
}
