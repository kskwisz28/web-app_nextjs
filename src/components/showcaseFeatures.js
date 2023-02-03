import React from 'react'

import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'


import { jsx, Image, Box, Text, Flex, Container, Input } from 'theme-ui'

import { FaHeart } from 'react-icons/fa'
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import { BiCheckShield } from 'react-icons/bi'
import { BsChatSquareDots } from 'react-icons/bs'

import DeviceFrame from './deviceFrame'

import BannerFirst from '../images/sample-banner-3.jpg'
import BannerSecond from '../images/sample-banner-4.jpg'
import dhl from '../images/logo-dhl.svg'
import Postnord from '../images/logo-postnord.svg'
import Schenker from '../images/logo-schenker.svg'
import Klarna from '../images/logo-klarna-pink.svg'
import Swish from '../images/logo-swish-white.svg'
import AnimatedSwitch from './animatedSwitch'
import ProductTshirt from '../images/product-tshirt.svg'

import EditorWrap from './editorWrap'
import RSlogo from '../images/logo-rs.svg'

export default function TestZone(props) {
  const [personalize, setPersonalize] = useState(true)
  const changePersonalize = () => setPersonalize(!personalize)

  const [products, setProducts] = useState(true)
  const changeProducts = () => setProducts(!products)

  const [shipping, setShipping] = useState(false)
  const changeShipping = () => setShipping(!shipping)

  const [wishlist, setWishlist] = useState(false)
  const changeWishlist = () => setWishlist(!wishlist)

  const [theme, setTheme] = useState(true)
  const changeTheme = () => setTheme(!theme)

  const [search, setSearch] = useState(true)
  const changeSearch = val => setSearch(!search)

  const [banner, setBanner] = useState(false)
  const changeBanner = () => setBanner(!banner)

  const [payments, setPayments] = useState(false)
  const changePayments = () => setPayments(!payments)

  const [chat, setChat] = useState(false)
  const changeChat = () => setChat(!chat)

  const [distribute, setDistribute] = useState(false)
  const changeDistribute = () => setDistribute(!distribute)

  const searchBar = useAnimation()

  async function sequence() {
    await searchBar.start({ display: 'hidden' })
    // changeSearch(true)
    // searchBar.start({ scale: 3 })
  }

  sequence()

  const allProducts = (
    <Flex
      prefix={4}
      css={{ justifyContent: 'space-between', overflow: 'hidden' }}
      p={3}
    >
      <motion.div
        css={{ width: '100%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box px={2} sx={{ width: '100%' }}>
          <Box
            variant="box.card"
            sx={{ width: '100%', position: 'relative' }}
            p={4}
          >
            {wishlist && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
              >
                <FaHeart sx={{ color: 'red', mx: 1 }} />
              </motion.div>
            )}
            <Image
              src={ProductTshirt}
              alt="Merchants"
              sx={{ height: 'auto', width: '100%' }}
            />
            <Flex py={2}>
              <div
                sx={{
                  p: 2,
                  width: '60%',
                  height: '1rem',
                  mx: 'auto',
                  bg: 'dark100',
                  borderRadius: '1rem',
                }}
              />
              <FiShoppingCart sx={{ color: 'dark300', mx: 1 }} />
            </Flex>
          </Box>
        </Box>
      </motion.div>

      <motion.div
        css={{ width: '100%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box px={2} sx={{ width: '100%' }}>
          <Box
            variant="box.card"
            sx={{ width: '100%', position: 'relative' }}
            p={4}
          >
            {wishlist && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
              >
                <FaHeart sx={{ color: 'red', mx: 1 }} />
              </motion.div>
            )}
            <Image
              src={ProductTshirt}
              alt="Merchants"
              sx={{ height: 'auto', width: '100%' }}
            />
            <Flex py={2}>
              <div
                sx={{
                  p: 2,
                  width: '60%',
                  height: '1rem',
                  mx: 'auto',
                  bg: 'dark100',
                  borderRadius: '1rem',
                }}
              />
              <FiShoppingCart sx={{ color: 'dark300', mx: 1 }} />
            </Flex>
          </Box>
        </Box>
      </motion.div>

      <motion.div
        css={{ width: '100%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box px={2} sx={{ width: '100%' }}>
          <Box
            variant="box.card"
            sx={{ width: '100%', position: 'relative' }}
            p={4}
          >
            {wishlist && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
              >
                <FaHeart sx={{ color: 'red', mx: 1 }} />
              </motion.div>
            )}
            <Image
              src={ProductTshirt}
              alt="Merchants"
              sx={{ height: 'auto', width: '100%' }}
            />
            <Flex py={2}>
              <div
                sx={{
                  p: 2,
                  width: '60%',
                  height: '1rem',
                  mx: 'auto',
                  bg: 'dark100',
                  borderRadius: '1rem',
                }}
              />
              <FiShoppingCart sx={{ color: 'dark300', mx: 1 }} />
            </Flex>
          </Box>
        </Box>
      </motion.div>

      <motion.div
        css={{ width: '100%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box px={2} sx={{ width: '100%' }}>
          <Box
            variant="box.card"
            sx={{ width: '100%', position: 'relative' }}
            p={4}
          >
            {wishlist && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
              >
                <FaHeart sx={{ color: 'red', mx: 1 }} />
              </motion.div>
            )}
            <Image
              src={ProductTshirt}
              alt="Merchants"
              sx={{ height: 'auto', width: '100%' }}
            />
            <Flex py={2}>
              <div
                sx={{
                  p: 2,
                  width: '60%',
                  height: '1rem',
                  mx: 'auto',
                  bg: 'dark100',
                  borderRadius: '1rem',
                }}
              />
              <FiShoppingCart sx={{ color: 'dark300', mx: 1 }} />
            </Flex>
          </Box>
        </Box>
      </motion.div>
    </Flex>
  )

  return (
    <Container css={{ position: 'relative' }}>
      <Box>
        <Flex
          sx={{
            pr: 3,
            pb: 2,
            pt: 4,
            px: 4,
            flexWrap: 'wrap',
            justifyContent: 'center',
            mx: 'auto',
            // position: 'absolute',
            // left: '-280px',
            // top: '0',
          }}
        >
          <Box px={2} css={{ display: 'none', width: '100%' }}>
            <AnimatedSwitch onClick={changeTheme} titleBefore="Theme" />
          </Box>
          <Box px={2} css={{ display: 'none', width: '100%' }}>
            <AnimatedSwitch
              onClick={changePersonalize}
              titleBefore="Personalize"
            />
          </Box>
          <Box px={2} css={{ display: 'none', width: '100%' }}>
            <AnimatedSwitch
              onClick={changeProducts}
              titleBefore="Import products"
            />
          </Box>
          <motion.div
            animate={searchBar}
            sx={{ my: 1 }}
            px={2}
            css={{ display: 'block', minWidth: '200px' }}
          >
            <AnimatedSwitch
              onClick={changeSearch}
              activated={search}
              titleBefore={props.functionSearch}
            />
          </motion.div>
          <Box my={1} px={2} css={{ display: 'block', minWidth: '200px' }}>
            <AnimatedSwitch
              onClick={changeWishlist}
              titleBefore={props.functionWishlist}
            />
          </Box>
          <Box px={2} css={{ display: 'none' }}>
            <AnimatedSwitch onClick={changePayments} titleBefore="Payments" />
          </Box>
          <Box px={2} css={{ display: 'none' }}>
            <AnimatedSwitch onClick={changeShipping} titleBefore="Shipping" />
          </Box>
          <Box my={1} px={2} css={{ display: 'block', minWidth: '200px' }}>
            <AnimatedSwitch
              onClick={changeBanner}
              titleBefore={props.functionBanners}
            />
          </Box>
          <Box my={1} px={2} css={{ display: 'block', minWidth: '200px' }}>
            <AnimatedSwitch
              onClick={changeChat}
              titleBefore={props.functionChat}
            />
          </Box>
          <Box px={2} css={{ display: 'none' }}>
            <AnimatedSwitch
              onClick={changeDistribute}
              titleBefore="Distribute"
            />
          </Box>
        </Flex>
        <Box px={4} css={{ width: '100%' }}>
          <DeviceFrame>
            <EditorWrap
              windowText={
                props.functionUrl
                  ? props.functionUrl
                  : 'https://rocket-store.com'
              }
            >
              <Box bg="light300">
                <Box bg={theme ? 'dark' : 'black'}>
                  {chat && (
                    <Flex
                      sx={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '5%',
                        p: 3,
                        px: 4,
                        borderRadius: '8px',
                        bg: 'primary',
                        zIndex: 5,
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <BsChatSquareDots
                        sx={{ fontSize: '2rem', color: 'white' }}
                      />
                    </Flex>
                  )}
                  <Flex
                    px={3}
                    py={2}
                    bg={theme ? 'dark' : 'black'}
                    css={{ justifyContent: 'space-between' }}
                  >
                    <Flex css={{ width: '100%' }}>
                      <div
                        sx={{
                          width: '16%',
                          height: '1rem',
                          bg: theme ? 'dark400' : 'black',
                          borderRadius: '1rem',
                        }}
                      />
                      <div
                        sx={{
                          width: '8%',
                          height: '1rem',
                          mx: 2,
                          bg: theme ? 'dark400' : 'black',
                          borderRadius: '1rem',
                        }}
                      />
                    </Flex>
                    <div
                      sx={{
                        width: '16%',
                        height: '1rem',
                        bg: theme ? 'dark400' : 'black',
                        borderRadius: '1rem',
                      }}
                    ></div>
                  </Flex>

                  <Flex
                    px={3}
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    py={2}
                  >
                    {personalize && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          src={RSlogo}
                          alt="Merchants"
                          sx={{ height: 'auto', py: 3, px: 2 }}
                        />
                      </motion.div>
                    )}
                    <Box
                      p={3}
                      sx={{ width: '100%', display: ['none', null, 'block'] }}
                    >
                      <Flex>
                        <Flex
                          sx={{
                            fontSize: '1.5rem',
                            p: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            bg: 'primary',
                            color: 'white',
                            borderRadius: '4px',
                            height: '100%',
                          }}
                        >
                          <BiCheckShield />
                        </Flex>
                        {search && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            sx={{
                              width: '100%',
                            }}
                          >
                            <Input
                              defaultValue={
                                props.functionSearchbar
                                  ? props.functionSearchbar
                                  : 'Find your product'
                              }
                              px={3}
                              mx={2}
                              py={1}
                              bg="white"
                              sx={{
                                borderColor: 'white',
                              }}
                            />
                          </motion.div>
                        )}
                      </Flex>
                    </Box>

                    {wishlist && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        sx={{ color: 'white', px: 2 }}
                      >
                        <FiHeart />
                      </motion.div>
                    )}
                    <Text px={2} color="white">
                      <FiShoppingCart />
                    </Text>
                  </Flex>
                  {search && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      sx={{
                        width: '100%',
                        py: 1,
                        px: 3,
                        display: ['block', null, 'none'],
                      }}
                    >
                      <Input
                        defaultValue="Find your product"
                        py={1}
                        my={2}
                        bg="white"
                        sx={{ borderColor: 'white' }}
                      />
                    </motion.div>
                  )}
                  <Text
                    px={3}
                    color="white"
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      wordWrap: 'break-word',
                    }}
                  >
                    {personalize && (
                      <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        sx={{
                          display: 'flex',
                          fontWeight: '600',
                          fontSize: '1rem',
                          pb: 2,
                        }}
                      >
                        {props.items &&
                          props.items.map(item => (
                            <li sx={{ pr: 3 }} key={item._key}>
                              {item.title}
                            </li>
                          ))}
                        {!props.items && (
                          <React.Fragment>
                            <li>Home</li>
                            <li sx={{ px: 2 }}>Products</li>
                            <li sx={{ px: 2 }}>Blog</li>
                          </React.Fragment>
                        )}
                      </motion.ul>
                    )}
                    {payments && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Flex css={{ justifySelf: 'end' }}>
                          <Image
                            src={Klarna}
                            alt="Merchants"
                            sx={{
                              height: 'auto',
                              maxHeight: '3.5rem',
                              py: 3,
                              px: 1,
                              mx: 1,
                            }}
                          />
                          <Image
                            src={Swish}
                            alt="Merchants"
                            sx={{
                              height: '3.5rem',
                              width: 'auto',
                              maxHeight: '3.5rem',
                              py: 3,
                              px: 1,
                              mx: 1,
                            }}
                          />
                        </Flex>
                      </motion.div>
                    )}
                  </Text>
                </Box>

                {!personalize && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Flex p={3} css={{ justifyContent: 'space-between' }}>
                      <Box px={2} sx={{ width: '100%' }}>
                        <Box
                          variant={theme ? 'box.card' : ''}
                          sx={{
                            width: '100%',
                            height: '10rem',
                            bg: theme ? 'dark' : 'none',
                          }}
                        />
                      </Box>
                      <Box px={2} sx={{ width: '100%' }}>
                        <Box
                          variant={theme ? 'box.card' : ''}
                          sx={{
                            width: '100%',
                            height: '10rem',
                            bg: theme ? 'dark' : 'none',
                          }}
                        />
                      </Box>
                    </Flex>
                  </motion.div>
                )}

                {banner && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Flex p={3} css={{ justifyContent: 'space-between' }}>
                      <Box px={2} sx={{ width: '100%' }}>
                        <Image
                          src={BannerFirst}
                          alt="Merchants"
                          sx={{
                            display: 'block',
                            height: 'auto',
                            width: '100%',
                            borderRadius: '1rem',
                          }}
                        />
                      </Box>
                      <Box px={2} sx={{ width: '100%' }}>
                        <Image
                          src={BannerSecond}
                          alt="Merchants"
                          sx={{
                            display: 'block',
                            height: 'auto',
                            width: '100%',
                            borderRadius: '1rem',
                          }}
                        />
                      </Box>
                    </Flex>
                  </motion.div>
                )}

                {products && allProducts}
              </Box>
              <Flex
                p={3}
                bg={theme ? 'dark' : 'black'}
                css={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomLeftRadius: '1rem',
                  borderBottomRightRadius: '1rem',
                }}
              >
                <div
                  sx={{
                    width: '16%',
                    height: '1rem',
                    bg: theme ? 'dark400' : 'black',
                    borderRadius: '1rem',
                  }}
                />
                {!shipping && (
                  <div
                    sx={{
                      width: '16%',
                      height: '1rem',
                      bg: theme ? 'dark400' : 'black',
                      borderRadius: '1rem',
                    }}
                  />
                )}
                {shipping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={{ display: 'flex' }}
                  >
                    <Image
                      src={dhl}
                      alt="Merchants"
                      sx={{
                        height: '1rem',
                        px: 2,
                      }}
                    />
                    <Image
                      src={Postnord}
                      alt="Merchants"
                      sx={{
                        height: '1rem',
                        px: 2,
                      }}
                    />
                    <Image
                      src={Schenker}
                      alt="Merchants"
                      sx={{
                        height: '1rem',
                        px: 2,
                      }}
                    />
                  </motion.div>
                )}
              </Flex>
            </EditorWrap>
          </DeviceFrame>
        </Box>
      </Box>
    </Container>
  )
}
