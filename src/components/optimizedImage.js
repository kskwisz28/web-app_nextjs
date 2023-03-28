import React, {useMemo} from 'react'
import {client} from "@/sanity-client";

import Image from 'next/image'
import {useNextSanityImage} from "next-sanity-image";

export default function OptimizedImage({
                                         image,
                                         sizes,
                                         maxWidth,
                                         maxHeight,
                                         style,
                                         alt,
                                         fill = false,
                                         baseOnHeight = false,
                                         priority,
                                       }) {

  const imageProps = useNextSanityImage(client, image);
  const styles = useMemo(() => {
    let s = {
      width: '100%',
      height: 'auto'
    }

    if (baseOnHeight) {
      s.width = 'auto'
      s.height = '100%'
    }
    if (imageProps.width) {
      s.maxWidth = imageProps.width
    }
    if (maxWidth) {
      s.maxWidth = maxWidth
    }
    if (imageProps.height) {
      s.maxHeight = imageProps.height
    }
    if (maxHeight) {
      s.maxHeight = maxHeight
    }

    return {
      ...s,
      ...style
    }
  }, [baseOnHeight, imageProps.width, imageProps.height, maxWidth, maxHeight, style])

  const props = useMemo(() => {
    if (!fill) {
      return imageProps
    }
    return {
      loader: imageProps.loader,
      src: imageProps.src,
    }
  }, [imageProps, fill])
  return <Image
    {...props}
    style={fill ? style : styles}
    alt={alt}
    fill={fill}
    priority={priority}
  />
}
