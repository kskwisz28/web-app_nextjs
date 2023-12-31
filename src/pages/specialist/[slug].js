import {client} from "@/sanity-client";
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
import Seo from "@/components/seo";
import {PreviewSuspense} from "next-sanity/preview";
import {usePreview} from "@/lib/sanity.preview";
import ExitFromPreview from "@/components/ExitFromPreview";
import {groq} from "next-sanity";

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


function Page({page, navigation, settings}) {
  const defaultMeta = settings.openGraphDefault
  const ogMeta = page.openGraph

  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={navigation}
      siteSettings={settings}
    >
      <Seo
        title={page.companyName ? page.companyName : ''}
        ogTitle={
          ogMeta && ogMeta.title
            ? ogMeta.title
            : page.companyName
        }
        ogDescription={
          ogMeta && ogMeta.description
            ? ogMeta.description
            : defaultMeta && defaultMeta.description && defaultMeta.description
        }
        ogImage={
          ogMeta && ogMeta.image
            ? ogMeta.image
            : defaultMeta && defaultMeta.image && defaultMeta.image
        }
      />
      <Container>
        {page.logo && (
          <Box pt={4}>
            <MainImage
              centered
              maxWidth="10rem"
              mainImage={page.logo}
              altText={'company' + page.title + ' logo'}
            />
          </Box>
        )}
        <Heading as="h1" pt={2} css={{textAlign: 'center'}}>
          {page.companyName} uppfyller kraven för Certifierad Specialist.
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
              {page.companyName} är certifierade specialister inom:
            </Heading>
            {page.rows && page.rows.map(item => (
              <Item key={item._key}>{item.title}</Item>
            ))}
          </Box>
          <Box>
            <Heading pt={4} as="h3">
              Vem kommer du i kontakt med?
            </Heading>
            <Flex>
              {page.specialistContact &&
                page.specialistContact.map(item => (
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
            <Box>{page.companyAddress}</Box>
            <Box>{page.companyCity}</Box>
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
            Hur kan jag anlita {page.companyName}?
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
  const data = await client.fetch('*[_type == "specialist"]{slug, language}')

  const paths = data.filter(page => page.slug.current).map(page => ({
    locale: page.language,
    params: {
      slug: page.slug.current
    }
  }))
  return {
    paths,
    fallback: false,
  }
}

const query = groq`
  {
    "page": *[_type == "specialist" && slug.current == $slug && language == $language][0],
    "navigation": *[_type == "navigationMenu"],
    "settings": *[_type == "siteSettings"][0],
  }
  `

export async function getStaticProps({params, locale, preview = false}) {
  const queryParams = {slug: params.slug, language: locale}

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
