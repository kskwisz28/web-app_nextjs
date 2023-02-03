
import { jsx } from 'theme-ui'
import { Box, Flex } from 'theme-ui'
import Container from '../components/container'
import ImageItem from './imageItem'

export default function GridReference(props) {
  const modifiedBg = props?.colorBg?.hex == "#2d3947"  ? "#362f4a" : props?.colorBg?.hex
  return (
    <Box
      sx={{
        py: [5, null, null, null, 6],
        bg: modifiedBg ? modifiedBg : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Container>
        <Flex css={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {props.rows &&
            props.rows.map(story => (
              <a
                sx={{
                  flexGrow: 1,
                  width:
                    props.perRow === '3'
                      ? ['50%', null, null, null, '33.333%']
                      : ['50%', null, null, null, '33.333%', null, '25%'],
                }}
                key={story?._key}
                href={story?.url}
                target={props.openInNewPage ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <Box
                  sx={{
                    m: 2,
                    background: '#ffffff',
                    transition: 'all .15s ease',
                    borderRadius: '8px',
                    ':hover': {
                      opacity: 0.8,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <ImageItem story={story} />
                </Box>
              </a>
            ))}
        </Flex>
      </Container>
    </Box>
  )
}
