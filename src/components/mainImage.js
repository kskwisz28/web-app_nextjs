import React from 'react'
import { buildImageObj } from '../helpers/general'
import { imageUrlFor } from '../helpers/image-url'

import { jsx } from 'theme-ui'

export default function MainImage({
  mainImage,
  altText,
  width = 1200,
  rounded,
  roundedUp,
  maxWidth,
  absoluteWidth,
  absoluteHeight,
  centered,
  bottomIn,
  shadowed,
  hoverEffect,
}) {
  const imgUrl =
    mainImage &&
    imageUrlFor(buildImageObj(mainImage))
      .width(width)
      .fit('crop')
      .auto('format')
      .url()

  return imgUrl ? (
    <img
      sx={{
        display: 'block',
        mx: centered ? 'auto' : '',
        width: absoluteWidth ? absoluteWidth : '',
        height: absoluteHeight ? absoluteHeight : '',
        borderRadius: rounded ? '8px' : '',
        borderTopRightRadius: roundedUp ? '8px' : '',
        borderTopLeftRadius: roundedUp ? '8px' : '',
        maxWidth: maxWidth ? maxWidth : '100%',
        marginBottom: bottomIn ? '-6rem' : '',
        boxShadow: shadowed ? 'shadowImage' : '',
        ':hover': {
          opacity: hoverEffect ? '0.8' : '',
        },
      }}
      src={imgUrl}
      alt={mainImage.alt || altText}
    />
  ) : (
    <></>
  )
}
