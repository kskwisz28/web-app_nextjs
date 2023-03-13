import {client} from "@/sanity-client";
import {groq} from "next-sanity";
import {usePreview} from "@/lib/sanity.preview";
import ExitFromPreview from "@/components/ExitFromPreview";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import {Box, Grid} from "theme-ui";
import Container from "@/components/container";
import CardPost from "@/components/cardPost";
import Pagination from "@/components/pagination";
import BlogSidebar from "@/components/blogSidebar";
import {PreviewSuspense} from "next-sanity/preview";


export const POSTS_PER_PAGE = 10

export const query = groq`
    {
      "posts": *[_type == "post" && language == $language] | order(publishedAt desc)[$start...$end] {
        ...,
        author->,
        categories[]->,
        tags[]->,
      },
      "total": count(*[_type == "post" && language == $language]),
      "navigation": *[_type == "navigationMenu"],
      "settings": *[_type == "siteSettings"][0],
    }
  `

export async function getPropsForIndex(raw_index, locale, preview) {
  const index = raw_index ? Number(raw_index) - 1 : 0
  const queryParams = {
    start: POSTS_PER_PAGE * index,
    end: POSTS_PER_PAGE * (index + 1),
    language: locale
  }

  if (preview) {
    return {
      props: {
        preview,
        queryParams
      }
    }
  }
  const data = await client.fetch(query, queryParams)
  return {
    posts: data.posts,
    pagination: {
      total: data.total,
      current: index + 1
    },
    navigation: data.navigation,
    settings: data.settings,
  }
}

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
        current: index
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