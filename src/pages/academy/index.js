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
} from "@/helpers/content";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'
import {Box, Heading, Flex, Text, Grid} from 'theme-ui'
import Image from 'next/image'

import Container from '@/components/container'

import Academy from '@/images/academy.png'
import AcademyCard from '@/components/academyCard'
import {useTranslation} from "next-i18next";
import {useMemo} from "react";

export default function ResellerList(props) {
  const {t} = useTranslation('academy')
  const sortedCategories = useMemo(() => Array.from(props.page).sort((a, b) => a.order - b.order), [props.page])
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={props.allNavigationMenu}
      siteSettings={props.allSiteSettings[0]}
    >
      <Box bg="marble" sx={{minHeight: 900}}>
        <Container sx={{py: [4, null, null, 6]}}>
          <AcademyHero/>

          <Grid
            columns={[1, null, null, null, 3]}
            sx={{
              gap: 4,
              my: [4, null, null, 6],
              filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.05));',
            }}
          >
            {sortedCategories.map(category => {
              return (
                <AcademyCard
                  key={category._id}
                  title={category.title}
                  description={category.description}
                  link={`/${category.language}/academy/${category.slug.current}`}
                  linkText={`${t('goTo')} →`}
                  icon={category.icon?.icon}
                  themeColor={category.iconColor?.theme?.value}
                  readTime={
                    category.academies?.reduce(
                      (p, academy) => p + academy?.readTime || 0,
                      0
                    ) || null
                  }
                />
              )
            })}
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

function AcademyHero() {
  const {t} = useTranslation('academy')
  return (
    <Flex
      sx={{
        gap: [3, null, null, 5],
        flexDirection: ['column-reverse', null, null, 'row'],
      }}
    >
      <Flex sx={{flexDirection: 'column', justifyContent: 'center', flex: 1}}>
        <Heading variant="h2" as="h2">
          {t('mainTitle')}
        </Heading>
        <Text variant="normal">{t('mainDescription')}</Text>
      </Flex>
      <Flex sx={{flex: 1}}>
        <Image src={Academy} sx={{objectFit: 'contain'}}/>
      </Flex>
    </Flex>
  )
}

export async function getStaticProps({params, locale}) {
  const {data} = await client.query({
    query: gql`
    ${LANGUAGE_FRAGMENT}
    ${LANGUAGETEXT_FRAGMENT}
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
     allAcademyCategory(where: { language: { eq: $language } }) {
      _id
      slug {
       current
      }
      language
      language
      title
      order
      description
      icon {
       name
       icon
       provider
      }
      iconColor {
       theme {
        value
       }
      }
      academies {
       _id
       title
       excerpt
       slug {
        current
       }
       language
       readTime
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
      language: locale
    }
  });
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      page: data.allAcademyCategory,
      allNavigationMenu: data.allNavigationMenu,
      allSiteSettings: data.allSiteSettings,
    },
  }
}
