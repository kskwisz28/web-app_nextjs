import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from '../components/container'

import { Box, Button, Flex, Heading, Image } from 'theme-ui'

import serializer from '../helpers/serializers'

export default function textWithImage({
  image,
  reverse,
  transparentImage,
  heroColors,
  heading,
  blockContent,
  button1Text,
  button1Url,
  button2Text,
  button2Url,
  button1OpenNewTab,
  button2OpenNewTab,
  headingSize,
}) {
  const hasImage = image && image?.image?.asset?.url

  return (
    <Box
      sx={{
        py: [5, null, null, null, 6],
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
            flex: 1,
          }}
        >
          {hasImage && (
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

                position: [
                  null,
                  null,
                  null,
                  null,
                  transparentImage ? 'absolute' : null,
                ],
                bottom: [null, null, null, null, transparentImage ? '0' : null],
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
                aspectRatio: [
                  transparentImage ? '1' : '1.78',
                  null,
                  null,
                  null,
                  transparentImage ? 'unset' : '1.78',
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
          )}
        </Flex>

        <Flex
          sx={{
            flex: 1,
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

          <Flex sx={{ gap: 3, mt: 3 }}>
            {button1Text && (
              <Button
                as="a"
                href={button1Url}
                target={button1OpenNewTab ? '_blank' : undefined}
                variant="buttons.primary"
              >
                {button1Text}
              </Button>
            )}

            {button1Text && button2Text && (
              <Button
                as="a"
                href={button2Url}
                target={button2OpenNewTab ? '_blank' : undefined}
                variant="buttons.outlinePrimary"
              >
                {button2Text}
              </Button>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
