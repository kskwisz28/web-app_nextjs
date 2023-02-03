import SingleImage from './singleImage'
import React from 'react'
import { Box } from 'theme-ui'
import styled from '@emotion/styled'

const GridItem = styled(Box)`
  transform-style: preserve-3d;
  border-radius: 16px;
  transition: 0.1s ease-in-out transform, 0.4s ease-in-out box-shadow;

  &:hover {
    transform: translate3d(0px, -2px, 0px);
    box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
      4px 32px 28px -10px rgba(34, 33, 81, 0.15);
  }
`

export default function ImageItem({ story }) {
  return (
    <div>
      <GridItem
        p={3}
        sx={{
          borderRadius: '8px',
          boxShadow:
            '0px 0px 2px 0px rgba(0, 0, 0, 0.06), 0px 8px 24px 0px rgba(0, 0, 0, 0.03)',
        }}
      >
        <SingleImage
          wrapperPaddingX={2}
          wrapperPaddingY={2}
          shadowWrapper
          image={story.image && story.image.image && story.image.image}
        />
      </GridItem>
    </div>
  )
}
