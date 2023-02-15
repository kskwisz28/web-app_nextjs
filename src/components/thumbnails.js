import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from '../components/container'

import {Flex, Box, Heading, Image, Grid, Link} from 'theme-ui'

import serializer from '../helpers/serializers'

const Thumbnail = ({heading, image, body, hoverShadow, url, openNewTab}) => {
  return (
    <Flex
      backgroundColor={'background'}
      sx={{
        flexDirection: 'column',
        borderRadius: 6,
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          boxShadow: url ? hoverShadow : 'none',
          transition: 'box-shadow .2s ease-in-out',
        },
      }}
    >
      {url && (
        <Link
          href={url}
          target={openNewTab && '_blank'}
          sx={{'::before': {content: '""', position: 'absolute', inset: 0}}}
        />
      )}

      {image && (
        <Image
          src={image?.image?.asset?.url}
          sx={{
            aspectRatio: '1.7778',
            objectFit: 'cover',
          }}
        />
      )}

      <Box sx={{px: 3, mt: 3}}>
        {heading && (
          <Heading variant="h5" sx={{mb: 2}}>
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

export default function flex({heroColors, heading, thumbnails, headingSize}) {
  return (
    <Box
      sx={{
        pt: heading ? 5 : 6,
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
            sx={{mb: 5, textAlign: 'center'}}
          >
            {heading}
          </Heading>
        )}

        <Grid gap={4} columns={[1, null, null, 2, 3]}>
          {thumbnails &&
            thumbnails.map(thumbnail => {
              return (
                <Thumbnail
                  key={thumbnail._id}
                  heading={thumbnail.heading}
                  image={thumbnail.image}
                  body={thumbnail.blockContent}
                  hoverShadow={heroColors?.theme?.hoverShadow}
                  url={thumbnail?.url}
                  openNewTab={thumbnail.openNewTab}
                />
              )
            })}
        </Grid>
      </Container>
    </Box>
  )
}
