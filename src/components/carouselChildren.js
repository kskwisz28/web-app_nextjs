import React from 'react'
import {useKeenSlider} from 'keen-slider/react'

import {Box} from 'theme-ui'

export default function CarouselChildren(props) {
  // eslint-disable-next-line
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [sliderRef, instanceRef] = useKeenSlider({
    afterChange(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    slidesPerView: 1,
    breakpoints: {
      '(min-width: 1070px)': {
        slidesPerView: props.slidesPerView,
      },
    },
    initial: 0,
    mode: 'free-snap',
    spacing: 1,
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
    timer.current = setInterval(
      () => {
        if (!pause && instanceRef.current && instanceRef.current.slides.length > 0) {
          instanceRef.current.next()
        }
      },
      props.slideTimer ? props.slideTimer : 5000
    )
    return () => {
      clearInterval(timer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pause, instanceRef])

  return (
    <Box
      sx={{
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <div ref={sliderRef} className="keen-slider">
        {props.children}
      </div>
    </Box>
  )
}
