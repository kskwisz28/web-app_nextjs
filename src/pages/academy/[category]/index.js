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
import {useTranslation} from "next-i18next";
import {Breadcrumbs} from '@/components/breadcrumbs'
import {Box, Divider, Flex, Grid, Heading, Text} from 'theme-ui'
import AcademyCard from '@/components/academyCard'
import Container from '@/components/container'
import {useRouter} from "next/router";

export default function ResellerList(props) {
  const {t} = useTranslation('academy')
  const router = useRouter()

  const category = props.page
  const categoryColor = category?.iconColor?.theme?.value
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={props.allNavigationMenu}
      siteSettings={props.allSiteSettings[0]}
    >
      <Breadcrumbs
        links={[
          {title: t('home'), href: `/${router.locale}/academy`},
          {title: category.title},
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
                  __html: category?.icon?.icon,
                }}
              />
            </Box>

            <Flex sx={{flexDirection: 'column', justifyContent: 'center'}}>
              <Heading>{category.title}</Heading>
              <Text sx={{mt: 2}}>{category.description}</Text>
            </Flex>
          </Flex>

          <Divider sx={{my: 4, color: '#FAF8F7'}}/>

          <Grid gap={4} columns={[1, null, null, null, 2]}>
            {!!category?.academies &&
              category.academies
                .filter(
                  academy =>
                    !!academy?.title &&
                    !!academy?.slug?.current &&
                    !!category?.slug?.current
                )
                .map((academy, academyIndex) => (
                  <AcademyCard
                    key={academy._key}
                    title={`${t('course')} ${academyIndex + 1}`}
                    description={academy.title}
                    link={`/${category.language}/academy/${category.slug.current}/${academy.slug.current}`}
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
  const {data} = await client.query({
    query: gql`
    query Page {
     allAcademyCategory {
      slug {
       current
      }
      language
     }
    }
  `,
  });

  const paths = data.allAcademyCategory.filter(page => page.slug.current).map(page => ({
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
    query PageReseller($category: String, $language: String) {
     allAcademyCategory(where: { slug: {current: {eq: $category}}, language: { eq: $language } }) {
      _id
      slug {
       current
      }
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
      category: params.category,
      language: locale
    }
  });
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      page: data.allAcademyCategory[0],
      allNavigationMenu: data.allNavigationMenu,
      allSiteSettings: data.allSiteSettings,
    },
  }
}
