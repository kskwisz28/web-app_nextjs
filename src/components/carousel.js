import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useKeenSlider } from 'keen-slider/react'

import { Image, Box, jsx } from 'theme-ui'

import EditorWrap from './editorWrap'
import styled from '@emotion/styled'

const CarouselWrapper = styled.div`
  .keen-slider {
    overflow: visible;
    overflow-x: clip;

    & > .keen-slider__slide {
      border-radius: 15px;
      box-shadow: 20px 0 30px rgb(0 0 0 / 12%);
    }
  }
`

const Carousel = props => {
  const images = props.slideContent
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    afterChange(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    slidesPerView: props.slidesMobile ? props.slidesMobile : 1,
    breakpoints: {
      '(min-width: 735px) and (max-width: 1070px)': {
        slidesPerView: props.slidesTablet ? props.slidesTablet : 1,
      },
      '(min-width: 1070px)': {
        slidesPerView: props.slidesDesktop ? props.slidesDesktop : 1,
      },
    },
    initial: 0,
    mode: 'free',
    spacing: 50,
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
    }, 2500)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <Box
      sx={{
        py: [5, null, null, null, 6],
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <CarouselWrapper>
        {props.slideContent && (
          <div ref={sliderRef} className="keen-slider">
            {images.map((src, idx) => (
              <Box
                key={idx}
                className={
                  'keen-slider__slide' + (currentSlide === idx ? ' active' : '')
                }
                p={4}
              >
                <Image
                  src={src}
                  sx={{
                    height: '50px',
                    textAlign: 'center',
                    mx: 'auto',
                    display: 'block',
                  }}
                  alt=""
                />
              </Box>
            ))}
          </div>
        )}
        {props.gatsbyImages && (
          <div ref={sliderRef} className="keen-slider">
            {props.gatsbyImages.map((src, idx) => (
              <Box
                key={idx}
                className={
                  'keen-slider__slide' + (currentSlide === idx ? ' active' : '')
                }
                sx={{
                  boxShadow: props.addShadow ? 'medium' : '',
                }}
              >
                <EditorWrap windowText={src.windowText}>
                  <GatsbyImage
                    image={src.img}
                    css={{ width: '100%' }}
                    alt={src.alt}
                  ></GatsbyImage>
                </EditorWrap>
              </Box>
            ))}
          </div>
        )}
      </CarouselWrapper>
    </Box>
  )
}

export default Carousel
