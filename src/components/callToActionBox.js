import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from './container'

import { Box, Button, Flex, Heading } from 'theme-ui'

import serializer from '../helpers/serializers'

const StatsGridItem = ({ heading, body, color }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        borderRadius: 6,
        flex: '0 1 240px',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ mt: 3, textAlign: 'center', color: 'faded' }}>
        {heading && (
          <Heading variant="h2" sx={{ mb: 2, color: color || 'faded' }}>
            {heading}
          </Heading>
        )}

        {body && (
          <BlockContent blocks={body} serializers={serializer} hardBreak />
        )}
      </Box>
    </Flex>
  )
}

export default function flex({
  heroColors,
  heading,
  headingSize,
  blockContentRaw,
  button1Text,
  button1Url,
  button1OpenNewTab,
  button2Text,
  button2Url,
  button2OpenNewTab,
}) {
  return (
    <Box
      sx={{
        py: 5,
        bg: heroColors?.theme?.background,
      }}
    >
      <Container
        sx={{
          px: [null, null, null, 5],
          py: [4, null, null, 5],
          borderRadius: [null, null, null, null, 6],
        }}
      >
        <Flex
          sx={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: ['center', null, null, null, 'left'],
            alignItems: 'center',
            color: heroColors?.theme?.text,
          }}
        >
          <Heading
            variant={headingSize ?? 'h1'}
            as={headingSize ?? 'h1'}
            sx={{ pb: 2 }}
            color={heroColors?.theme?.text}
          >
            {heading}
          </Heading>

          <BlockContent
            blocks={blockContentRaw}
            serializers={serializer}
            hardBreak
          />

          <Flex sx={{ gap: 3, mt: 3 }}>
            {button1Text && (
              <Button
                as="a"
                href={button1Url}
                target={button1OpenNewTab && '_blank'}
                variant="buttons.primary"
                sx={{
                  background: heroColors?.theme?.buttonBackground,
                  borderColor: heroColors?.theme?.borderColor ? heroColors?.theme?.borderColor : heroColors?.theme?.buttonBackground,
                  color: heroColors?.theme?.buttonText
                }}
              >
                {button1Text}
              </Button>
            )}

            {button1Text && button2Text && (
              <Button
                as="a"
                href={button2Url}
                target={button2OpenNewTab && '_blank'}
                variant="buttons.outlineWhite"
                sx={{
                  background: heroColors?.theme?.button2Background,
                  color: heroColors?.theme?.button2Text,
                  borderColor: heroColors?.theme?.button2Text
                }}
              >
                {button2Text}
              </Button>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box >
  )
}
