import qbLogoDark from '../images/qb-logo-black.svg'
import LinkCheck from '../components/linkCheck'
import ArrowRight from '../images/arrow-right.svg'

import SingleImage from './singleImage'


import { jsx, Image, Box, Flex, Container } from 'theme-ui'

export default function MigrateOptions(props) {
  return (
    <Box
      bg={props.colorBg && props.colorBg.hex}
      p={2}
      sx={{
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Container>
        <Flex sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Box>
            {props.rows &&
              props.rows.map(option => (
                <Box
                  key={option._key}
                  sx={{
                    transition:
                      '0.1s ease-in-out transform, 0.4s ease-in-out box-shadow',
                    maxWidth: '24rem',
                    ':hover': {
                      opacity: 0.8,
                      transform: 'translateY(-2px)',
                      boxShadow:
                        '1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),4px 8px 28px -10px rgba(34, 33, 81, 0.15)',
                    },
                  }}
                >
                  <LinkCheck
                    to={option?.url}
                    effect="slideLeft"
                    length={0.5}
                  >
                    <Flex
                      bg="white"
                      variant="box.primary"
                      sx={{
                        width: '100%',
                        minWidth: '250px',
                        boxShadow: 'shadow48',
                        px: 4,
                        py: 3,
                        my: 3,
                      }}
                    >
                      <SingleImage
                        shadowWrapper
                        wrapperPaddingX={4}
                        wrapperPaddingY={4}
                        imgMaxHeight="2rem"
                        image={
                          option.image &&
                          option.image.image &&
                          option.image.image
                        }
                      />
                    </Flex>
                  </LinkCheck>
                </Box>
              ))}
          </Box>
          <Image
            src={ArrowRight}
            alt="Merchants"
            sx={{
              height: 'auto',
              width: '100%',
              maxWidth: '4rem',
              px: 1,
              mx: 3,
              mt: -3,
            }}
          />
          <Box sx={{ alignItems: 'center' }}>
            <Image
              src={qbLogoDark}
              alt="Quickbutik Logo"
              sx={{ height: 'auto', width: '100%' }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
