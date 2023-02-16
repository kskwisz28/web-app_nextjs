import styled from '@emotion/styled'
import {Button, Text, Heading, Flex, Box, Link} from 'theme-ui'

import Container from '@/components/container'

import BlockContent from '@sanity/block-content-to-react'
import serializer from '../helpers/serializers'

const Wrapper = styled.div`
  text-align: ${props => (props.centered ? 'center' : 'left')};
`

export default function InfoText(props) {
  const modifiedBg = props?.colorBg?.hex === "#2d3947" ? "#362f4a" : props?.colorBg?.hex

  return (
    <Box
      sx={{
        bg: modifiedBg ? modifiedBg : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
        borderRadius: props.borderRadius ? props.borderRadius : '0',
      }}
    >
      <Container noPadding>
        <Wrapper centered={props.centered}>
          {props.topLine && (
            <Text
              px={props.bgTop ? 2 : 0}
              variant="text.lead"
              color="raspberry"
              bg={props.bgTop ? props.bgTop.hex : ''}
              css={{
                display: 'inline-block',
                alignItems: 'center',
                borderRadius: '4px',
                fontWeight: '600',
              }}
            >
              <Flex variant="box.label" css={{alignItems: 'center'}}>
                {props.topIcon && (
                  <div sx={{pr: 1}}>{props.topIcon ? props.topIcon : ''}</div>
                )}
                {props.topLine}
              </Flex>
            </Text>
          )}
          {props.headline && (
            <Heading
              as={props.heading ? props.heading : 'h2'}
              pt={2}
              pb={3}
              my={0}
              variant={
                props.headingVariant
                  ? `text.${props.headingVariant}`
                  : 'text.introHeading'
              }
              color={props.colorHeadline ? props.colorHeadline.hex : 'text'}
            >
              {props.headlineAfterIcon && (
                <Flex
                  variant="box.label"
                  sx={{
                    alignItems: 'center',
                    justifyContent: props.centered ? 'center' : '',
                  }}
                >
                  {props.headline}
                  {props.headlineAfterIcon ? props.headlineAfterIcon : ''}
                </Flex>
              )}
              {!props.headlineAfterIcon && props.headline}
            </Heading>
          )}
          {props.description && (
            <Text
              variant={props.textVariant ? props.textVariant : 'default'}
              mx={props.centered ? 'auto' : ''}
              my={0}
              sx={{maxWidth: 'read', fontSize: '16px !important'}}
              color={props.colorDesc ? props.colorDesc.hex : 'text'}
            >
              {props.description}
            </Text>
          )}
          {props.advancedDescription && (
            <Text
              variant={props.textVariant ? props.textVariant : 'default'}
              mx={props.centered ? 'auto' : ''}
              my={0}
              sx={{maxWidth: 'read', fontSize: '16px !important'}}
              color={props.colorDesc ? props.colorDesc.hex : 'text'}
            >
              <BlockContent
                blocks={props.advancedDescription}
                serializers={serializer}
                hardBreak
              />
            </Text>
          )}
          <Flex css={{justifyContent: props.centered ? 'center' : 'start'}}>
            {props.buttonText && (
              <Box pt={4} pb={1}>
                <Link
                  href={props.buttonUrl}
                  target={props.buttonOpenNewTab && '_blank'}
                >
                  <Button
                    variant={
                      props.buttonType ? props.buttonType : 'buttons.primary'
                    }
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mx: 'auto',
                    }}
                  >
                    {props.buttonText}
                  </Button>
                </Link>
              </Box>
            )}
            {props.buttonSecondText && (
              <Box pt={4} pb={1} px={3}>
                <Link
                  href={props.buttonSecondUrl}
                  target={props.buttonSecondOpenNewTab && '_blank'}
                >
                  <Button
                    variant={
                      props.buttonSecondType
                        ? props.buttonSecondType
                        : 'buttons.primary'
                    }
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mx: 'auto',
                    }}
                  >
                    {props.buttonSecondText}
                  </Button>
                </Link>
              </Box>
            )}
          </Flex>
          {props.subtitle && (
            <Text
              color="dark300"
              py={3}
              sx={{
                textAlign: 'center',
                fontSize: '0.9rem !important',
                mx: 'auto',
                display: 'block',
              }}
            >
              {props.subtitle}
            </Text>
          )}
          {props.children}
        </Wrapper>
      </Container>
    </Box>
  )
}
