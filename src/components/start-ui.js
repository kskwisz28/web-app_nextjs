import React from 'react'


import { jsx, Flex, Image, Box, Text } from 'theme-ui'

import { FiShoppingCart, FiHeart, FiMenu } from 'react-icons/fi'

import RSlogo from '../images/logo-rs.svg'

import ProductTshirt from '../images/product-tshirt.svg'
import ProductPants from '../images/shop-product-pants.svg'
import ProductDress from '../images/shop-product-dress.svg'
import BannerSecond from '../images/5update.png'

export default function StartUI(props) {
  // const animation = useAnimation()

  // async function sequence() {
  //   await animation.start({ rotate: -90 })
  //   await animation.start({ scale: 1.5 })
  //   await animation.start({ rotate: 0 })
  //   animation.start({ scale: 1 })
  // }

  const allProducts = (
    <Flex
      prefix={4}
      css={{
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
      p={3}
    >
      <Box px={2} sx={{ width: '100%', height: '100%' }}>
        <Flex
          variant="box.card"
          sx={{
            width: '100%',
            position: 'relative',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100%',
            justifyContent: 'center',
          }}
          p={[2, null, 4]}
        >
          <Image
            src={ProductTshirt}
            alt="Product t-shirt"
            sx={{
              height: 'auto',
              maxHeight: '120px',
              width: ['100%', null, null, '50%'],
              p: 2,
            }}
          />
          <Box css={{ width: ['100%', null, null, '50%'] }}>
            <div
              sx={{
                p: 2,
                my: 1,
                height: '1rem',
                mx: 'auto',
                bg: 'dark100',
                borderRadius: '1rem',
              }}
            />
            <div
              sx={{
                p: 2,
                my: 1,
                height: '1rem',
                mx: 'auto',
                bg: 'dark100',
                borderRadius: '1rem',
                display: ['none', null, 'block'],
              }}
            />
          </Box>
        </Flex>
      </Box>

      <Box px={2} sx={{ width: '100%', height: '100%' }}>
        <Flex
          variant="box.card"
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
          p={[2, null, 4]}
        >
          <Image
            src={ProductPants}
            alt="Product Pants"
            sx={{
              height: 'auto',
              maxHeight: '120px',
              width: ['100%', null, null, '50%'],
              p: 2,
            }}
          />
          <Box css={{ width: ['100%', null, null, '50%'] }}>
            <div
              sx={{
                p: 2,
                my: 1,
                height: '1rem',
                mx: 'auto',
                bg: 'dark100',
                borderRadius: '1rem',
              }}
            />
            <div
              sx={{
                p: 2,
                my: 1,
                height: '1rem',
                mx: 'auto',
                bg: 'dark100',
                borderRadius: '1rem',
                display: ['none', null, 'block'],
              }}
            />
          </Box>
        </Flex>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: ['none', null, null, 'block'],
        }}
      >
        <Box px={2} sx={{ width: '100%' }}>
          <Flex
            variant="box.card"
            sx={{ width: '100%', position: 'relative', alignItems: 'center' }}
            p={[2, null, 4]}
          >
            <Image
              src={ProductDress}
              alt="Product Dress"
              sx={{ height: 'auto', maxHeight: '120px', width: '100%', p: 2 }}
            />
            <Box css={{ width: '80%' }}>
              <div
                sx={{
                  p: 2,
                  my: 1,
                  height: '1rem',
                  mx: 'auto',
                  bg: 'dark100',
                  borderRadius: '1rem',
                }}
              />
              <div
                sx={{
                  p: 2,
                  my: 1,
                  height: '1rem',
                  mx: 'auto',
                  bg: 'dark100',
                  borderRadius: '1rem',
                  display: ['none', null, 'block'],
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )

  return (
    <Box bg="light300" css={{ borderRadius: '1rem' }}>
      <Box bg={'dark'}>
        <Flex
          px={3}
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          py={2}
        >
          <Text px={2} color="white">
            <FiMenu
              sx={{
                color: 'white',
                display: ['block', null, null, 'none'],
              }}
            />
          </Text>
          <Image
            src={RSlogo}
            alt="Raketshoppen Logo"
            sx={{ height: 'auto', p: 2 }}
          />
          <Flex
            p={3}
            sx={{
              width: '100%',
              display: ['none', null, null, 'flex'],
            }}
          >
            <ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              sx={{
                px: 2,
                display: 'flex',
                color: 'white',
                borderColor: 'primary',
                ':hover': {
                  color: 'primary',
                  transition: 'all 0.3s linear',
                },
              }}
            >
              {props.items &&
                props.items.map(item => (
                  <li sx={{ px: 2 }} key={item._key}>
                    {item.title}
                  </li>
                ))}
              {!props.items && (
                <React.Fragment>
                  <li sx={{ px: 2, color: 'white' }}>Produkter</li>
                  <li sx={{ px: 2, color: 'white' }}>Blogg</li>
                  <li sx={{ px: 2, color: 'white' }}>Köpvillkor</li>
                  <li sx={{ px: 2, color: 'white' }}>Kontakta oss</li>
                </React.Fragment>
              )}
            </ul>
          </Flex>
          <Flex px={[0, null, null, 3]}>
            <Box
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              sx={{ color: 'white', px: 1 }}
            >
              <FiHeart sx={{ mr: 2 }} />
            </Box>
            <Text px={1} color="white">
              <FiShoppingCart />
            </Text>
          </Flex>
        </Flex>
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
        />
      </Box>
      <Flex
        p={3}
        css={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            width: ['100%', null, null, '40%'],
            display: ['none', null, null, 'block'],
          }}
        >
          <div
            sx={{
              p: 2,
              my: 2,
              width: '60%',
              height: '1rem',
              mx: 'auto',
              bg: 'dark100',
              borderRadius: '1rem',
            }}
          />
          <div
            sx={{
              p: 2,
              my: 2,
              width: '50%',
              height: '1rem',
              mx: 'auto',
              bg: 'dark100',
              borderRadius: '1rem',
            }}
          />
          <div
            sx={{
              p: 2,
              my: 3,
              width: '50%',
              height: '2rem',
              mx: 'auto',
              bg: 'primary',
              borderRadius: '8px',
            }}
          />
        </Box>
        <Box sx={{ width: ['100%', null, null, '60%'] }}>
          <Image
            src={props.firstImage ? props.firstImage.asset?.url : BannerSecond}
            alt="Shopping bags"
            sx={{
              display: 'block',
              height: '100%',
              width: '100%',
              marginBottom: '-2rem',
              borderRadius: '1rem',
            }}
          />
        </Box>
      </Flex>
      {allProducts}
    </Box>
  )
}
