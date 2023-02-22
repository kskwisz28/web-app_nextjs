import {client} from "@/sanity-client";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'
import {Box, Heading, Flex, Text, Grid} from 'theme-ui'
import Image from 'next/image'

import Container from '@/components/container'
import Seo from "@/components/seo";

import Academy from '@/images/academy.png'
import AcademyCard from '@/components/academyCard'
import {useTranslation} from "next-i18next";
import {useMemo} from "react";
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

function Page({categories, navigation, settings}) {
  const {t} = useTranslation('academy')
  const sortedCategories = useMemo(() => Array.from(categories).sort((a, b) => a.order - b.order),
    [categories])
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={navigation}
      siteSettings={settings}
    >
      <Seo ogTitle="Quickbutik Academy"/>
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
            {sortedCategories.map(category => (
              <AcademyCard
                key={category._id}
                title={category.title}
                description={category.description}
                link={`/${category.language}/academy/${category.slug.current}`}
                linkText={`${t('goTo')} →`}
                icon={category.icon?.icon}
                themeColor={category.iconColor?.theme?.value}
                readTime={
                  category.academies.reduce(
                    (p, academy) => p + academy.readTime || 0,
                    0
                  ) || null
                }
              />
            ))}
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
        <Image
          src={Academy}
          sx={{objectFit: 'contain', width: '100%', height: 'auto',}}
        />
      </Flex>
    </Flex>
  )
}

const query = groq`
  {
    "categories": *[_type == "academyCategory" && language == $language] {
      ...,
      academies[]->
    },
    "navigation": *[_type == "navigationMenu"],
    "settings": *[_type == "siteSettings"][0], 
  }`

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
