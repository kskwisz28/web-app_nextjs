import React from 'react'
import { Box, Heading, Text } from 'theme-ui'
import SingleImage from './singleImage'

export default function boxedAreaVariantOne(item) {
  return (
    <Box>
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
      <Box px={2} css={{ textAlign: 'center' }}>
        {item.title && (
          <Heading as="h3" pt={1} color="primary">
            {item.title}
          </Heading>
        )}
        {item.description && (
          <Text css={{ fontSize: '0.8rem' }}>{item.description}</Text>
        )}
      </Box>
    </Box>
  )
}
