
import { jsx, Box, Flex, Heading } from 'theme-ui'

import BlockContent from '@sanity/block-content-to-react'
import serializer from '../helpers/serializers'

import { BsCheckCircle } from 'react-icons/bs'
import {
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiFillCheckCircle,
} from 'react-icons/ai'

export default function InfoWithIcon(props) {
  const IconSelection = styling => {
    switch (props.iconChoice) {
      case 'BsCheckCircle':
        return <BsCheckCircle />
      case 'AiOutlineCheck':
        return (
          <AiOutlineCheck
            sx={{
              mt: props.title ? '.2rem' : '.8rem',
              mr: props.iconSpace ? props.iconSpace : 2,
              minWidth: '3rem',
              color:
                props.colorIcon && props.colorIcon.hex
                  ? props.colorIcon && props.colorIcon.hex
                  : '',
            }}
          />
        )
      case 'AiOutlineCheckCircle':
        return (
          <AiOutlineCheckCircle
            sx={{
              mt: props.title ? '.2rem' : '.8rem',
              mr: props.iconSpace ? props.iconSpace : 2,
              minWidth: '3rem',
              color:
                props.colorIcon && props.colorIcon.hex
                  ? props.colorIcon && props.colorIcon.hex
                  : '',
            }}
          />
        )
      case 'AiFillCheckCircle':
        return (
          <AiFillCheckCircle
            sx={{
              mt: props.title ? '.2rem' : '.8rem',
              mr: props.iconSpace ? props.iconSpace : 2,
              minWidth: '3rem',
              color:
                props.colorIcon && props.colorIcon.hex
                  ? props.colorIcon && props.colorIcon.hex
                  : '',
            }}
          />
        )
      default:
        return (
          <BsCheckCircle
            sx={{
              mt: props.title ? '.2rem' : '.8rem',
              mr: props.iconSpace ? props.iconSpace : 2,
              minWidth: '3rem',
              color:
                props.colorIcon && props.colorIcon.hex
                  ? props.colorIcon && props.colorIcon.hex
                  : '',
            }}
          />
        )
    }
  }

  return (
    <Box
      sx={{
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Flex
        css={{
          flexDirection: props.iconAfter ? 'row-reverse' : 'row',
          alignItems: props.alignItems ? props.alignItems : 'flex-start',
        }}
      >
        <IconSelection />
        <Box>
          {props.title && (
            <Heading
              sx={{
                color:
                  props.colorTitle && props.colorTitle.hex
                    ? props.colorTitle && props.colorTitle.hex
                    : '',
              }}
              as="h3"
            >
              {props.title}
            </Heading>
          )}
          <BlockContent
            sx={{ py: 0 }}
            blocks={props.advancedDescription}
            serializers={serializer}
            hardBreak
          />
        </Box>
      </Flex>
    </Box>
  )
}
