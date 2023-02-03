import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { useTranslation } from 'react-i18next'

import { imageUrlFor } from '../../src/helpers/image-url'
import { buildImageObj } from '../../src/helpers/general'

export default function SEO({
  description,
  meta,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  type,
}) {
  const { i18n } = useTranslation('common')

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaImage = ogImage?.asset?.url

  // const metaImage = ogImage?.asset ? imageUrlFor(buildImageObj(ogImage)).width(1200).url()
  //   : ''

  const contentType = type ? type : 'website'

  return (
    <Helmet
      lang={i18n.language}
      htmlAttributes={{
        lang: i18n.language,
      }}
      title={ogTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `title`,
          content: ogTitle,
        },
        {
          name: `description`,
          content: ogDescription,
        },
        {
          name: `ahrefs-site-verification`,
          content: `caf6899cb60e5238d8a1e24c4abb4ead29febd63225cc92fed28c9a1d7bcecb1`,
        },
        {
          property: `og:title`,
          content: ogTitle,
        },
        {
          property: `og:description`,
          content: ogDescription,
        },
        {
          property: `og:site_name`,
          content: `Quickbutik`,
        },
        {
          property: `og:type`,
          content: contentType,
        },
        {
          property: `og:url`,
          content: ogUrl,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:image:url`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `@Quickbutik`,
        },
        {
          name: `twitter:creator`,
          content: '@Quickbutik',
        },
        {
          name: `twitter:title`,
          content: ogTitle,
        },
        {
          name: `twitter:description`,
          content: ogDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
