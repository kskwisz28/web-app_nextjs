import React from 'react'

import Image from 'next/image'
import imageUrlBuilder from "@sanity/image-url";

export default function OptimizedImage({
                                         image,
                                         imgMaxHeight,
                                         shadowImage,
                                         rounded,
                                         noLazyLoad,
                                         cover,
                                         heightFull,
                                         sx,
                                         style,
                                         className,
                                         imageSx,
                                       }) {
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
          <Image
            alt={image.alt}
            src={url}
            className={shadowImage ? 'shadowImg' : ''}
            fill
            style={{
              objectFit: cover ? 'cover' : 'contain',
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
