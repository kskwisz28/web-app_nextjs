import {client} from "@/sanity-client";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'
import {useTranslation} from "next-i18next";
import {Breadcrumbs} from '@/components/breadcrumbs'
import {Box, Divider, Flex, Grid, Heading, Text} from 'theme-ui'
import AcademyCard from '@/components/academyCard'
import Container from '@/components/container'
import {useRouter} from "next/router";
import Seo from "@/components/seo";
import {usePreview} from "@/lib/sanity.preview";
import {PreviewSuspense} from "next-sanity/preview";
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

function Page({page, settings, navigation}) {
  const {t} = useTranslation('academy')
  const router = useRouter()

  const categoryColor = page.iconColor?.theme?.value
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={navigation}
      siteSettings={settings}
    >
      <Seo ogTitle={`${page.title} - Quickbutik Academy`}/>
      <Breadcrumbs
        links={[
          {title: t('home'), href: `/${router.locale}/academy`},
          {title: page.title},
        ]}
        t={t}
      />

      <Box bg="marble" sx={{minHeight: 700}}>
        <Container sx={{py: 4}}>
          <Flex sx={{gap: 4}}>
            <Box
              sx={{
                borderRadius: 6,
                background: 'white',
                width: 110,
                height: 110,
                p: 3,
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  svg: {
                    height: '100%',
                    width: '100%',
                    fill: categoryColor || 'faded',
                    zIndex: 1,
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: page.icon?.icon,
                }}
              />
            </Box>

            <Flex sx={{flexDirection: 'column', justifyContent: 'center'}}>
              <Heading>{page.title}</Heading>
              <Text sx={{mt: 2}}>{page.description}</Text>
            </Flex>
          </Flex>

          <Divider sx={{my: 4, color: '#FAF8F7'}}/>

          <Grid gap={4} columns={[1, null, null, null, 2]}>
            {page.academies &&
              page.academies
                .filter(
                  academy =>
                    !!academy.title &&
                    !!academy.slug?.current &&
                    !!page.slug?.current
                )
                .map((academy, academyIndex) => (
                  <AcademyCard
                    key={academy._key}
                    title={`${t('course')} ${academyIndex + 1}`}
                    description={academy.title}
                    link={`/${page.language}/academy/${page.slug.current}/${academy.slug.current}`}
                    linkText={`${t('beginCourse')} →`}
                    readTime={academy?.readTime}
                    t={t}
                  />
                ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await client.fetch('*[_type == "academyCategory"]{slug, language}')
  const paths = data.filter(page => page.slug.current).map(page => ({
    locale: page.language,
    params: {
      category: page.slug.current
    }
  }))
  return {
    paths,
    fallback: false,
  }
}

const query = groq`
  {
    "page": *[_type == "academyCategory" && slug.current == $slug && language == $language][0] {
      ...,
      academies[]->
    },
    "navigation": *[_type == "navigationMenu"],
    "settings": *[_type == "siteSettings"][0],
  }
  `

export async function getStaticProps({params, locale, preview = false}) {
  const queryParams = {slug: params.category, language: locale}

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

