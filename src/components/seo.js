import React from 'react'
import PropTypes from 'prop-types'

import {imageUrlFor} from '@/helpers/image-url'
import {buildImageObj} from '@/helpers/general'
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

  const metaImage = ogImage ? ((ogImage.asset && ogImage.asset.url) || imageUrlFor(ogImage).width(1200).url()) : null

  const contentType = type ? type : 'website'

  return (
    <Head>
      {ogTitle && (
        <>
          <title>{`${ogTitle} | ${site.siteMetadata.title}`}</title>
          <meta name="title" content={ogTitle}/>
          <meta property="og:title" content={ogTitle}/>
          <meta property="twitter:title" content={ogTitle}/>
        </>
      )}

      {!ogTitle && <title>{site.siteMetadata.title}</title>}

      {description && <meta name="description" content={description}/>}

      {ogDescription && (
        <>
          <meta name="description" content={ogDescription}/>
          <meta property="og:description" content={ogDescription}/>
          <meta property="twitter:description" content={ogDescription}/>
        </>
      )}

      {ogUrl && <meta property="og:url" content={ogUrl}/>}

      <meta name="ahrefs-site-verification" content="caf6899cb60e5238d8a1e24c4abb4ead29febd63225cc92fed28c9a1d7bcecb1"/>
      <meta property="og:site_name" content="Quickbutik"/>
      <meta property="og:type" content={contentType}/>

      {metaImage && (
        <>
          <meta property="og:image" content={metaImage}/>
          <meta property="og:image:url" content={metaImage}/>
        </>
      )}

      <meta property="twitter:card" content="summary"/>
      <meta property="twitter:site" content="@Quickbutik"/>
      <meta property="twitter:creator" content="@Quickbutik"/>
    </Head>
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  ogTitle: PropTypes.string.isRequired,
}
