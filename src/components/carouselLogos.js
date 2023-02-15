import React from 'react'
import {useKeenSlider} from 'keen-slider/react'


import styled from '@emotion/styled'
import Image from "next/image";

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
          ImageData(width: 100, layout: FIXED)
        }
      }
      LogoForm: file(relativePath: { eq: "logo-form.png" }) {
        childImageSharp {
          ImageData(width: 100, layout: FIXED)
        }
      }
      LogoGlas: file(relativePath: { eq: "logo-glas.png" }) {
        childImageSharp {
          ImageData(width: 100, layout: FIXED)
        }
      }
      LogoMomKids: file(relativePath: { eq: "logo-momkids.png" }) {
        childImageSharp {
          ImageData(width: 100, layout: FIXED)
        }
      }
      LogoPrylster: file(relativePath: { eq: "logo-prylster.png" }) {
        childImageSharp {
          ImageData(width: 100, layout: FIXED)
        }
      }
      LogoShoelace: file(relativePath: { eq: "logo-shoelace.png" }) {
        childImageSharp {
          ImageData(width: 100, layout: FIXED)
        }
      }
      LogoVinylahem: file(relativePath: { eq: "logo-vinylahem.png" }) {
        childImageSharp {
          ImageData(width: 150, layout: FIXED)
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
          <Image
            image={data.LogoBaby.childImageSharp.ImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <Image
            image={data.LogoForm.childImageSharp.ImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <Image
            image={data.LogoGlas.childImageSharp.ImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <Image
            image={data.LogoMomKids.childImageSharp.ImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <Image
            image={data.LogoPrylster.childImageSharp.ImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <Image
            image={data.LogoShoelace.childImageSharp.ImageData}
            // Add alt
            alt=""
          />
        </div>
        <div className="keen-slider__slide lazy__slide">
          <Image
            image={data.LogoVinylahem.childImageSharp.ImageData}
            // Add alt
            alt=""
          />
        </div>
      </div>
    </Lazy>
  )
}

export default CarouselLogos
