import React from 'react'
import { useKeenSlider } from 'keen-slider/react'


import { jsx, Box, Container } from 'theme-ui'
import SingleImage from './singleImage'

import styled from '@emotion/styled'

const Lazy = styled.div`
  .lazy__slide {
    padding: 1rem;
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

  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    afterChange(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    slidesPerView: 2,
    breakpoints: {
      '(min-width: 540px) and (max-width: 735px)': {
        slidesPerView: 2,
      },
      '(min-width: 735px) and (max-width: 1070px)': {
        slidesPerView: 3,
      },
      '(min-width: 1070px)': {
        slidesPerView: 4,
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
    }, 2500)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <Box
      sx={{
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Container>
        <Lazy>
          <div ref={sliderRef} className="keen-slider">
            {props.rows &&
              props.rows.map(story => (
                <Box
                  key={story._key}
                  className="keen-slider__slide lazy__slide"
                  sx={{
                    width: '100%',
                    p: 1,
                  }}
                >
                  <Box
                    p={3}
                    sx={{
                      borderRadius: '8px',
                      width: '100%',
                      boxShadow: props.shadow
                        ? '0px 0px 2px 0px rgba(0, 0, 0, 0.06), 0px 8px 24px 0px rgba(0, 0, 0, 0.03)'
                        : '0',
                    }}
                  >
                    <SingleImage
                      shadowWrapper
                      wrapperPaddingX={4}
                      wrapperPaddingY={4}
                      rounded="16px"
                      noLazyLoad
                      image={
                        story.image && story.image.image && story.image.image
                      }
                    />
                  </Box>
                </Box>
              ))}
          </div>
        </Lazy>
      </Container>
    </Box>
  )
}

export default CarouselLogos
