import { useRef } from 'react'

import { jsx, Text, Image, Box, Flex } from 'theme-ui'

import InfoText from './infoText'
import { motion } from 'framer-motion'
import EditorWrap from './editorWrap'
import Container from './container'

import DeviceFrame from './deviceFrame'
import IllustrationMobile from '../images/landing-mobile.svg'
import BannerSecond from '../images/5update.png'

import ProductTshirt from '../images/product-tshirt.svg'
import ProductPants from '../images/shop-product-pants.svg'

// import ParallaxItem from './parallaxItem'
import StartUI from './start-ui'

export default function LandingIntro(props) {
  const constraintsRef = useRef(null)

  // const sideTransition = {
  //   x: {
  //     duration: 4,
  //     yoyo: Infinity,
  //     ease: 'easeOut',
  //   },
  // }

  const allProducts = (
    <Flex
      prefix={4}
      p={2}
      css={{
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ width: '100%', height: '100%' }}>
        <Flex
          sx={{
            width: '100%',
            p: 1,
            height: '100%',
            bg: 'rgba(255,255,255,.5)',
            borderRadius: '8px',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src={ProductTshirt}
            alt="Product T-shirt"
            sx={{
              height: 'auto',
              maxHeight: '120px',
              width: '100%',
              p: 2,
              pointerEvents: 'none',
            }}
          />
          <Box css={{ width: '100%' }}>
            <div
              sx={{
                my: 1,
                height: '8px',
                mx: 'auto',
                bg: 'dark100',
                borderRadius: '1rem',
              }}
            />
            <div
              sx={{
                my: 1,
                height: '8px',
                mx: 'auto',
                bg: 'dark100',
                borderRadius: '1rem',
              }}
            />
          </Box>
        </Flex>
      </Box>

      <Box sx={{ width: '100%', height: '100%' }}>
        <Flex
          sx={{
            width: '100%',
            height: '100%',
            p: 1,
            bg: 'rgba(255,255,255,.5)',
            borderRadius: '8px',
            mx: 1,
            position: 'relative',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Image
            src={ProductPants}
            alt="Product Pants"
            sx={{
              height: 'auto',
              maxHeight: '120px',
              width: ['100%', null, null, '50%'],
              p: 2,
              pointerEvents: 'none',
            }}
          />
          <Box css={{ width: ['100%', null, null, '50%'] }}>
            <div
              sx={{
                my: 1,
                height: '8px',
                mx: 'auto',
                bg: 'dark100',
                borderRadius: '1rem',
              }}
            />
            <div
              sx={{
                my: 1,
                height: '8px',
                mx: 'auto',
                bg: 'dark100',
                borderRadius: '1rem',
              }}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  )

  return (
    <Box
      sx={{
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
        overflow: 'auto',
      }}
    >
      <Container>
        <Box variant="box.intro">
          <Flex
            className="imgFlex"
            css={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              position: 'relative',
            }}
          >
            <Box
              css={{
                position: 'relative',
                width: '100%',
              }}
            >
              <div
                sx={{
                  position: 'relative',
                  mx: 'auto',
                  maxWidth: ['90%', null, '75%', '85%'],
                }}
              >
                <div ref={constraintsRef}>
                  <DeviceFrame>
                    <EditorWrap
                      windowText={
                        props.urlTitle
                          ? props.urlTitle
                          : 'https://din-webbutik.se'
                      }
                    >
                      <StartUI {...props} />
                    </EditorWrap>
                  </DeviceFrame>
                </div>

                <Box
                  css={{
                    position: 'absolute',
                    left: '-8rem',
                    bottom: '-4rem',
                    width: '100%',
                  }}
                />
              </div>
            </Box>

            <motion.div
              sx={{
                ml: -6,
                p: 3,
                display: ['none', null, null, 'block'],
                width: '25%',
                height: 'auto',
                cursor: 'grab',
                position: 'absolute',
                bottom: '0rem',
                right: '-0rem',
              }}
              // transition={sideTransition}
              // animate={{ x: [4, -4] }}
              drag
              dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
            >
              <DeviceFrame>
                <Box bg="light300" css={{ borderRadius: '8px' }}>
                  <Image
                    src={IllustrationMobile}
                    sx={{
                      borderTopRightRadius: '8px',
                      borderTopLeftRadius: '8px',
                      position: 'relative',
                      boxShadow: 'shadowDeviceLarge',
                      width: '100%',
                      pointerEvents: 'none',
                    }}
                  />
                  <Box sx={{ width: '100%' }}>
                    <Image
                      src={props.firstImage ? props.firstImage.asset?.url : BannerSecond}
                      alt="Shopping Bags"
                      sx={{
                        display: 'block',
                        pl: 4,
                        width: '100%',
                        marginBottom: '-2rem',
                        borderRadius: '1rem',
                        pointerEvents: 'none',
                      }}
                    />
                  </Box>
                  <Box sx={{ width: '100%', pt: 4, pb: 3 }}>
                    <div
                      sx={{
                        p: 2,
                        my: 1,
                        width: '60%',
                        height: '2px',
                        mx: 'auto',
                        bg: 'dark100',
                        borderRadius: '8px',
                      }}
                    />
                    <div
                      sx={{
                        p: 2,
                        my: 1,
                        width: '50%',
                        height: '2px',
                        mx: 'auto',
                        bg: 'dark100',
                        borderRadius: '8px',
                      }}
                    />
                    <div
                      sx={{
                        p: 2,
                        my: 1,
                        width: '40%',
                        height: '2px',
                        mx: 'auto',
                        bg: 'primary',
                        borderRadius: '8px',
                      }}
                    />
                  </Box>
                  {allProducts}
                  {/* <Image
                    src={MobileProducts}
                    alt="shop products"
                    sx={{
                      display: 'block',
                      height: 'auto',
                      width: '100%',
                      borderRadius: '1rem',
                    }}
                  /> */}
                </Box>
              </DeviceFrame>
            </motion.div>
          </Flex>

          <div
            sx={{
              width: '250px',
              textAlign: 'center',
              mx: 'auto',
              my: 2,
            }}
          ></div>
          <Box pt={5} css={{ position: 'relative' }}>
            <InfoText center {...props.info} />
            {props.subtitle && (
              <Text
                color="dark300"
                py={3}
                sx={{
                  textAlign: 'center',
                  fontSize: '0.9rem !important',
                }}
              >
                {props.subtitle}
              </Text>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
