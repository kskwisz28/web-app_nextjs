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
import MainImage from '@/components/mainImage'

import {getCurrentDate} from '@/helpers/getCurrentDate'
import Item from '@/components/boxListItem'
import DivUpper from '@/components/divTop'
import DivBottom from '@/components/divBottom'

import Certified from '@/images/qb-certified.svg'

export default function Specialist(props) {
  const defaultMeta =
    props.allSiteSettings &&
    props.allSiteSettings[0].openGraphDefault
  const ogMeta =
    props.page && props.page.openGraph
  const specialist = props.page

  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={props.allNavigationMenu}
      siteSettings={props.allSiteSettings[0]}
    >
      <Container>
        {specialist.logo && (
          <Box pt={4}>
            <MainImage
              centered
              maxWidth="10rem"
              mainImage={specialist.logo}
              altText={'company' + specialist.title + ' logo'}
            />
          </Box>
        )}
        <Heading as="h1" pt={2} css={{textAlign: 'center'}}>
          {specialist.companyName} uppfyller kraven för Certifierad Specialist.
        </Heading>
      </Container>
      <Container>
        <Text css={{textAlign: 'center'}}>
          Företaget uppfyller samtliga krav som Quickbutik har för att erhålla
          certifieringen för Quickbutik Specialist och som butiksägare kan man
          känna sig trygg med att anlita dem. Certifiering är en färskvara och
          företaget samt uppdrag kontrolleras löpande.
        </Text>
      </Container>

      <Box py={4} mt={4} bg="light300" css={{textAlign: 'center'}}>
        <Container containersize="read">
          <Image
            mx="auto"
            py={3}
            src={Certified}
            sx={{maxWidth: '8rem', display: 'block'}}
          />
          <Text
            color="green600"
            css={{
              textAlign: 'center',
              fontWeight: '600',
              display: 'block',
            }}
          >
            Senast kontrollerad {getCurrentDate('-')}
          </Text>
          <Flex
            css={{
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              fontSize: '1.2rem',
            }}
          >
            <Item>Svenskt företag</Item>
            <Item>Erfarenhet med e-handel</Item>
            <Item>Svarar inom 48h</Item>
          </Flex>
          <Text variant="text.smaller">
            En Specialist som inte levererar eller på något vis bryter mot
            kravställningen fråntas sin certifiering.
          </Text>
        </Container>
      </Box>
      <Container>
        <Flex css={{justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <Box>
            <Heading as="h3" pt={4}>
              {specialist.companyName} är certifierade specialister inom:
            </Heading>
            {specialist.rows &&
              specialist.rows.map(item => (
                <Item key={item._key}>{item.title}</Item>
              ))}
          </Box>
          <Box>
            <Heading pt={4} as="h3">
              Vem kommer du i kontakt med?
            </Heading>
            <Flex>
              {specialist.specialistContact &&
                specialist.specialistContact.map(item => (
                  <Box p={2} key={item._key}>
                    <MainImage
                      maxWidth="4rem"
                      mainImage={item.contactImage}
                      altText={'employee ' + item.contactName}
                    />
                    <Text pt={2}>{item.contactName}</Text>
                  </Box>
                ))}
            </Flex>
            <Heading pt={2} as="h3">
              Företagsinformation
            </Heading>
            <Box>{specialist.companyAddress}</Box>
            <Box>{specialist.companyCity}</Box>
          </Box>
        </Flex>
      </Container>
      <DivUpper/>
      <Box bg="light300">
        <Container containersize="read">
          <Heading as="h2">Varför anlita en Certifierad Specialist?</Heading>
          <Text>
            Eftersom att Quickbutik säkerställer flertalet faktorer på både
            företags- och kompetensnivå hos en certifierad specialist, slipper
            du som butiksägare göra det tidskrävande jobbet själv och oroa dig
            för riskerna med det. Vi har kravställt och säkerställt att detta
            företag kan leverera inom deras certifierade områden och när du
            behöver hjälpen - finns den där lättåtkomlig.
          </Text>
          <Heading as="h3" pt={4}>
            Detta har säkerställts:
          </Heading>
          <ul>
            <li>Företaget är ett svenskt bolag.</li>
            <li>Företaget är en aktiv verksamhet.</li>
            <li>Företaget är inte på ekonomiskt obestånd.</li>
            <li>Företaget har ansvar/konsultförsäkring.</li>
            <li>Företaget har funnits i längre än 1 år.</li>
            <li>Företagets kontaktuppgifter har bekräftats.</li>
            <li>
              Företaget lämnar alltid en offert som behöver godkännas innan
              betalning.
            </li>
            <li>Företaget svarar inom 48 timmar (vardagar).</li>
          </ul>
          <Heading as="h3" pt={4}>
            Hur kan jag anlita {specialist.companyName}?
          </Heading>
          <Text>
            Det gör du direkt i din Quickbutik-kontrollpanel. Du kan här skapa
            ett uppdrag inom ett av företagets certifierade områden och sedan är
            du igång!
          </Text>
        </Container>
        <DivBottom/>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  const {data} = await client.query({
    query: gql`
     query SpecialistList {
       allSpecialist {
        _id
        slug {
         current
        }
        language
       }
      }
  `,
  });

  const paths = data.allSpecialist.filter(page => page.slug.current).map(page => ({
    locale: page.language,
    params: {
      slug: [page.slug.current]
    }
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params, locale}) {
  const slug = params.slug[0]
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
    query PageSpecialist($page: String, $language: String) {
 allSpecialist(
  where: { slug: { current: { eq: $page } }, language: { eq: $language } }
 ) {
  companyAddress
  companyCity
  companyEmail
  companyName
  companyWebsite
  language
  location {
   alt
   lat
   lng
  }
  logo {...SanityImage}
  openGraph {...SanityOpenGraph}
  rows {
   _key
   title
  }
  specialistArea
  specialistContact {
    contactImage {...SanityImage}
   contactName
  }
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
      page: slug,
      language: locale
    }
  });
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      page: data.allSpecialist[0],
      allNavigationMenu: data.allNavigationMenu,
      allSiteSettings: data.allSiteSettings,
    },
  }
}
