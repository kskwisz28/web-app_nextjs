import React from 'react'

import Image from 'next/legacy/image'
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
  // TODO: Make images work
  if (image && image.asset) {
    let url = ''
    if (!image.asset.url) {
      const builder = imageUrlBuilder({
        projectId: '7hja5omh',
        dataset: 'production',
      })
      url = builder.image(image.asset).url()
    } else {
      url = image.asset.url
    }
    !noLazyLoad &&
    (img = (
      <React.Fragment>
        {image && image.asset && image.asset.extension === 'svg' ? (
          <Image
            src={url}
            alt={image.alt}
            className={shadowImage ? 'infoImg' : ''}
            layout="fill"
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
          <div style={{position: 'relative', width: '100%', height: '300px'}}>
            <Image
              alt={image.alt}
              src={url}
              className={shadowImage ? 'shadowImg' : ''}
              imgStyle={{
                objectFit: cover ? 'cover' : 'contain',
              }}
              layout="fill"
              sx={{
                maxHeight: imgMaxHeight,
                borderRadius: rounded,
                width: '100%',
                height: heightFull ? '100%' : '',
                ...sx
              }}
            />
          </div>
        )}
      </React.Fragment>
    ))
    noLazyLoad &&
    (img = (
      <Image
        src={image?.asset?.url}
        alt={image.alt}
        className={shadowImage ? 'infoImg' : ''}
        layout="fill"
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

export default function OptimizedImage(props) {
  const img = maybeImage(
    props.image,
    props.imgMaxHeight,
    props.shadowImage,
    props.rounded,
    props.noLazyLoad,
    props.cover,
    props.heightFull
  )
  return <React.Fragment>{img}</React.Fragment>
}
