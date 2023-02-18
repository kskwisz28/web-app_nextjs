import React from 'react'
import {useKeenSlider} from 'keen-slider/react'

import {Box, jsx} from 'theme-ui'
import Image from 'next/image'

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

  const [sliderRef, instanceRef] = useKeenSlider({
    afterChange(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    slides: {
      perView: props.slidesMobile ? props.slidesMobile : 1,
      spacing: 50,
    },
    breakpoints: {
      '(min-width: 735px) and (max-width: 1070px)': {
        slides: {
          perView: props.slidesTablet ? props.slidesTablet : 1,
          spacing: 50,
        }
      },
      '(min-width: 1070px)': {
        slides: {
          perView: props.slidesDesktop ? props.slidesDesktop : 1,
          spacing: 50,
        },
      },
    },
    initial: 0,
    mode: 'free',
    loop: true,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.addEventListener('mouseover', () => {
        setPause(true)
      })
      sliderRef.current.addEventListener('mouseout', () => {
        setPause(false)
      })
    }
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && instanceRef.current && instanceRef.current.slides.length > 0) {
        instanceRef.current.next()
      }
    }, 2500)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, instanceRef])

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
                  <Image
                    src={src.img}
                    style={{width: '100%', height: 'auto'}}
                    alt={src.alt}
                    {...src.props}
                  ></Image>
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
