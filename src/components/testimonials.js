import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from '../components/container'

import serializer from '../helpers/serializers'

import { Box, Flex, Grid, Heading } from 'theme-ui'

const Testimonial = ({ body, name, company }) => {
  return (
    <Flex
      backgroundColor={'background'}
      sx={{
        flexDirection: 'column',
        borderRadius: 6,
        justifyContent: 'space-between',
        p: 4,
      }}
    >
      {body && (
        <BlockContent blocks={body} serializers={serializer} hardBreak />
      )}

      <Box sx={{ mt: 5 }}>
        {name && (
          <Heading sx={{ mb: company ? 1 : 0 }} variant="h6">
            {name}
          </Heading>
        )}

        {company && (
          <Heading variant="h6" color="primary">
            {company}
          </Heading>
        )}
      </Box>
    </Flex>
  )
}

export default function flex({
  heroColors,
  heading,
  testimonials,
  headingSize,
}) {
  const content =
    testimonials &&
    testimonials.map(testimonial => {
      return (
        <Testimonial
          name={testimonial.name}
          company={testimonial.company}
          body={testimonial.blockContent}
        />
      )
    })

  const gap = 4

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

        {testimonials && testimonials.length <= 2 ? (
          <Flex
            sx={{
              gap: gap,
              justifyContent: 'center',
              alignItems: ['center', null, null, 'initial'],
              flexDirection: ['column', null, null, 'row'],
              '& > div': {
                maxWidth: [null, null, null, 357],
              },
            }}
          >
            {content}
          </Flex>
        ) : (
          <Grid gap={gap} columns={[1, null, null, 2, 3]}>
            {content}
          </Grid>
        )}
      </Container>
    </Box>
  )
}
