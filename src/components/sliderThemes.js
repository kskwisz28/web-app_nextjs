import {Box, Flex} from 'theme-ui'
import Carousel from '../components/carousel'
import InfoText from '../components/infoText'
import LinkWithArrow from './linkWithArrow'

import MockupNova from "@/images/mockup-nova.jpg"
import MockupOrion from "@/images/mockup-orion.jpg"
import MockupOrionWide from "@/images/mockup-orionwide.jpg"
import MockupSwift from "@/images/mockup-swift.jpg"
import MockupCanvas from "@/images/mockup-canvas.jpg"
import MockupDefined from "@/images/mockup-defined.jpg"

export default function SliderThemes(props) {
  /*
  const data = useStaticQuery(graphql`
    {
      Nova: file(relativePath: { eq: "mockup-nova.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
      Orion: file(relativePath: { eq: "mockup-orion.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
      OrionWide: file(relativePath: { eq: "mockup-orionwide.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
      Swift: file(relativePath: { eq: "mockup-swift.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
      Canvas: file(relativePath: { eq: "mockup-canvas.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
      Defined: file(relativePath: { eq: "mockup-defined.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
    }
  `)

  // TODO: Use it
  const gatsbyImages = [
    {
      img: data.Nova.childImageSharp.gatsbyImageData,
      alt: 'Design theme Nova',
      windowText: 'https://nova-demo.quickbutik.com/',
    },
    {
      img: data.Orion.childImageSharp.gatsbyImageData,
      alt: 'Design theme Orion',
      windowText: 'https://orion-demo.quickbutik.com/',
    },
    {
      img: data.OrionWide.childImageSharp.gatsbyImageData,
      alt: 'Design theme Orion Wide',
      windowText: 'https://orion-demo.quickbutik.com/?_qbtid=57221',
    },
    {
      img: data.Swift.childImageSharp.gatsbyImageData,
      alt: 'Design theme Swift Wide',
      windowText: 'https://swift-demo.quickbutik.com/',
    },
    {
      img: data.Canvas.childImageSharp.gatsbyImageData,
      alt: 'Design theme Canvas',
      windowText: 'https://nova-canvas-demo.quickbutik.com/',
    },
    {
      img: data.Defined.childImageSharp.gatsbyImageData,
      alt: 'Design theme Defined',
      windowText: 'https://nova-defined-demo.quickbutik.com/',
    },
  ]
   */

  const gatsbyImages = [
    {
      img: MockupNova,
      alt: 'Design theme Nova',
      windowText: 'https://nova-demo.quickbutik.com/',
      props: {
        width: 900,
        placeholder: 'blur',
      }
    },
    {
      img: MockupOrion,
      alt: 'Design theme Orion',
      windowText: 'https://orion-demo.quickbutik.com/',
      props: {
        width: 900,
        placeholder: 'blur',
      }
    },
    {
      img: MockupOrionWide,
      alt: 'Design theme Orion Wide',
      windowText: 'https://orion-demo.quickbutik.com/?_qbtid=57221',
      props: {
        width: 900,
        placeholder: 'blur',
      }
    },
    {
      img: MockupSwift,
      alt: 'Design theme Swift Wide',
      windowText: 'https://swift-demo.quickbutik.com/',
      props: {
        width: 900,
        placeholder: 'blur',
      }
    },
    {
      img: MockupCanvas,
      alt: 'Design theme Canvas',
      windowText: 'https://nova-canvas-demo.quickbutik.com/',
      props: {
        width: 900,
        placeholder: 'blur',
      }
    },
    {
      img: MockupDefined,
      alt: 'Design theme Defined',
      windowText: 'https://nova-defined-demo.quickbutik.com/',
      props: {
        width: 900,
        placeholder: 'blur',
      }
    },
  ]

  return (
    <Flex
      bg={props.info && props.info.colorBg && props.info.colorBg.hex}
      sx={{
        alignItems: 'center',
        '@media screen and (max-width: 1280px)': {
          flexDirection: 'column',
        },
        py: [5, null, null, null, 6],
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Box
        mt={0}
        pt={0}
        sx={{
          width: [null, null, null, null, null, '50%', '40%'],
        }}
        px={5}
      >
        <InfoText
          centered={props.info && props.info.centered}
          {...props.info}
        />
        <LinkWithArrow alignStart {...props.linkWithArrow} />
      </Box>

      <Box sx={{width: '100%'}}>
        <Carousel
          addShadow
          slidesDesktop={2.2}
          slidesTablet={2.2}
          slidesMobile={1.2}
          gatsbyImages={gatsbyImages}
        />
      </Box>
    </Flex>
  )
}
