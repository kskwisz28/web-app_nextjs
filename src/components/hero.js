import React from 'react'

import Container from '../components/container'

import {Text, Box, Button, Flex, Heading} from 'theme-ui'
import LinkWithArrow from './linkWithArrow'
import OptimizedImage from './optimizedImage'

import BlockContent from '@sanity/block-content-to-react'

export default function flex({
                               image,
                               reverse,
                               transparentImage,
                               imageFullWidth,
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
                               subtitle,
                               imageText,
                               button1Arrow,
                               button2Arrow,
                               center,
                               videoUrl,
                               videoAutoplay,
                               videoMuted,
                               videoLoop,
                               videoControls
                             }) {

  const hasImage = image && image.image

  function reverseFullWidthCheck(reverse, fullWidth) {
    if (reverse && fullWidth) {
      return 'column-reverse'
    }

    if (reverse && !fullWidth) {
      return 'row-reverse'
    }

    if (!reverse && fullWidth) {
      return 'column'
    }

    if (!reverse && !fullWidth) {
      return 'row'
    }
  }

  return (
    <Box
      sx={{
        py: transparentImage ? 0 : [5, null, null, null, 6],
        color: heroColors?.theme?.text,
        backgroundColor: heroColors?.theme?.value,
        position: 'relative',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          gap: [hasImage ? 4 : 0, null, null, null, hasImage ? 4 : 0],
          flexDirection: [
            reverse && !transparentImage ? 'column-reverse' : 'column',
            null,
            null,
            null,
            reverseFullWidthCheck(reverse, imageFullWidth)
          ],
          alignItems: 'center',
        }}
      >
        {videoUrl && (
          <Flex sx={{width: '100%', flex: 1, py: 4, px: 2}}>
            <video autoPlay={videoAutoplay} muted={videoMuted} loop={videoLoop} controls={videoControls} playsInline
                   css={{width: '100%', borderRadius: '12px'}}>
              <source src={videoUrl} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </Flex>
        )}
        {hasImage && (
          <Flex
            sx={{
              pt: image?.padding?.top,
              justifyContent: reverse ? 'flex-end' : 'flex-start',
              alignSelf: transparentImage ? [null, null, null, null, 'end'] : '',
              flex: 1,
              position: 'relative',
              height: '543px',
            }}
          >
            <OptimizedImage
              image={image?.image}
            />
            {imageText &&
              <Heading
                variant="h4"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  color: heroColors?.theme?.text,
                  mt: 4,
                  bg: 'kiwi',
                  py: 2,
                  px: 2,
                  fontWeight: '700'
                }}>
                {imageText}
              </Heading>
            }
          </Flex>
        )}

        <Flex
          sx={{
            flex: 1,
            py: transparentImage ? [5, null, null, null, 6] : 0,
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: ['center', null, null, null, center ? null : 'left'],
            alignItems: ['center', null, null, null, center ? null : 'flex-start'],
          }}
        >
          <Heading
            variant={headingSize ?? 'h2'}
            as={headingSize ?? 'h2'}
            sx={{pb: 2}}
          >
            {heading}
          </Heading>

          <BlockContent
            blocks={blockContent}
            hardBreak
          />

          {(button1Text || button2Text) && (
            <Flex sx={{alignItems: 'center', gap: 3, mt: 3}}>
              {button1Text && !button1Arrow && (
                <Button
                  as="a"
                  href={button1Url}
                  target={button1OpenNewTab && '_blank'}
                  variant="buttons.primary"
                  sx={{
                    background: heroColors?.theme?.buttonBackground,
                    borderColor: heroColors?.theme?.buttonBackground,
                    color: heroColors?.theme?.buttonText
                  }}
                >
                  {button1Text}
                </Button>
              )}

              {button1Text && button1Arrow && (
                <Flex>
                  <LinkWithArrow sx={{color: heroColors?.theme?.arrowColor}} justifyLeft noSpace url={button1Url}
                                 title={button1Text} alignStart/>
                </Flex>
              )}

              {button2Text && !button2Arrow && (
                <Button
                  as="a"
                  href={button2Url}
                  target={button2OpenNewTab && '_blank'}
                  variant="buttons.outlineSecond"
                  sx={{
                    background: heroColors?.theme?.button2Background,
                    color: heroColors?.theme?.button2Text,
                    borderColor: heroColors?.theme?.button2Text
                  }}
                >
                  {button2Text}
                </Button>
              )}

              {button2Text && button2Arrow && (
                <Flex>
                  <LinkWithArrow sx={{color: heroColors?.theme?.arrowColor}} justifyLeft noSpace url={button2Url}
                                 title={button2Text} alignStart/>
                </Flex>
              )}
            </Flex>
          )}

          {subtitle && (
            <Text
              variant="smaller"
              sx={{display: 'block', pb: 2, color: heroColors?.theme?.text, mt: 3}}
            >
              {subtitle}
            </Text>
          )}
        </Flex>
      </Container>
    </Box>
  )
}
