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
  return <Image
    {...imageProps}
    style={styles}
    alt={alt}
  />
}
