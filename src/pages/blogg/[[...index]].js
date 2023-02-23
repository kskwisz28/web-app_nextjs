import {client} from "@/sanity-client";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from '@/components/layout'
import {Box, Grid} from 'theme-ui'
import Container from '@/components/container'
import CardPost from "@/components/cardPost";
import BlogSidebar from "@/components/blogSidebar";

import Pagination from '@/components/pagination'
import Seo from "@/components/seo";
import ExitFromPreview from "@/components/ExitFromPreview";
import {usePreview} from "@/lib/sanity.preview";
import {PreviewSuspense} from "next-sanity/preview";
import {groq} from "next-sanity";

const POSTS_PER_PAGE = 10

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
  const index = queryParams.start / POSTS_PER_PAGE

  return (
    <>
      <Page {...data} pagination={{
        total: data.total,
        current: index === 0 ? 1 : index
      }}/>
      <ExitFromPreview/>
    </>
  );
}

function Page({posts, pagination, navigation, settings}) {
  const categoriesMenu = navigation.filter(
    menus => menus.menuPlacement === 'blogCategories'
  )
  return (
    <Layout
      headerBg="rgba(255,255,255,.6)"
      logoDark
      headerColor="dark"
      navMenu={navigation}
      siteSettings={settings}
    >
      <Seo ogTitle="Blogg"/>
      <Box bg="light300">
        <Container sx={{py: 4}}>
          <Grid gap={4} columns={[1, null, null, '2fr 1fr']}>
            <div className="blog-posts">
              <ul>
                {posts.map(
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
              <Box px={4}>
                <Pagination
                  currentPage={pagination.current}
                  totalCount={pagination.total}
                />
              </Box>
            </div>
            <BlogSidebar categoriesMenu={categoriesMenu}/>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await client.fetch('*[_type == "post"]{language}')

  const locales = ['sv', 'no', 'da', 'en']
  let paths = []
  locales.forEach(locale => {
    const posts = data.filter(post => post.language === locale)
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

    paths = paths.concat(Array.from({length: totalPages}).map((_, index) => ({
      locale,
      params: {
        index: [index === 0 ? '' : (index + 1).toString()]
      }
    })))
  })
  return {
    paths,
    fallback: false,
  }
}

const query = groq`
    {
      "posts": *[_type == "post" && language == $language] | order(publishedAt desc)[$start...$end] {
        ...,
        author->,
        categories[]->,
      },
      "total": count(*[_type == "post" && language == $language]),
      "navigation": *[_type == "navigationMenu"],
      "settings": *[_type == "siteSettings"][0],
    }
  `

export async function getStaticProps({params, locale, preview = false}) {
  const index = Number(params.index ? params.index[0] - 1 : 0)
  const queryParams = {
    start: POSTS_PER_PAGE * index,
    end: POSTS_PER_PAGE * (index + 1),
    language: locale
  }

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
      posts: data.posts,
      pagination: {
        total: data.total,
        current: index === 0 ? 1 : index + 1
      },
      navigation: data.navigation,
      settings: data.settings,
    },
  }
}
