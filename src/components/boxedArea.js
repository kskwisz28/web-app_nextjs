
import { jsx, Box, Flex } from 'theme-ui'
import LinkCheck from '../components/linkCheck'
import variantOne from '../components/boxedAreaVariantOne'
import variantTwo from '../components/boxedAreaVariantTwo'

import Container from './container'

export default function BoxedArea(props) {
  return (
    <Container>
      <Box>
        <Flex
          p={4}
          sx={{
            borderRadius: '8px',
            flexWrap: 'wrap',
          }}
        >
          {props.rows.map(item => (
            <Box
              p={3}
              key={item._key}
              sx={{ width: ['100%', null, null, '50%'] }}
            >
              {item?.url && (
                <LinkCheck to={item?.url} effect="slideLeft" length={0.5}>
                  {props.variant === '1' ? variantOne(item) : variantTwo(item)}
                </LinkCheck>
              )}
              {!item?.url && (
                <Box>
                  {props.variant === '1' ? variantOne(item) : variantTwo(item)}
                </Box>
              )}
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  )
}
