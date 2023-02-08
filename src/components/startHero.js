import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from '../components/container'

import { Box, Button, Flex, Heading, Image, Text } from 'theme-ui'
import LinkWithArrow from './linkWithArrow'

import serializer from '../helpers/serializers'

export default function textWithImage({
  image,
  reverse,
  transparentImage,
  heroColors,
  heading,
  blockContentRaw,
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
        py: [5, null, null, null, 6],
        pt: customPaddingTop? customPaddingTop : '',
        pb: customPaddingBottom ? customPaddingBottom : '',
        color: heroColors?.theme?.text,
        backgroundColor: heroColors?.theme?.background,
        position: 'relative'
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
            blocks={blockContentRaw}
            serializers={serializer}
            hardBreak
          />

          {button1Text && !arrowAsButton && (
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

          {button1Text && arrowAsButton && (
            <div>
              <LinkWithArrow justifyLeft noSpace url={button1Url} title={button1Text} alignStart />
            </div>
          )}

          <Text
            variant="smaller"
            sx={{ pb: 2, color: heroColors?.theme?.text, mt: 3 }}
          >
            {subtitle}
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}
