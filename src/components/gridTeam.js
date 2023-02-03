import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Flex } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from './container'
import InfoText from './infoText'
import { FaHeart } from 'react-icons/fa'

export default function Employees(props) {
  const data = useStaticQuery(graphql`
    {
      Adrian: file(relativePath: { eq: "Adrian.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
        }
      }
      Daniel: file(relativePath: { eq: "Daniel.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
        }
      }
      Jonna: file(relativePath: { eq: "Jonna.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
        }
      }
      Adam: file(relativePath: { eq: "Adam.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
        }
      }
      Azddin: file(relativePath: { eq: "Azddin.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
        }
      }
      Moris: file(relativePath: { eq: "qb-moris.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
        }
      }
      Victor: file(relativePath: { eq: "qb-victor.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
        }
      }
      Linnea: file(relativePath: { eq: "qb-linnea.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
        }
      }
      Oliver: file(relativePath: { eq: "Oliver.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED)
        }
      }
      Peter: file(relativePath: { eq: "Peter.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED)
        }
      }
      Ron: file(relativePath: { eq: "Ron.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED)
        }
      }
      Simon: file(relativePath: { eq: "Simon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED)
        }
      }
    }
  `)

  const Employees = [
    data.Adrian.childImageSharp.gatsbyImageData,
    data.Daniel.childImageSharp.gatsbyImageData,
    data.Jonna.childImageSharp.gatsbyImageData,
    data.Adam.childImageSharp.gatsbyImageData,
    data.Azddin.childImageSharp.gatsbyImageData,
    data.Moris.childImageSharp.gatsbyImageData,
    data.Oliver.childImageSharp.gatsbyImageData,
    data.Peter.childImageSharp.gatsbyImageData,
    data.Ron.childImageSharp.gatsbyImageData,
    data.Simon.childImageSharp.gatsbyImageData,
    data.Linnea.childImageSharp.gatsbyImageData,
    data.Victor.childImageSharp.gatsbyImageData,
  ]

  let shuffledEmployees = Employees.map(a => ({
    sort: Math.random(),
    value: a,
  }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)

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
        <Flex p={1} sx={{ alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <Box sx={{ width: ['100%', null, '70%'] }}>
            <InfoText topIcon={<FaHeart sx={{ pr: 1 }} />} {...props.info}>
              {props.children}
            </InfoText>
          </Box>
          <Flex
            sx={{
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              width: ['100%', null, '30%'],
            }}
          >
            <Box p={1} sx={{ width: '40%' }}>
              <GatsbyImage
                image={shuffledEmployees[0]}
                alt="Team member Quickbutik"
                css={{ borderRadius: '8px' }}
              />
            </Box>
            <Box p={1} sx={{ width: '60%' }}>
              <GatsbyImage
                image={shuffledEmployees[1]}
                alt="Team member Quickbutik"
                css={{ borderRadius: '8px' }}
              />
            </Box>
          </Flex>
        </Flex>
        <Flex pt={3} sx={{ alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Box p={1} sx={{ width: '22%' }}>
            <GatsbyImage
              image={shuffledEmployees[2]}
              alt="Team member Quickbutik"
              css={{ borderRadius: '8px' }}
            />
          </Box>
          <Box p={1} sx={{ width: '28%' }}>
            <GatsbyImage
              image={shuffledEmployees[3]}
              alt="Team member Quickbutik"
              css={{ borderRadius: '8px' }}
            />
          </Box>
          <Box p={1} sx={{ width: '28%' }}>
            <GatsbyImage
              image={shuffledEmployees[4]}
              alt="Team member Quickbutik"
              css={{ borderRadius: '8px' }}
            />
          </Box>
          <Box p={1} sx={{ width: '22%' }}>
            <GatsbyImage
              image={shuffledEmployees[5]}
              alt="Team member Quickbutik"
              css={{ borderRadius: '8px' }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
