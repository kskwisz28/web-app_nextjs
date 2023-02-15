import {client} from "@/apollo-client";
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
    props.navigation &&
    props.navigation.filter(
      menus => menus.menuPlacement === 'blogCategories'
    )
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={props.navigation}
      siteSettings={props.settings}
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
                        key={node._id}
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
  const data = await client.fetch('*[_type == "category"]{slug, language}')

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

export async function getStaticProps({params, locale}) {
  const data = await client.fetch(`
    {
      "category": *[_type == "category" && slug.current == $slug && language == $language][0] {
        "posts": *[_type=='post' && references(^._id)]
      },
      "navigation": *[_type == "navigationMenu"],
      "settings": *[_type == "siteSettings"][0],
     }
  `, {
    slug: params.category,
    language: locale
  })
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      posts: data.category.posts,
      navigation: data.navigation,
      settings: data.settings,
    },
  }
}
