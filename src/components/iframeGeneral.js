import React from 'react'

import { Box } from 'theme-ui'

export default function iframeGeneral(props) {
  return (
    <Box
      sx={{
        py: [5, null, null, null, 6],
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <iframe
        title="Google Maps Quickbutik"
        width="100%"
        height="400"
        frameborder="0"
        scrolling="no"
        class="mg1"
        src="https://maps.google.com/maps?q=Quickbutik+AB+Helsingborg+Sverige&amp;hl=sv&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=helsingborg&amp;hnear=Vasatorpsv%C3%A4gen+1++Helsingborg+Sverige&amp;t=m&amp;z=10&amp;output=embed"
      ></iframe>
    </Box>
  )
}
