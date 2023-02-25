import React, {useMemo} from 'react'
import {client} from "@/sanity-client";

import Image from 'next/image'
import {useNextSanityImage} from "next-sanity-image";

export default function OptimizedImage({
                                         image,
                                         sizes,
                                         width,
                                         height,
                                         style,
                                         alt,
                                         fill = false,
                                       }) {

  const imageProps = useNextSanityImage(client, image);
  const styles = useMemo(() => {
    let s = {}
    if (width) {
      s = {
        width: width,
        height: 'auto',
      }
    } else if (height) {
      s = {
        width: 'auto',
        height: height,
      }
    } else {
      s = {
        width: '100%',
        height: 'auto',
      }
    }

    if (imageProps.width) {
      s.maxWidth = imageProps.width
    }
    if (imageProps.height) {
      s.maxHeight = imageProps.height
    }

    return {
      ...s,
      ...style
    }
  }, [width, height])

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
  />
}
