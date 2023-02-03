import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from '../components/container'

import { Box, Button, Flex, Heading, Image } from 'theme-ui'
import LinkWithArrow from './linkWithArrow'

import serializer from '../helpers/serializers'

export default function Spotlight({
  image,
  reverse,
  transparentImage,
  heroColors,
  heading,
  blockContent,
  button1Text,
  button1Url,
  button1OpenNewTab,
  headingSize,
  subtitle,
  arrowAsButton,
  customPaddingTop,
  customPaddingBottom
}) {
  const hasImage = image && image?.image?.asset?.url

  return (
    <Box
      sx={{
        py: transparentImage ? 0 : [5, null, null, null, 6],
        pt: customPaddingTop? customPaddingTop : '',
        pb: customPaddingBottom ? customPaddingBottom : '',
        color: heroColors?.theme?.text,
        backgroundColor: heroColors?.theme?.background,
        position: 'relative',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          gap: [hasImage ? 4 : 0, null, null, null, hasImage ? 5 : 0],
          flexDirection: [
            reverse && !transparentImage ? 'column-reverse' : 'column',
            null,
            null,
            null,
            !hasImage || reverse ? 'row-reverse' : 'row',
          ],
          alignItems: ['center', null],
        }}
      >
        <Flex
          sx={{
            pt: image?.padding?.top,
            justifyContent: reverse ? 'flex-end' : 'flex-start',
            alignSelf: transparentImage ? [null, null, null, null, 'end'] : '',
            flex: 1,
          }}
        >
          {hasImage && (
            <Flex sx={{ position: 'relative' }}>
            <Image
              src={image?.image?.asset?.url}
              sx={{
                boxShadow: !transparentImage
                  ? [
                      null,
                      null,
                      null,
                      null,
                      `16px 16px 0px 0px ${heroColors?.theme?.shadow}`,
                    ]
                  : null,
                width: [
                  '100%',
                  null,
                  null,
                  null,
                  transparentImage ? '100%' : null,
                ],
                maxWidth: [
                  transparentImage ? 350 : null,
                  null,
                  null,
                  null,
                  transparentImage ? 500 : null,
                ],
                maxHeight: [
                  null,
                  null,
                  null,
                  null,
                  transparentImage ? 500 : null,
                ],

                background: [
                  transparentImage ? '#fff' : null,
                  null,
                  null,
                  null,
                  'unset',
                ],
                objectFit: [
                  transparentImage ? 'cover' : null,
                  null,
                  null,
                  null,
                  'unset',
                ],
              }}
            />
                {subtitle && 
                  <Heading
                  variant="h4"
                  sx={{ position: 'absolute', top: 0, left: 0, color: heroColors?.theme?.text, mt: 4, bg: 'kiwi', py: 2, px: 2, fontWeight: '700' }}>
                  {subtitle}
                  </Heading>
                }
            </Flex>
          )}
        </Flex>

        <Flex
          sx={{
            flex: 1,
            py: transparentImage ? [5, null, null, null, 6] : 0,
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: ['center', null, null, null, 'left'],
            alignItems: ['center', null, null, null, 'flex-start'],
          }}
        >
          <Heading
            variant={headingSize ?? 'h2'}
            as={headingSize ?? 'h2'}
            sx={{ pb: 2 }}
          >
            {heading}
          </Heading>

          <BlockContent
            blocks={blockContent}
            serializers={serializer}
            hardBreak
          />

          {button1Text && (
            <Button
              as="a"
              mt={3}
              href={button1Url}
              target={button1OpenNewTab && '_blank'}
              variant="buttons.primary"
              sx={{ 
                background: heroColors?.theme?.buttonBackground,
                color: heroColors?.theme?.buttonText
              }}
            >
              {button1Text}
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  )
}
