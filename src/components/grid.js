import React from 'react'
import {Grid, Box} from 'theme-ui'
import Container from '../components/container'

import BlockContent from '@sanity/block-content-to-react'
import serializer from '../helpers/serializers'

export default function grid(props) {
  return (
    <Box
      sx={{
        py: [5, null, null, null, 6],
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Container>
        <Grid
          gap={[
            props.gapMobile ? props.gapMobile : null,
            null,
            props.gapTablet ? props.gapTablet : null,
            null,
            props.gapDesktop ? props.gapDesktop : null,
            props.gapDesktopLarge ? props.gapDesktopLarge : null,
          ]}
          columns={[
            props.columnsMobile ? props.columnsMobile : null,
            null,
            props.columnsTablet ? props.columnsTablet : null,
            null,
            props.columnsDesktop ? props.columnsDesktop : null,
            props.columnsDesktopLarge ? props.columnsDesktopLarge : null,
          ]}
        >
          {props.container &&
            props.rows &&
            props.rows.map(info => (
              <Container key={info._id}>
                <Box
                  key={info._key}
                  sx={{
                    bg: info.colorBg ? info.colorBg.hex : '',
                    pt: info.padding && info.padding.top,
                    pb: info.padding && info.padding.bottom,
                    px: 3,
                    borderRadius: props.roundedCorners ? '8px' : '',
                  }}
                >
                  <BlockContent
                    key={info._key}
                    blocks={info}
                    serializers={serializer}
                    hardBreak
                  />
                </Box>
              </Container>
            ))}
          {!props.container &&
            props.rows &&
            props.rows.map(info => (
              <Box
                key={info._key}
                sx={{
                  bg: info.colorBg ? info.colorBg.hex : '',
                  pt: info.padding && info.padding.top,
                  pb: info.padding && info.padding.bottom,
                  px: 3,
                  borderRadius: props.roundedCorners ? '8px' : '',
                }}
              >
                <BlockContent
                  key={info._key}
                  blocks={info}
                  serializers={serializer}
                  hardBreak
                />
              </Box>
            ))}
        </Grid>
      </Container>
    </Box>
  )
}
