import client from "@/apollo-client";
import {gql} from "@apollo/client";
import {
  IMAGE_FRAGMENT,
  IMAGEASSET_FRAGMENT,
  IMAGECROP_FRAGMENT,
  IMAGEHOTSPOT_FRAGMENT,
  IMAGEMETADATA_FRAGMENT,
  IMAGEPALETTE_FRAGMENT,
  IMAGEPALETTESWATCH_FRAGMENT,
  LANGUAGE_FRAGMENT,
  LANGUAGETEXT_FRAGMENT,
  LOCALEIMAGE_FRAGMENT,
  NAVIGATION_FRAGMENT,
  OPENGRAPH_FRAGMENT,
} from "@/helpers/content";
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

export default function ResellerList(props) {
  const resellers = props.page
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={props.allNavigationMenu}
      siteSettings={props.allSiteSettings[0]}
    >
      <Container containersize="read">
        <Image
          mx="auto"
          pb={3}
          pt={5}
          src={ResellerImage}
          sx={{maxWidth: '8rem', display: 'block'}}
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

export async function getStaticProps({params, locale}) {
  const {data} = await client.query({
    query: gql`
    ${LANGUAGE_FRAGMENT}
    ${LANGUAGETEXT_FRAGMENT}
    ${OPENGRAPH_FRAGMENT}
    ${IMAGEPALETTESWATCH_FRAGMENT}
    ${IMAGEPALETTE_FRAGMENT}
    ${IMAGEMETADATA_FRAGMENT}
    ${IMAGEASSET_FRAGMENT}
    ${IMAGECROP_FRAGMENT}
    ${IMAGEHOTSPOT_FRAGMENT}
    ${LOCALEIMAGE_FRAGMENT}
    ${IMAGE_FRAGMENT}
    ${NAVIGATION_FRAGMENT}
    query PageReseller($language: String) {
 allReseller(where: { language: { eq: $language } }) {
  _id
  slug {
   current
  }
  language
  companyName
  companyCity
  companyAddress
  companyEmail
  companyWebsite
  contactName
  location {lat lng alt}
  logo {...SanityImage}
  openGraph {...SanityOpenGraph}
 }
 allNavigationMenu {
  ...SanityNavigationMenu
 }
 allSiteSettings {
  ...SanitySiteSettings
 }
}
  `,
    variables: {
      language: locale
    }
  });
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      page: data.allReseller,
      allNavigationMenu: data.allNavigationMenu,
      allSiteSettings: data.allSiteSettings,
    },
  }
}
