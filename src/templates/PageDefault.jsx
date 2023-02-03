import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { PathCheck } from '../helpers/pathCheck'
import PageBuilder from '../components/pageBuilder'

import serializer from '../helpers/serializers'
import Container from '../components/container'

const PageDefault = props => {
  const defaultMeta =
    props.data?.allSanitySiteSettings?.edges[0]?.node?.openGraphDefault
  const ogMeta = props.data.sanityPage?.openGraph
  const { content, _rawContent } = props.data.sanityPage

  return (
    <Layout
      headerBg={props?.data?.sanityPage?.menuBg?.hex ? props.data.sanityPage.menuBg.hex : 'aubergine'}
      headerColor="white"
      alternateLink={props.alternateLinks}
      navMenu={props.data.allSanityNavigationMenu}
      siteSettings={props.data.allSanitySiteSettings}
      currentLanguage={props?.pageContext?.language}
    >
      <Seo
        title={props.data.sanityPage.title ? props.data.sanityPage.title : ''}
        ogTitle={
          ogMeta && ogMeta.title ? ogMeta.title : props.data.sanityPage.title
        }
        ogUrl={
          `${props.data.site?.siteMetadata?.siteUrl}/${PathCheck(props.data.sanityPage?.language + '/' + props.data.sanityPage?._rawSlug?.current)}`
        }
        ogTest={
          `${PathCheck(props.data.sanityPage?.language + '/' + props.data.sanityPage?._rawSlug?.current)}`
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

      {props.data.sanityPage &&
        props.data.sanityPage.containerSize &&
        props.data.sanityPage.containerSize !== 'fullwidth' ? (
        <Container
          containersize={
            props.data.sanityPage && props.data.sanityPage.containerSize
          }
        >
          <div
            sx={{
              variant: 'styles',
            }}
          >
            {_rawContent &&
              <PageBuilder content={content} _rawContent={_rawContent} />
            }
            <BlockContent
              blocks={props?.data?.sanityPage?._rawBody}
              serializers={serializer}
              hardBreak
            />
          </div>
        </Container>
      ) : (
        <React.Fragment>
          {_rawContent &&
            <PageBuilder content={content} _rawContent={_rawContent} />
          }

          <BlockContent
            blocks={props?.data?.sanityPage?._rawBody}
            serializers={serializer}
            hardBreak
          />
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query PageDefault($page: String, $language: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    sanityPage(id: { eq: $page }) {
      containerSize
      title
      _rawSlug
      language
      _rawBody(resolveReferences: { maxDepth: 10 })
      menuBg {
        hex
      }
      ...Content
      openGraph {
        title
        description
        image {
          asset {
            _id
            gatsbyImage(width: 1200)
            url
          }
        }
      }
    }
    allSanityNavigationMenu {
      edges {
        node {
          menuName {
            translate(language: $language)
          }
          menuPlacement
          menuItems {
            _key
            translate(language: $language)
          }
        }
      }
    }
    allSanitySiteSettings {
      edges {
        node {
          headerButtonText {
            translate(language: $language)
          }
          headerButtonUrl {
            translate(language: $language)
          }
          headerSecondButtonText {
            translate(language: $language)
          }
          headerSecondButtonUrl {
            translate(language: $language)
          }
          footerLanguageTitle {
            translate(language: $language)
          }
          headerBreakpoint {
            translate(language: $language)
          }
          footerCopyright {
            translate(language: $language)
          }
          openGraphDefault {
            title {
              translate(language: $language)
            }
            description {
              translate(language: $language)
            }
            image {
              translate(language: $language)
            }
          }
        }
      }
    }
  }
`

export default PageDefault
