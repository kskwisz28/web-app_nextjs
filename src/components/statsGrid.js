import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from './container'

import { Box, Flex, Heading } from 'theme-ui'

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
  statsGridItems,
  headingSize,
}) {
  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: heroColors?.theme?.background,
      }}
    >
      <Container
        backgroundColor="background"
        sx={{
          px: [null, null, null, 5],
          py: [4, null, null, 5],
          borderRadius: [null, null, null, null, 6],
        }}
      >
        {heading && (
          <Heading
            variant={headingSize ?? 'h1'}
            as={headingSize ?? 'h1'}
            color="faded"
            sx={{ mb: 5, textAlign: 'center' }}
          >
            {heading}
          </Heading>
        )}

        <Flex
          sx={{
            gap: 4,
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {statsGridItems &&
            statsGridItems.map((statsGridItem, statsGridItemIndex) => {
              return (
                <StatsGridItem
                  heading={statsGridItem.heading}
                  body={statsGridItem.blockContent}
                  index={statsGridItemIndex}
                  color={statsGridItem?.headingColors?.theme?.color}
                />
              )
            })}
        </Flex>
      </Container>
    </Box>
  )
}
