
import { Flex, Box, jsx, Heading, Text } from 'theme-ui'

import { FaInfoCircle } from 'react-icons/fa'

export default function boxPricing(props) {
  return (
    <Box
      bg="white"
      className="pricing-item"
      variant="box.rounded1"
      my={2}
      mx={2}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: ['100%', null, '50%', '25%'],
        flexGrow: '1',
        boxShadow: 'shadow12',
        transition: 'all 0.3s linear',
        ':hover': {
          boxShadow: 'shadow32',
          transform: 'translateY(-1rem)',
          transition: 'all 0.3s linear',
        },
      }}
    >
      <div
        className="pricing-deco"
        {...props}
        sx={{
          position: 'relative',
          pt: 5,
          pb: 3
        }}
      >
        <Heading as="h2" color={props.color} variant="text.h3">
          {props.name}
        </Heading>
          <Text>
            {props.priceBefore && <s css={{ opacity: '0.4'}}>{props.priceBefore}</s>} {props.price} {props.month}
          </Text>
        {props.infoFirst && 
        <Text pt={2} data-tip={props.infoFirstTooltip} sx={{display: 'flex', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem !important'}}>
          <FaInfoCircle sx={{ mr: 1 }} /> {props.infoFirst}
        </Text>
        }
        {props.infoSecond && 
        <Text data-tip={props.infoSecondTooltip} sx={{display: 'flex', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem !important'}}>
          <FaInfoCircle sx={{ mr: 1 }} /> {props.infoSecond}
        </Text>
        }
      </div>
      {props.children}
    </Box>
  )
}
