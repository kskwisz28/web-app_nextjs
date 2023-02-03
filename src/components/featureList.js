
import { jsx, Box, Flex, Heading } from 'theme-ui'
import Container from '../components/container'
import Feature from '../components/feature'

import BlockContent from '@sanity/block-content-to-react'
import serializer from '../helpers/serializers'

export default function FeatureList(props) {
  return (
    <Box
      sx={{
        bg: props.info && props.info.colorBg ? props.info.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Container>
        <Flex sx={{ alignItems: 'center', flexDirection: 'column', pb: 4 }}>
          <Heading
            variant={props?.headingSize ?? 'h2'}
            as={props?.headingSize ?? 'h2'}
            sx={{ pb: 2 }}
            >
              {props?.heading}
          </Heading>

          <BlockContent
            blocks={props?.blockContent}
            serializers={serializer}
            hardBreak
          />
        </Flex>
        <Box
          variant="box.primary"
          p={0}
          bg="white"
          sx={{
            overflow: 'hidden',
            boxShadow: 'shadow48',
          }}
        >
          {props.items &&
            props.items.map(item => (
              <Feature
                key={item._key}
                firstOption={item.firstOption}
                secondOption={item.secondOption}
                thirdOption={item.thirdOption}
                textRight={item.textRight}
                hideUnchecked={props.hideUnchecked}
                firstOptionTitle={props.firstOptionTitle}
                secondOptionTitle={props.secondOptionTitle}
                thirdOptionTitle={props.thirdOptionTitle}
                tableSize={props.tableSize}
              >
                {item.title}
              </Feature>
            ))}
        </Box>
      </Container>
    </Box>
  )
}
