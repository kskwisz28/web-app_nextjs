import {FaCheckCircle, FaRegEye} from 'react-icons/fa'


import {Text, Box, Button, Flex} from 'theme-ui'
import InfoSection from '../components/infoWithImage'
import Container from './container'
import LinkCheck from './linkCheck'

import OptimizedImage from "@/components/optimizedImage";

export default function ShowcaseTemplate(props) {
  return (
    <Container
      sx={{
        py: [5, null, null, null, 6],
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: 'shadowDevice',
        }}
      >
        <Box
          css={{
            position: 'absolute',
            top: 0,
            display: 'block',
            zIndex: -1,
            right: props.info && props.info.imageFirst ? '' : 0,
            left: props.info && props.info.imageFirst ? 0 : '',
            whiteSpace: 'nowrap',
            width: '50%',
            height: '100%',
          }}
        >
          {props.bgImage && props.bgImage.image && <OptimizedImage
            image={props.bgImage.image}
            fill
          />}

        </Box>

        <Box
          bg="light300"
          css={{
            position: 'absolute',
            top: 0,
            display: 'block',
            zIndex: -1,
            left: props.info && props.info.imageFirst ? '' : 0,
            right: props.info && props.info.imageFirst ? 0 : '',
            width: '50%',
            height: '100%',
          }}
        />

        <Box py={4} px={[0, null, 1, 2, 3, 4]}>
          <Container>
            <Box
              css={{
                backdropFilter: 'blur(10px) saturate(180%) brightness(130%)',
                background: 'rgba(255,255,255,.7)',
                borderRadius: '8px',
              }}
            >
              <InfoSection {...props.info} noPadding>
                <Text color="text">
                  <ul
                    sx={{
                      my: 3,
                      listStyle: 'none',
                    }}
                  >
                    {props.items &&
                      props.items.map(item => (
                        <li
                          key={item._key}
                          sx={{
                            py: 1,
                            display: 'flex',
                            fontSize: '16px',
                            alignItems: 'center',
                          }}
                        >
                          <FaCheckCircle
                            sx={{color: 'green', pr: 1, minWidth: '1rem'}}
                          />
                          {item.title}
                        </li>
                      ))}
                  </ul>
                </Text>
                <Flex
                  sx={{
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  {props.firstButton && props.firstButton.buttonText && (
                    <LinkCheck
                      blank
                      to={props.firstButton && props.firstButton.buttonUrl}
                      effect="slideLeft"
                      length={0.5}
                      sx={{
                        color: 'text',
                        width: '100%',
                        fontWeight: '600',
                      }}
                    >
                      <Text
                        variant="outlineBlack"
                        my={2}
                        css={{
                          alignItems: 'center',
                          display: 'flex',
                        }}
                      >
                        <FaRegEye sx={{pr: 1, mr: 1}}/>{' '}
                        {props.firstButton.buttonText}
                      </Text>
                    </LinkCheck>
                  )}
                  {props.secondButton && props.secondButton.buttonText && (
                    <LinkCheck
                      blank
                      to={props.secondButton && props.secondButton.buttonUrl}
                      effect="slideLeft"
                      length={0.5}
                    >
                      <Button variant="buttons.cta" my={2}>
                        {props.secondButton.buttonText}
                      </Button>
                    </LinkCheck>
                  )}
                </Flex>
              </InfoSection>
            </Box>
          </Container>
        </Box>
      </Box>
    </Container>
  )
}
