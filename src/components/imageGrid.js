import React from 'react'

import Container from '../components/container'

import {Grid, Flex, Box, Heading, Image, Link} from 'theme-ui'
import BlockContent from '@sanity/block-content-to-react'
import serializer from '../helpers/serializers'

const GridImage = ({image, hoverShadow, url, openNewTab}) => {
  return (
    <Flex
      backgroundColor={'background'}
      sx={{
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          boxShadow: url ? hoverShadow : 'none',
          transition: 'box-shadow .2s ease-in-out',
        },
        aspectRatio: '1.625',
        justifyContent: 'center',
        alignItems: 'center',
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
            objectFit: 'cover',
          }}
        />
      )}
    </Flex>
  )
}

export default function flex({heroColors, blockContent, heading, images, headingSize}) {
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
            sx={{mb: 2, textAlign: 'center'}}
          >
            {heading}
          </Heading>
        )}

        <Flex sx={{justifyContent: 'center', mb: 4}}>
          <BlockContent
            blocks={blockContent}
            serializers={serializer}
            hardBreak
          />
        </Flex>

        <Grid
          gap={4}
          columns={[1, null, 2, 4]}
          sx={{
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {images &&
            images.map(image => {
              return (
                <GridImage
                  key={image._id}
                  image={image.image}
                  hoverShadow={heroColors?.theme?.hoverShadow}
                  url={image?.url}
                  openNewTab={image.openNewTab}
                />
              )
            })}
        </Grid>
      </Container>
    </Box>
  )
}
