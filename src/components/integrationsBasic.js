import React from 'react'
import Container from '../components/container'
import {Grid, Box, Button, Flex, Heading} from 'theme-ui'

import BlockContent from '@sanity/block-content-to-react'
import OptimizedImage from './optimizedImage'

export default function IntegrationsBasic(props) {
  return (
    <Box
      sx={{
        py: [5, null, null, null, 6],
        position: 'relative',
        color: props?.heroColors?.theme?.text,
        backgroundColor: props?.heroColors?.theme?.background,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          gap: 4,
          justifyContent: 'between',
          flexDirection: props.reverse ? ['column-reverse', null, null, null, 'row-reverse'] : ['column', null, null, null, 'row'],
          alignItems: 'center',
          flex: '1',
        }}
      >
        <Box sx={{flexBasis: '100%', textAlign: ['center', null, null, null, 'left'],}}>
          <Heading
            variant={'h1'}
            as={'h2'}
            sx={{pb: 2}}
          >
            {props.title}
          </Heading>

          <Box>
            <BlockContent
              blocks={props.blockContent}
              hardBreak
            />
          </Box>

          {(props.button1Text || props.button2Text) && (
            <Flex sx={{justifyContent: ['center', null, null, null, 'left'], gap: 3, mt: 3}}>
              {props.button1Text && (
                <Button
                  as="a"
                  href={props.button1Url}
                  variant="buttons.primary"
                  sx={{
                    background: props?.heroColors?.theme?.buttonBackground,
                    borderColor: props?.heroColors?.theme?.buttonBackground,
                    color: props?.heroColors?.theme?.buttonText
                  }}
                >
                  {props.button1Text}
                </Button>
              )}

              {props.button2Text && (
                <Button
                  as="a"
                  href={props.button2Url}
                  variant="buttons.outlineSecond"
                  sx={{
                    background: props?.heroColors?.theme?.button2Background,
                    color: props?.heroColors?.theme?.button2Text,
                    borderColor: props?.heroColors?.theme?.button2Text
                  }}
                >
                  {props.button2Text}
                </Button>
              )}
            </Flex>
          )}
        </Box>
        {props.integrationPicker && (
          <Grid columns={2} gap={4} sx={{alignItems: 'center', flexBasis: '100%', justifyItems: 'center'}}>
            {props.integrationPicker?.map(item => (
              <Flex
                key={item._id}
                sx={{
                  justifyContent: 'center',
                  width: '100%'
                }}
              >
                <OptimizedImage
                  image={item.logo}
                  maxHeight="30px"
                  baseOnHeight
                />
              </Flex>
            ))}
          </Grid>
        )}
      </Container>

    </Box>
  )
}
