import React from 'react'

import NextImage from 'next/legacy/image'
import {Image} from 'theme-ui'
import imageUrlBuilder from "@sanity/image-url";

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
  // TODO: Make image work
  if (image && image.asset) {
    const builder = imageUrlBuilder({
      projectId: '7hja5omh',
      dataset: 'production',
    })
    const url = builder.image(image.asset).url()
    if (image.asset.extension === 'svg') {
      return (
        <NextImage
          src={url}
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
      )
    } else {
      return (
        <NextImage
          alt={image.alt}
          src={url}
          className={shadowImage ? 'shadowImg' : ''}
          imgStyle={{
            objectFit: cover ? 'cover' : 'contain',
          }}
          width={100}
          height={100}
          sx={{
            maxHeight: imgMaxHeight,
            borderRadius: rounded,
            width: '100%',
            height: heightFull ? '100%' : '',
            ...sx
          }}
        />
      )
    }
  } else {
    return (
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
    )
  }
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
  return <div css={{width: '100%'}}>{img}</div>
}
