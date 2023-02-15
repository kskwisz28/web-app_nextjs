import {client} from "@/apollo-client";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'
import {Box, Heading, Flex, Text} from 'theme-ui'

import Container from '@/components/container'
import DivUpper from '@/components/divTop'
import DivBottom from '@/components/divBottom'

import MapsLocations from '@/components/mapsLocations'
import EducationInfoBox from '@/components/educationInfoBox'
import EducationInfo from '@/components/educationInfo'
import CTABoxRegister from '@/components/ctaBoxButtons'

export default function ResellerList(props) {
  const educations = props.page
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={props.navigation}
      siteSettings={props.settings}
    >
      <Container containersize="read">
        <Heading as="h1" pt={4} css={{fontSize: '3em', textAlign: 'center'}}>
          Skolor & utbildningar inom e-handel i Sverige
        </Heading>
        <Text as="div" py={4} css={{textAlign: 'center', display: 'block'}}>
          Hitta svenska utbildningar som lär dig allt du behöver för att starta och driva e-handel. Du hittar även de
          utbildningar där Quickbutik ingår här.
        </Text>
      </Container>

      <Box py={4}>
        <MapsLocations items={educations}/>
      </Box>

      <Container sx={{py: 5}}>
        <Flex css={{flexWrap: 'wrap'}}>
          {educations.map(r => (
            <Box
              key={r._id}
              p={2}
              sx={{
                width: ['100%', null, '50%', null, '33.33%'],
              }}
            >
              <EducationInfoBox {...r} />
            </Box>
          ))}
        </Flex>
      </Container>
      <DivUpper/>
      <Box bg="light300">
        <Container containersize="read">
          <EducationInfo/>

        </Container>
        <DivBottom/>

        <Container containersize="container">
          <CTABoxRegister
            info={{
              headline: 'Köra igång på egen hand?',
              description: 'Du kan även själv komma igång med e-handel och ta del av vårt egna utbildningsmaterial för e-handel.',
              centered: true,
              colorBg: {hex: '#362F4A'},
              colorHeadline: {hex: '#fff'},
              colorDesc: {hex: '#fff'},
            }}
            primaryButtonText={"Starta webbutik"}
            primaryButtonUrl={"/starta-webbutik"}
            secondaryButtonText={"Besök hjälpcenter"}
            secondaryButtonUrl={"https://help.quickbutik.com"}
            padding={{bottom: 6}}
          />
        </Container>

      </Box>
    </Layout>
  )
}

export async function getStaticProps({params, locale}) {
  const data = await client.fetch(`
    {
      "educations": *[_type == "education" && language == $language],
      "navigation": *[_type == "navigationMenu"],
      "settings": *[_type == "siteSettings"][0],
     }
  `, {
    language: locale
  })
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      page: data.educations,
      navigation: data.navigation,
      settings: data.settings,
    },
  }
}
