import React, { useRef, useState } from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from '../components/container'

import { Flex, Box, Heading, useThemeUI } from 'theme-ui'

import serializer from '../helpers/serializers'

const AccordionItem = ({
  title,
  content,
  heroColors,
  isOpen,
  handleOnClick,
}) => {
  const ANIMATION_DURATION = '0.2'
  const BORDER_RADIUS = 6

  const contentRef = useRef(null)

  const context = useThemeUI()
  const { theme } = context

  return (
    <Box onClick={() => handleOnClick()}>
      <Flex
        sx={{
          backgroundColor: heroColors?.theme?.secondaryBackground ?? 'white',
          borderRadius: BORDER_RADIUS,
          borderBottomLeftRadius: isOpen ? 0 : BORDER_RADIUS,
          borderBottomRightRadius: isOpen ? 0 : BORDER_RADIUS,
          transitionDelay: isOpen ? null : `${ANIMATION_DURATION}s`,
          transitionProperty: 'border-radius',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 4,
          py: 4,
          position: 'relative',
          borderBottom: isOpen ? '1px solid #FAF8F7' : null,
        }}
      >
        <Heading variant="h4" sx={{ mb: 0 }}>
          {title}
        </Heading>

        <Box
          sx={{
            transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        >
          <svg
            width="24"
            height="15"
            viewBox="0 0 24 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 12.17L21.171 15L11.996 5.661L2.829 15L2.47406e-07 12.17L11.996 -1.04942e-06L24 12.17Z"
              fill={isOpen ? theme.colors.primary : theme.colors.faded}
            />
          </svg>
        </Box>
      </Flex>

      <Box
        sx={{
          overflow: 'hidden',
          maxHeight: isOpen ? contentRef?.current?.offsetHeight : 0,
          transition: `max-height ${ANIMATION_DURATION}s ease-in-out`,
          backgroundColor: heroColors?.theme?.secondaryBackground ?? 'white',
          borderBottomLeftRadius: BORDER_RADIUS,
          borderBottomRightRadius: BORDER_RADIUS,
        }}
      >
        <Flex ref={contentRef} sx={{ p: 4 }}>
          <BlockContent blocks={content} serializers={serializer} hardBreak />
        </Flex>
      </Box>
    </Box>
  )
}

export default ({ heroColors, heading, accordionItems, headingSize }) => {
  const [openIndex, setOpenIndex] = useState(null)

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
            sx={{ mb: 5, textAlign: 'center' }}
          >
            {heading}
          </Heading>
        )}

        <Flex sx={{ flexDirection: 'column', gap: 3 }}>
          {accordionItems.map((accordionItem, itemIndex) => (
            <AccordionItem
              title={accordionItem.heading}
              content={accordionItem.blockContent}
              heroColors={heroColors}
              isOpen={openIndex === itemIndex}
              itemIndex={itemIndex}
              handleOnClick={() =>
                setOpenIndex(openIndex === itemIndex ? null : itemIndex)
              }
            />
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
