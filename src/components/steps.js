import React, { useEffect, useState } from 'react'
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion'

import { useStaticQuery, graphql, Link } from 'gatsby'
import { useKeenSlider } from 'keen-slider/react'
import { jsx, Image, Box, Text, Divider } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'


import InfoText from '../components/infoText'
import styled from '@emotion/styled'
import LinkCheck from '../components/linkCheck'

import mediaqueries from '../styles/media'

// import EditorWrap from './editorWrap'
import { Flex } from 'theme-ui'
import { FaArrowRight } from 'react-icons/fa'
import Connect from '../images/journey-connect.svg'
import Customers from '../images/2-reach-customers.svg'
import Sell from '../images/3-sell-everywhere.svg'

const Slide = styled.div`
  .slide {
    min-width: 1000px;
    margin: 0 2rem;
  }
  //product overview
  .product {
    .product-inner {
      padding: 0 32px;
      .product-content {
        padding: 72px 0 24px;
        .product-content-inner {
          h4 {
            font-size: 14px;
            margin: 0 0 16px 0;
            line-height: 1;
          }
          h1 {
            font-size: 50px;
            font-weight: 700;
            margin: 0 0 24px 0;
            line-height: 1;
          }
          p {
            font-size: 14px;
          }
          .btn-row {
            margin-top: 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            button {
              height: 56px;
              padding: 0 24px;
              background: red;
              color: #ffffff;
              border: none;
              font-size: 14px;
              line-height: 1;
            }
            svg {
              margin-right: 24px;
            }
          }
        }
      }
    }
    .product-slide-enlarge {
      position: relative;

      .background {
        position: fixed;
        height: 100vh;
        width: 100%;
        background: #636363;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        opacity: 0;
        overflow-y: hidden;
      }
      .product-drag-header {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        z-index: 22;
        top: 0;
        padding: 24px 32px;
        opacity: 0;
        .company-name {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
        }
        .close {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          position: absolute;
          right: 0;
          width: 100px;
          height: 100px;
          justify-content: center;
        }
      }

      .product-container {
        position: relative;
        height: 540px;

        .product-image {
          z-index: 8;
          position: absolute;
        }
      }

      .product-drag {
        z-index: 99;
        position: relative;
        margin-bottom: 40px;
        .product-drag-inner {
          padding: 0 32px;
          .product-drag-label {
            display: flex;
            justify-content: flex-end;
            h6 {
              font-size: 14px;
              margin: 0;
              margin-bottom: 24px;
              display: flex;
              align-items: center;
              svg {
                margin-right: 12px;
              }
            }
          }
          .product-drag-progress-background {
            margin-top: 7rem;
            width: 100%;
            height: 2px;
            background: rgba(255, 255, 255, 0.1);
            position: relative;
            .product-drag-progress {
              width: 0%;
              height: 2px;
              background: rgba(2255, 255, 255, 1);
              position: absolute;
              z-index: 2;
              right: 0;
            }
          }
        }
      }
    }
  }
`

