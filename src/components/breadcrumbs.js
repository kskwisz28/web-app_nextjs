import React from 'react'

import Container from '../components/container'

import { Box, Flex, Link, Text } from 'theme-ui'

export const Breadcrumbs = ({ links }) => {
  return (
    <Box sx={{ backgroundColor: '#FAFAFA', py: 4 }}>
      <Container>
        <Flex sx={{ flexWrap: 'wrap' }}>
          {links.map((link, linkIndex) => (
            <>
              {!!linkIndex && <Text sx={{ mx: 2 }}>/</Text>}

              <Link href={link.href}>
                <Text variant="breadcrumb">{link.title}</Text>
              </Link>
            </>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
