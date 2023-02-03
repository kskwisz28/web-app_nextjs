import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { useKeenSlider } from 'keen-slider/react'
import { jsx, Image, Box, Text, Divider } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'


import InfoText from '../components/infoText'
import styled from '@emotion/styled'
import LinkCheck from '../components/linkCheck'
import Container from './container'

import mediaqueries from '../styles/media'

// import EditorWrap from './editorWrap'

import { Flex } from 'theme-ui'
import { FaArrowRight } from 'react-icons/fa'
import Connect from '../images/journey-connect.svg'
import Customers from '../images/2-reach-customers.svg'
import Sell from '../images/3-sell-everywhere.svg'

const Lazy = styled.div`
  position: relative;

  .step {
    margin: 4rem auto;
  }
`

export default props => {
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

  return (
    <Lazy>
      <Container>
        <div className={'step'}>
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
              description="Choose one of our predefined designs. Customize it however you like with our easy-to-use interface."
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

        <div className={'step'}>
          <Flex
            bg="white"
            variant="box.primary"
            className="slide-content"
            sx={{ alignItems: 'center', height: '100%' }}
          >
            <InfoText
              imageFirst
              colorTop={{ hex: 'red' }}
              heading="h3"
              topLine="STEP 2"
              bgTop={{ hex: 'dark' }}
              colorTop={{ hex: 'white' }}
              headline="Pick payment & shipping"
              description="With just a few clicks you will get your preferred payment and shipping methods integrated into your shop."
            ></InfoText>
            <Image
              src={Connect}
              alt="Merchants"
              sx={{ height: 'auto', width: '100%', px: 4 }}
            />
          </Flex>
        </div>

        <div className={'step'}>
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

        <div className={'step'}>
          <Flex
            bg="white"
            variant="box.primary"
            className="slide-content"
            sx={{ alignItems: 'center', height: '100%' }}
          >
            <InfoText
              colorTop={{ hex: 'red' }}
              heading="h3"
              topLine="STEP 4"
              bgTop={{ hex: 'dark' }}
              colorTop={{ hex: 'white' }}
              headline="Connect with customers"
              description="Grow your brand through seamless integrations with newsletters, social media-platforms and search engines such as Facebook, Instagram and Google."
            ></InfoText>
            <Image
              src={Customers}
              alt="Merchants"
              sx={{ height: 'auto', width: '100%', px: 4 }}
            />
          </Flex>
        </div>
      </Container>
    </Lazy>
  )
}
