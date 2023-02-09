import client from "@/apollo-client";
import {gql} from "@apollo/client";
import {
  COLOR_FRAGMENT,
  CONTENT_FRAGMENT,
  CONTENTELEMENTS_FRAGMENT,
  HEROCOLORS_FRAGMENT,
  IMAGE_FRAGMENT,
  IMAGEASSET_FRAGMENT,
  IMAGECROP_FRAGMENT,
  IMAGEHOTSPOT_FRAGMENT,
  IMAGEMETADATA_FRAGMENT,
  IMAGEPALETTE_FRAGMENT,
  IMAGEPALETTESWATCH_FRAGMENT, INFOTEXT_FRAGMENT,
  LANGUAGE_FRAGMENT,
  LANGUAGETEXT_FRAGMENT,
  LOCALEIMAGE_FRAGMENT,
  MAINIMAGE_FRAGMENT,
  NAVIGATION_FRAGMENT,
  OPENGRAPH_FRAGMENT,
  PADDING_FRAGMENT, PRICINGPLANITEMS_FRAGMENT,
  SIMPLEILLUSTRATION_FRAGMENT,
  STARTHERO_FRAGMENT,
  STARTTABITEMS_FRAGMENT,
} from "@/helpers/content";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'
import {useTranslation} from "next-i18next";
import {Breadcrumbs} from '@/components/breadcrumbs'
import {Box, Divider, Flex, Grid, Heading, Text, useThemeUI} from 'theme-ui'
import Container from '@/components/container'

import BlogSidebar from '@/components/blogSidebar'
import CardPost from '@/components/cardPost'

export default function ResellerList(props) {
  const categoriesMenu =
    props.allNavigationMenu &&
    props.allNavigationMenu.filter(
      menus => menus.menuPlacement === 'blogCategories'
    )
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={props.allNavigationMenu}
      siteSettings={props.allSiteSettings[0]}
    >

      <Box bg="light300">
        <Container sx={{py: 4}}>
          <Grid gap={4} columns={[1, null, null, '2fr 1fr']}>
            <div className="blog-posts">
              <ul>
                {props.posts?.map(
                  node =>
                    node.slug && (
                      <Box
                        bg="white"
                        mb={5}
                        sx={{
                          borderRadius: '16px',
                          transition:
                            '0.1s ease-in-out transform, 0.2s ease-in-out box-shadow',
                          ':hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: 'perspective',
                            transition: 'all 0.2s ease',
                          },
                        }}
                      >
                        <CardPost node={node}/>
                      </Box>
                    )
                )}
              </ul>
            </div>
            <BlogSidebar categoriesMenu={categoriesMenu}/>
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
    allCategory
    {
      _id
      slug
      {
        current
      }
      language
    }
  }
  `,
  });

  const paths = data.allCategory.filter(page => page.slug.current).map(page => ({
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

/*

   ${LANGUAGE_FRAGMENT}
    ${LANGUAGETEXT_FRAGMENT}
  ${IMAGEPALETTESWATCH_FRAGMENT}
  ${IMAGEPALETTE_FRAGMENT}
  ${IMAGEMETADATA_FRAGMENT}
  ${IMAGEASSET_FRAGMENT}
  ${IMAGECROP_FRAGMENT}
  ${IMAGEHOTSPOT_FRAGMENT}
  ${OPENGRAPH_FRAGMENT}
  ${COLOR_FRAGMENT}
  ${MAINIMAGE_FRAGMENT}
  ${SIMPLEILLUSTRATION_FRAGMENT}
  ${LOCALEIMAGE_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${PADDING_FRAGMENT}
  ${STARTTABITEMS_FRAGMENT}
  ${HEROCOLORS_FRAGMENT}
  ${STARTHERO_FRAGMENT}
  ${PRICINGPLANITEMS_FRAGMENT}
  ${INFOTEXT_FRAGMENT}
  ${NAVIGATION_FRAGMENT}
  ${CONTENTELEMENTS_FRAGMENT}
 */

/*

    ${LANGUAGE_FRAGMENT}
    ${LANGUAGETEXT_FRAGMENT}
  ${IMAGEMETADATA_FRAGMENT}
  ${IMAGEPALETTE_FRAGMENT}
  ${IMAGEPALETTESWATCH_FRAGMENT}
  ${IMAGEASSET_FRAGMENT}
  ${IMAGECROP_FRAGMENT}
  ${IMAGEHOTSPOT_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${LOCALEIMAGE_FRAGMENT}
  ${NAVIGATION_FRAGMENT}
  ${OPENGRAPH_FRAGMENT}
 */

export async function getStaticProps({params, locale}) {
  const {data} = await client.query({
    query: gql`
  ${LANGUAGE_FRAGMENT}
    ${LANGUAGETEXT_FRAGMENT}
  ${IMAGEMETADATA_FRAGMENT}
  ${IMAGEPALETTE_FRAGMENT}
  ${IMAGEPALETTESWATCH_FRAGMENT}
  ${IMAGEASSET_FRAGMENT}
  ${IMAGECROP_FRAGMENT}
  ${IMAGEHOTSPOT_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${LOCALEIMAGE_FRAGMENT}
  ${NAVIGATION_FRAGMENT}
  query PageReseller($slug: String, $language: String) {
    allCategory(
  where: { slug: { current: { eq: $slug } }, language: { eq: $language } }
 ) {
  _id
  description
  language
  slug {
   current
  }
  title
 }
 allPost {
  _id
  language
  title
  categories {
   title
   _id
  }
  tags {
   title
  }
  author {
   name
  }
  publishedAt
  slug {current}
 }
      allNavigationMenu {...SanityNavigationMenu}
      allSiteSettings {...SanitySiteSettings}
  }
  `,
    variables: {
      slug: params.category,
      language: locale
    }
  });
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      category: data.allCategory[0],
      posts: data.allPost.filter(post => post.categories && post.categories.some(cat => cat._id === data.allCategory[0]._id)),
      allNavigationMenu: data.allNavigationMenu,
      allSiteSettings: data.allSiteSettings,
    },
  }
}
