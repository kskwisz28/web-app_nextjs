import React from 'react'
import clientConfig from '../../client-config'
import { getGatsbyImageData } from 'gatsby-source-sanity'
import { GatsbyImage } from 'gatsby-plugin-image'

import { jsx, Image } from 'theme-ui'

const maybeImage = (
  image,
  imgMaxHeight,
  shadowImage,
  rounded,
  noLazyLoad,
  cover,
  heightFull,
  sx
) => {
  let img = null
  if (image && image.asset) {
    const gatsbyImageData = getGatsbyImageData(
      image.asset,
      {},
      clientConfig.sanity
    )
    !noLazyLoad &&
      (img = (
        <React.Fragment>
          {image && image.asset && image.asset.extension === 'svg' ? (
            <Image
              src={image?.asset?.url}
              alt={image.alt}
              className={shadowImage ? 'infoImg' : ''}
              sx={{
                objectFit: cover ? 'cover' : 'contain',
                width: '100%',
                borderRadius: rounded,
                height: heightFull ? '100%' : '',
                maxHeight: imgMaxHeight,
                ...sx
              }}
            />
          ) : (
            <GatsbyImage
              alt={image.alt}
              image={gatsbyImageData}
              className={shadowImage ? 'shadowImg' : ''}
              imgStyle={{
                objectFit: cover ? 'cover' : 'contain',
              }}
              sx={{
                maxHeight: imgMaxHeight,
                borderRadius: rounded,
                width: '100%',
                height: heightFull ? '100%' : '',
                ...sx
              }}
            />
          )}
        </React.Fragment>
      ))
    noLazyLoad &&
      (img = (
        <Image
          src={image?.asset?.url}
          alt={image.alt}
          className={shadowImage ? 'infoImg' : ''}
          sx={{
            objectFit: cover ? 'cover' : 'contain',
            width: '100%',
            borderRadius: rounded,
            height: heightFull ? '100%' : '',
            maxHeight: imgMaxHeight,
            // filter: 'grayscale(1)',
            // ':hover': { filter: 'none' },
          }}
        />
      ))
  }
  return img
}

export default function SingleImage(props) {
  const img = maybeImage(
    props.image,
    props.imgMaxHeight,
    props.shadowImage,
    props.rounded,
    props.noLazyLoad,
    props.cover,
    props.heightFull
  )
  return <div css={{ width: '100%' }}>{img}</div>
}
