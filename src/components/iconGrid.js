import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from './container'

import {Box, Flex, Heading, Grid} from 'theme-ui'

import serializer from '../helpers/serializers'

const IconGridItem = ({icon, heading, body, heroColors, color}) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        borderRadius: 6,
        justifyContent: 'center',
      }}
    >
      <Box sx={{width: 48, height: 48}}>
        <Box
          sx={{
            svg: {height: '100%', width: '100%', fill: color || 'faded'},
          }}
          dangerouslySetInnerHTML={{__html: icon?.icon}}
        />
      </Box>

      <Box sx={{mt: 3, color: heroColors?.theme?.text}}>
        {heading && (
          <Heading variant="h5" color={heroColors?.theme?.text} sx={{mb: 2}}>
            {heading}
          </Heading>
        )}

        {body && (
          <BlockContent blocks={body} serializers={serializer} hardBreak/>
        )}
      </Box>
    </Flex>
  )
}

export default function flex({
                               heroColors,
                               heading,
                               iconGridItems,
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
            color={heroColors?.theme?.text}
            sx={{mb: 5, textAlign: 'center'}}
          >
            {heading}
          </Heading>
        )}

        <Grid
          columns={[1, null, 2, null, 3]}
          sx={{
            gap: 4,
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {iconGridItems &&
            iconGridItems.map((iconGridItem, iconGridItemIndex) => {
              return (
                <IconGridItem
                  key={iconGridItem._id}
                  icon={iconGridItem.icon}
                  heading={iconGridItem.heading}
                  body={iconGridItem.blockContent}
                  index={iconGridItemIndex}
                  heroColors={heroColors}
                  color={iconGridItem?.headingColors?.theme?.color}
                />
              )
            })}
        </Grid>
      </Container>
    </Box>
  )
}
