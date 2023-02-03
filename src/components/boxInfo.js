
import { Flex, Text, jsx, Heading, Box } from 'theme-ui'

export default function BoxInfo(props) {
  return (
    <Flex
      bg={props.colorBg && props.colorBg.hex}
      p={2}
      sx={{
        py: [5, null, null, null, 6],
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
      css={{
        '@media screen and (max-width: 540px)': {
          flexDirection: 'column',
        },
      }}
    >
      {props.titleThird && (
        <Flex
          margin={props.margin}
          bg={'light300'}
          variant="box.primary"
          sx={{
            width: '100%',
            overflow: 'hidden',
            transition: 'all 0.2s linear',
            borderTop: '8px solid',
            boxShadow: 'small',
            borderColor: 'primary',
            ':hover': {
              border: 'none',
              bg: 'light200',
              transform: 'translateY(-1rem)',
              boxShadow: 'shadow32',
              h3: {
                color: 'black',
                transition: 'all 0.3s linear',
                opacity: '0.1',
                transform: 'scale(1.5) translateY(-2rem)',
              },
            },
          }}
        >
          <Box>
            <Heading variant="text.h3" as="h4">
              {props.titleFirst}
            </Heading>
            <Text my={2}>{props.textFirst}</Text>
          </Box>
        </Flex>
      )}
      {props.titleThird && (
        <Flex
          margin={props.margin}
          bg={'light300'}
          variant="box.primary"
          sx={{
            width: '100%',
            overflow: 'hidden',
            transition: 'all 0.2s linear',
            borderTop: '8px solid',
            boxShadow: 'small',
            mx: 3,
            borderColor: 'primary',
            ':hover': {
              border: 'none',
              bg: 'light200',
              transform: 'translateY(-1rem)',
              boxShadow: 'shadow32',
              h3: {
                color: 'black',
                transition: 'all 0.3s linear',
                opacity: '0.1',
                transform: 'scale(1.5) translateY(-2rem)',
              },
            },
          }}
        >
          <Box>
            <Heading variant="text.h3" as="h4">
              {props.titleSecond}
            </Heading>
            <Text my={2}>{props.textSecond}</Text>
          </Box>
        </Flex>
      )}
      {props.titleThird && (
        <Flex
          margin={props.margin}
          variant="box.primary"
          bg="light300"
          sx={{
            width: '100%',
            overflow: 'hidden',
            transition: 'all 0.2s linear',
            borderTop: '8px solid',
            boxShadow: 'small',
            borderColor: 'primary',
            ':hover': {
              border: 'none',
              bg: 'light200',
              transform: 'translateY(-1rem)',
              boxShadow: 'shadow32',
              h3: {
                color: 'black',
                transition: 'all 0.3s linear',
                opacity: '0.1',
                transform: 'scale(1.5) translateY(-2rem)',
              },
            },
          }}
        >
          <Box>
            <Heading variant="text.h3" as="h4">
              {props.titleThird}
            </Heading>
            <Text my={2}>{props.textThird}</Text>
          </Box>
        </Flex>
      )}
    </Flex>
  )
}