export default function Steps(props) {
  const data = useStaticQuery(graphql`
    {
      Shopowners: file(relativePath: { eq: "shopowners.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
    }
  `)

  const ease = [0.6, 0.05, -0.01, 0.99]
  let x = useSpring(0, { stiffness: 200, damping: 100 })
  const fadeIn = useTransform(x, [-100, 0], [1, 0])
  const fadeOut = useTransform(x, [-60, 0], [0, 1])
  const scale = useTransform(x, [-100, 0], [1.25, 1])
  const width = useTransform(x, [-1060, 0], [1000, 0])
  const up = useTransform(x, [-100, 0], [-100, 0])
  const down = useTransform(x, [-100, 0], [100, 0])

  //state
  const [state, setState] = useState(false)

  // Update the state to check if the user has dragged the product
  useEffect(() => {
    x.onChange(() => {
      x.get() > -100 ? setState(false) : setState(true)
    })
  }, [x])

  //Setting body scroll
  useEffect(() => {
    let targetElement = document.querySelector('html')
    state
      ? targetElement.classList.add('no-scroll')
      : targetElement.classList.remove('no-scroll')
  })

  // Closing the drag product
  const closeProductDrag = () => {
    x.stop()
    x.set(0)
  }

  return (
    <Slide>
      <div className="product">
        <div className="product-inner">
          <div className="product-content">
            <motion.div
              style={{ translateY: up }}
              className="product-content-inner"
            >
              <h1>Freedom Everywhere</h1>
              <div className="btn-row">DownArrow</div>
            </motion.div>
          </div>
        </div>
        <div className="product-slide-enlarge">
          {state ? (
            <>
              <motion.div
                className="background"
                style={{ opacity: fadeIn }}
              ></motion.div>
              <AnimatePresence>
                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ ease: ease }}
                  className="product-drag-header"
                >
                  <div className="company-name">How it works</div>
                  <div onClick={closeProductDrag} className="close">
                    Close
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <AnimatePresence></AnimatePresence>
          )}
          <div className="product-container">
            <motion.div
              drag="x"
              style={{ x, scale }}
              dragElastic={0.05}
              dragConstraints={{ left: -1060, right: 1060 }}
              className="product-image"
            >
              <Flex>
                <div className={'slide'}>
                  <Flex
                    bg="white"
                    variant="box.primary"
                    className="slide-content"
                    sx={{
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <Box p={3} sx={{ width: '100%' }}>
                      <GatsbyImage
                        image={data.Shopowners.childImageSharp.gatsbyImageData}
                        alt="Merchants looking at tablet"
                        css={{ borderRadius: '8px' }}
                      />
                    </Box>

                    <InfoText
                      colorTop={{ hex: 'red' }}
                      heading="h3"
                      topLine="STEP 1"
                      bgTop={{ hex: 'dark' }}
                      colorTop={{ hex: 'white' }}
                      headline="Pick a style"
                      description="Choose one of our predefined designs. Then customize it however you like with our easy to use interface."
                    >
                      <LinkCheck
                        to={'/en/pick-a-design'}
                        effect="slideLeft"
                        length={0.5}
                      >
                        <Text color="primary700" mr={2}>
                          See available designs
                        </Text>{' '}
                      </LinkCheck>
                      <FaArrowRight />
                    </InfoText>
                  </Flex>
                </div>

                <div className={'slide'}>
                  <Flex
                    bg="white"
                    variant="box.primary"
                    className="slide-content"
                    sx={{ alignItems: 'center', height: '100%' }}
                  >
                    <Image
                      src={Connect}
                      alt="Merchants"
                      sx={{ height: 'auto', width: '100%', px: 4 }}
                    />
                    <InfoText
                      colorTop={{ hex: 'red' }}
                      heading="h3"
                      topLine="STEP 2"
                      bgTop={{ hex: 'dark' }}
                      colorTop={{ hex: 'white' }}
                      headline="Pick payment & shipping"
                      description="With just a few clicks you will get your preferred payment and shipping methods integrated into your shop."
                    ></InfoText>
                  </Flex>
                </div>

                <div className={'slide'}>
                  <Flex
                    bg="white"
                    variant="box.primary"
                    className="slide-content"
                    sx={{ alignItems: 'center', height: '100%' }}
                  >
                    <Image
                      src={Sell}
                      alt="Merchants"
                      sx={{ height: 'auto', width: '100%', px: 4 }}
                    />
                    <InfoText
                      colorTop={{ hex: 'red' }}
                      heading="h3"
                      topLine="STEP 3"
                      bgTop={{ hex: 'dark' }}
                      colorTop={{ hex: 'white' }}
                      headline="Sell everywhere"
                      description="Create your first products and start selling. Join some of the worlds most well-known marketplaces and boost your sales through ready to use integrations."
                    ></InfoText>
                  </Flex>
                </div>

                <div className={'slide'}>
                  <Flex
                    bg="white"
                    variant="box.primary"
                    className="slide-content"
                    sx={{ alignItems: 'center', height: '100%' }}
                  >
                    <Image
                      src={Customers}
                      alt="Merchants"
                      sx={{ height: 'auto', width: '100%', px: 4 }}
                    />
                    <InfoText
                      colorTop={{ hex: 'red' }}
                      heading="h3"
                      topLine="STEP 4"
                      bgTop={{ hex: 'dark' }}
                      colorTop={{ hex: 'white' }}
                      headline="Connect with customers"
                      description="Grow your brand through seamless integrations with newsletters, social media-platforms and search engines such as Facebook, Instagram and Google."
                    ></InfoText>
                  </Flex>
                </div>
              </Flex>
            </motion.div>
          </div>
          <motion.div style={{ paddingBottom: down }} className="product-drag">
            <div className="product-drag-inner">
              <div className="product-drag-label">
                <motion.h6 style={{ x, opacity: fadeOut }}>
                  Chevron Icon here Drag To Enlarge
                </motion.h6>
              </div>
              <div className="product-drag-progress-background">
                <motion.div
                  style={{ width }}
                  className="product-drag-progress"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  )
}
