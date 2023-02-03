import React from 'react'
import { Text, Box, Flex, Grid } from 'theme-ui'

export default function ZettleBox({
  titleFirst,
  titleSecond,
  subtitleFirst,
  subtitleSecond,
  themeFirst,
  themeSecond,
  padding
}) {

  return (
    <Box
      sx={{
        pt: padding?.top ? padding?.top : 0,
        pb: padding?.bottom ? padding?.bottom : 0,
        position: 'relative',
        maxWidth: 'container',
        mx: 'auto'
      }}
    >

      <Grid
        gap={0}
        columns={[1, null, 2]}
        sx={{
          width: '100%',
        }}
      >

        <Flex sx={{ width: '100%', height: '100%', bg: themeFirst?.background, py: [5, null, null, null, 6] }}>
          <Box sx={{ width: '100%', textAlign: 'center' }}><Text sx={{ display: 'block', color: '#192550', fontWeight: '700', fontSize: '50px !important' }}>{titleFirst}</Text> <Text sx={{ display: 'block', color: '#192550', fontSize: '20px' }}>{subtitleFirst}</Text></Box>
        </Flex>

        <Flex sx={{ width: '100%', height: '100%', bg: themeSecond?.background, py: [5, null, null, null, 6] }}>
          <Box sx={{ width: '100%', textAlign: 'center' }}><Text sx={{ display: 'block', color: '#192550', fontWeight: '700', fontSize: '50px !important' }}>{titleSecond}</Text> <Text sx={{ display: 'block', color: '#192550', fontSize: '20px' }}>{subtitleSecond}</Text></Box>
        </Flex>

      </Grid>
    </Box>
  )
}
