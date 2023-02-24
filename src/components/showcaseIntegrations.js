import React from 'react'
import {Box, Flex, Container} from 'theme-ui'
import OptimizedImage from "@/components/optimizedImage";

export default function ShowcaseIntegrations(props) {
  return (
    <Box
      bg={props.colorBg ? props.colorBg.hex : ''}
      sx={{
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Container>
        <Flex
          css={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {props.rows &&
            props.rows.map(story => (
              <Box
                key={story._key}
                p={3}
                css={{
                  width: '10rem',
                }}
              >
                <OptimizedImage
                  image={story.image.image}
                  style={{
                    maxHeight: '2rem',
                  }}
                />
              </Box>
            ))}
        </Flex>
      </Container>
    </Box>
  )
}
