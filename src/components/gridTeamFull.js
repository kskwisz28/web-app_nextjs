import React from 'react'
import {Box, Flex, Heading} from 'theme-ui'
import Container from './container'
import SingleImage from './singleImage'
import OptimizedImage from "@/components/optimizedImage";

export default function GridTeamFull(props) {
  return (
    <Box
      sx={{
        py: [5, null, null, null, 6],
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Container>
        <Flex css={{flexWrap: 'wrap'}}>
          {props.rows &&
            props.rows.map(employee => (
              <Box
                key={employee._id}
                sx={{
                  width: ['100%', null, null, '50%', null, '33.333%'],
                  px: 2,
                  py: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <OptimizedImage
                  priority={employee.image && employee.image.noLazyLoad}
                  style={{width: '100%', borderRadius: '18px'}}
                  maxWidth='362px'
                  maxHeight='362px'
                  image={
                    employee.image &&
                    employee.image.image &&
                    employee.image.image
                  }
                />
                <Heading as="h3" pt="2" css={{textAlign: 'center'}}>
                  {employee.name}
                </Heading>
                <span
                  css={{
                    textAlign: 'center',
                    display: 'block',
                  }}
                >
                  {employee.role}
                </span>
              </Box>
            ))}
        </Flex>
      </Container>
    </Box>
  )
}
