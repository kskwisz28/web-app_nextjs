import React from 'react'
import { Flex, Box } from 'theme-ui'
import Container from '../components/container'

import BlockContent from '@sanity/block-content-to-react'
import serializer from '../helpers/serializers'

export default function flex(props) {
  return (
    <Box
      sx={{
        py: [5, null, null, null, 6],
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      {props.container && (
        <Container>
          <Flex
            css={{
              flexWrap: props.flexWrap ? props.flexWrap : 'wrap',
              justifyContent: props.justifyContent ? props.justifyContent : '',
              alignItems: props.alignItems ? props.alignItems : '',
            }}
          >
            {props.rows &&
              props.rows.map(info => (
                <Box
                  key={info._key}
                  sx={{
                    minWidth: '50%',
                    bg: info.colorBg ? info.colorBg.hex : '',
                    border: info.border ? info.border : '',
                    pt: info.padding && info.padding.top,
                    pb: info.padding && info.padding.bottom,
                    px: props.paddingSides ? props.paddingSides : 4,
                    borderRadius: props.borderRadius ? props.borderRadius : '',
                    width: [
                      info.wPhoneSmall ? info.wPhoneSmall : null,
                      null,
                      info.wPhablet ? info.wPhablet : null,
                      info.wTablet ? info.wTablet : null,
                      info.wDesktop ? info.wDesktop : null,
                      info.wDesktopMedium ? info.wDesktopMedium : null,
                      info.wDesktopLarge ? info.wDesktopLarge : null,
                    ],
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
          </Flex>
        </Container>
      )}
      {!props.container && (
        <Flex
          css={{
            flexWrap: props.flexWrap ? props.flexWrap : 'wrap',
            justifyContent: props.justifyContent ? props.justifyContent : '',
            alignItems: props.alignItems ? props.alignItems : '',
          }}
        >
          {props.rows &&
            props.rows.map(info => (
              <Box
                key={info._key}
                sx={{
                  minWidth: '50%',
                  bg: info.colorBg ? info.colorBg.hex : '',
                  border: info.border ? info.border : '',
                  pt: info.padding && info.padding.top,
                  pb: info.padding && info.padding.bottom,
                  px: props.paddingSides ? props.paddingSides : 4,
                  borderRadius: props.borderRadius ? props.borderRadius : '',
                  width: [
                    info.wPhoneSmall ? info.wPhoneSmall : null,
                    null,
                    info.wPhablet ? info.wPhablet : null,
                    info.wTablet ? info.wTablet : null,
                    info.wDesktop ? info.wDesktop : null,
                    info.wDesktopMedium ? info.wDesktopMedium : null,
                    info.wDesktopLarge ? info.wDesktopLarge : null,
                  ],
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
        </Flex>
      )}
    </Box>
  )
}
