import React from 'react'
import { Box, Heading, Text } from 'theme-ui'
import SingleImage from './singleImage'

export default function boxedAreaVariantOne(item) {
  return (
    <Box css={{ position: 'relative' }}>
      {item.image && (
        <SingleImage
          shadowWrapper
          wrapperPaddingX={4}
          wrapperPaddingY={4}
          rounded="16px"
          noLazyLoad
          image={item.image}
        />
      )}
      <Box
        css={{
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
          background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.9));',
          borderRadius: '1rem',
          transition: 'all .3s ease',
          ':hover': {
            background: 'linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.7));',
            transition: 'all .3s ease',
          },
        }}
      >
        <Box
          px={2}
          css={{
            textAlign: 'center',
            position: 'absolute',
            bottom: '2rem',
            width: '100%',
          }}
        >
          {item.title && (
            <Heading as="h2" variant="text.h2" pt={1} color="white">
              {item.title}
            </Heading>
          )}
          {item.description && (
            <Text css={{ fontSize: '0.8rem', color: '#fff' }}>
              {item.description}
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  )
}
