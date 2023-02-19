import React from 'react'
import PropTypes from 'prop-types'

import {imageUrlFor} from '../../src/helpers/image-url'
import {buildImageObj} from '../../src/helpers/general'
import {useTranslation} from "next-i18next";
import Head from 'next/head'
import site from "@/config";

export default function SEO({
                              description,
                              meta,
                              ogTitle,
                              ogDescription,
                              ogImage,
                              ogUrl,
                              type,
                            }) {
  const {i18n} = useTranslation('common')

  const metaImage = ogImage?.asset?.url

  // const metaImage = ogImage?.asset ? imageUrlFor(buildImageObj(ogImage)).width(1200).url()
  //   : ''

  const contentType = type ? type : 'website'

  return (
    <Head>
      <title>{ogTitle} | {site.siteMetadata.title}</title>
    </Head>
  )

  /*
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

   */
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
