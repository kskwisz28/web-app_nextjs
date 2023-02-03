import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from './container'
import LinkCheck from './linkCheck'

import { Box, Button, Flex, Heading, Image } from 'theme-ui'

import serializer from '../helpers/serializers'

const ImageCTA = ({
  image,
  heading,
  body,
  buttonUrl,
  buttonText,
  openNewTab,
}) => {
  return (
    <Flex
      backgroundColor={'background'}
      sx={{
        flex: 1,
        flexDirection: ['column-reverse', null, null, 'row'],
        borderRadius: 6,
        overflow: 'hidden',
        maxWidth: 552,
      }}
    >
      <Flex
        sx={{
          p: 4,
          flex: 0.7,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Box>
          {heading && (
            <Heading variant="h3" sx={{ mb: 3 }}>
              {heading}
            </Heading>
          )}

          {body && (
            <BlockContent
              sx={{ mb: 5 }}
              blocks={body}
              serializers={serializer}
              hardBreak
            />
          )}
        </Box>

        {buttonText && buttonUrl && (
          <LinkCheck to={buttonUrl} effect="fade" blank={openNewTab}>
            <Button variant="buttons.outlinePrimary">{buttonText}</Button>
          </LinkCheck>
        )}
      </Flex>

      {image && (
        <Image
          src={image?.image?.asset?.url}
          sx={{
            flex: 0.3,
            aspectRatio: '2',
            objectFit: 'cover',
          }}
        />
      )}
    </Flex>
  )
}

export default function flex({ heroColors, heading, imageCTAs, headingSize }) {
  return (
    <Box
      sx={{
        pt: 5,
        pb: [6, null, null, null, 6],
        backgroundColor: heroColors?.theme?.background,
      }}
    >
      <Container>
        {heading && (
          <Heading
            variant={headingSize ?? 'h1'}
            as={headingSize ?? 'h1'}
            color={heroColors?.theme?.text}
            sx={{ mb: 5, textAlign: 'center' }}
          >
            {heading}
          </Heading>
        )}

        <Flex
          sx={{
            gap: 4,
            flexDirection: ['column', null, null, null, 'row'],
            justifyContent: 'center',
            alignItems: ['center', null, null, null, 'initial'],
          }}
        >
          {imageCTAs &&
            imageCTAs.map(imageCTA => {
              return (
                <ImageCTA
                  heading={imageCTA.heading}
                  image={imageCTA.image}
                  body={imageCTA.blockContent}
                  buttonUrl={imageCTA.buttonUrl}
                  buttonText={imageCTA.buttonText}
                  openNewTab={imageCTA.openNewTab}
                />
              )
            })}
        </Flex>
      </Container>
    </Box>
  )
}
