import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


import { jsx } from 'theme-ui'

import styled from '@emotion/styled'

const Lazy = styled.div`
  .lazy__slide {
    padding: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .gatsby-image-wrapper {
      overflow: visible;
    }
  }
`

const CarouselLogos = props => {
  // eslint-disable-next-line
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const data = useStaticQuery(graphql`
    {
      LogoBaby: file(relativePath: { eq: "logo-babylove.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, layout: FIXED)
        }
      }
      LogoForm: file(relativePath: { eq: "logo-form.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, layout: FIXED)
        }
      }
      LogoGlas: file(relativePath: { eq: "logo-glas.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, layout: FIXED)
        }
      }
      LogoMomKids: file(relativePath: { eq: "logo-momkids.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, layout: FIXED)
        }
      }
      LogoPrylster: file(relativePath: { eq: "logo-prylster.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, layout: FIXED)
        }
      }
      LogoShoelace: file(relativePath: { eq: "logo-shoelace.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, layout: FIXED)
        }
      }
      LogoVinylahem: file(relativePath: { eq: "logo-vinylahem.png" }) {
        childImageSharp {
          gatsbyImageData(width: 150, layout: FIXED)
        }
      }
    }
  `)

  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    afterChange(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    slidesPerView: 2,
    breakpoints: {
      '(min-width: 540px) and (max-width: 735px)': {
        slidesPerView: 3,
      },
      '(min-width: 735px) and (max-width: 1070px)': {
        slidesPerView: 4,
      },
      '(min-width: 1070px)': {
        slidesPerView: 7,
      },
    },
    initial: 1,
    mode: 'free',
    spacing: 2,
    loop: true,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true)
    })
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 1500)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <Lazy
      sx={{
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide lazy__slide">
          <GatsbyImage
            image={data.LogoBaby.childImageSharp.gatsbyImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <GatsbyImage
            image={data.LogoForm.childImageSharp.gatsbyImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <GatsbyImage
            image={data.LogoGlas.childImageSharp.gatsbyImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <GatsbyImage
            image={data.LogoMomKids.childImageSharp.gatsbyImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <GatsbyImage
            image={data.LogoPrylster.childImageSharp.gatsbyImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <GatsbyImage
            image={data.LogoShoelace.childImageSharp.gatsbyImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <GatsbyImage
            image={data.LogoVinylahem.childImageSharp.gatsbyImageData}
            // Add alt
            alt=""
          />
        </div>
      </div>
    </Lazy>
  )
}

export default CarouselLogos
