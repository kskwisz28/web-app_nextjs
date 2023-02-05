import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from '../components/container'

import { Box, Flex } from 'theme-ui'

import serializer from '../helpers/serializers'

export default function flex({
  colorBg,
  container,
  desktopAlignments,
  gapDesktop,
  gapMobile,
  mobileAlignments,
  padding,
  paddingSides,
  rows,
}) {
  const responsiveRow = (
    <Flex
      sx={{
        gap: [gapMobile || '24px', null, null, null, gapDesktop || '24px'],
        flexDirection: ['column', null, null, null, 'row'],
        px: paddingSides || 0,
        justifyContent: [
          mobileAlignments?.justifyContent || 'flex-start',
          null,
          null,
          null,
          desktopAlignments?.justifyContent || 'flex-start',
        ],
        alignItems: [
          mobileAlignments?.alignItems || 'flex-start',
          null,
          null,
          null,
          desktopAlignments?.alignItems || 'flex-start',
        ],
        textAlign: [
          mobileAlignments?.textAlign || 'flex-start',
          null,
          null,
          null,
          desktopAlignments?.textAlign || 'left',
        ],
      }}
    >
      {rows &&
        rows.map(info => (
          <BlockContent
            key={info._key}
            blocks={info}
            serializers={serializer}
            hardBreak
          />
        ))}
    </Flex>
  )

  return (
    <Box
      sx={{
        bg: colorBg?.hex || '',
        pt: padding?.top,
        pb: padding?.bottom,
      }}
    >
      {container ? <Container>{responsiveRow}</Container> : responsiveRow}
    </Box>
  )
}
