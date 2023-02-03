
import { jsx, Flex, Divider, Box, Text } from 'theme-ui'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'

export default function Feature(props) {
  return (
    <Box>
      <Flex
        px={4}
        py={props.tableSize ? props.tableSize : '4'}
        sx={{
          flexWrap: 'wrap',
          textAlign: 'center',
          justifyContent: 'space-between',
          transitions: 'background-color 1000ms linear',
          ':hover': {
            bg: 'light300',
            transitions: 'background-color 1000ms linear',
          },
        }}
      >
        <Box css={{ flexGrow: '3', textAlign: 'left', fontWeight: '600' }}>
          {props.children}
        </Box>
        <Flex
          sx={{
            flexGrow: '1',
            justifyContent: 'flex-end',
          }}
        >
          {props.firstOption && (
            <Flex px={2} css={{ alignItems: 'center' }}>
              <FaCheckCircle sx={{ color: 'raspberry', mr: 1 }} />{' '}
              {props.firstOptionTitle}
            </Flex>
          )}
          {!props.firstOption && !props.hideUnchecked && (
            <Flex px={2} css={{ alignItems: 'center' }}>
              <FaTimes sx={{ color: 'coral', mr: 1 }} />{' '}
              {props.firstOptionTitle}
            </Flex>
          )}
          {props.secondOption && (
            <Flex px={2} css={{ alignItems: 'center' }}>
              <FaCheckCircle sx={{ color: 'kiwi', mr: 1 }} />{' '}
              {props.secondOptionTitle}
            </Flex>
          )}
          {!props.secondOption && !props.hideUnchecked && (
            <Flex px={2} css={{ alignItems: 'center' }}>
              <FaTimes sx={{ color: 'coral', mr: 1 }} />{' '}
              {props.secondOptionTitle}
            </Flex>
          )}
          {props.thirdOption && (
            <Flex px={2} css={{ alignItems: 'center' }}>
              <FaCheckCircle sx={{ color: 'primary', mr: 1 }} />{' '}
              {props.thirdOptionTitle}
            </Flex>
          )}
          {!props.thirdOption && !props.hideUnchecked && props.thirdOptionTitle && (
            <Flex px={2} css={{ alignItems: 'center' }}>
              <FaTimes sx={{ color: 'coral', mr: 1 }} />{' '}
              {props.thirdOptionTitle}
            </Flex>
          )}
          {props.textRight && <Text>{props.textRight}</Text>}
        </Flex>
      </Flex>
      <Divider py={0} my={0} color="dark100" />
    </Box>
  )
}
