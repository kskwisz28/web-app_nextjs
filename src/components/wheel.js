import React from 'react'
import { useKeenSlider } from 'keen-slider/react'

import styled from '@emotion/styled'

const Slider = styled.div`
  display: block;
  color: #fff;
  height: 100%;
  overflow: visible;
  width: 100%;

  .wheel--perspective-right .wheel__inner {
    perspective-origin: calc(50% + 100px) 50%;
    transform: translateX(10px);
    -webkit-transform: translateX(10px);
  }
  .wheel--perspective-left .wheel__inner {
    perspective-origin: calc(50% - 100px) 50%;
    transform: translateX(-10px);
    -webkit-transform: translateX(-10px);
  }

  .wheel__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
    transform-style: preserve-3d;
    height: 25%;
    width: 100%;
  }

  .wheel__slides {
    height: 100%;
    position: relative;
    width: 100%;
  }

  .wheel__shadow-top,
  .wheel__shadow-bottom {
    background: linear-gradient(
      to bottom,
      rgba(54, 47, 74, 0.9) 0%,
      rgba(54, 47, 74, 0.5) 100%
    );
    left: 0;
    height: calc(42% + 2px);
    width: 100%;
    position: relative;
    margin-top: -2px;
    z-index: 1;
  }

  .wheel__shadow-bottom {
    background: linear-gradient(
      to bottom,
      rgba(54, 47, 74, 0.5) 0%,
      rgba(54, 47, 74, 0.9) 100%
    );
    margin-top: 2px;
    border-bottom: none;
  }

  .wheel__label {
    font-weight: 500;
    font-size: 15px;
    line-height: 1;
    margin-top: 1px;
    margin-left: 5px;
  }

  .wheel__slide {
    align-items: center;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    display: flex;
    font-size: 20px;
    font-weight: 400;
    height: 100%;
    width: 100%;
    position: absolute;
    justify-content: flex-end;
  }
`

export default function Wheel(props) {
  const perspective = props.perspective || 'center'
  const wheelSize = 20
  const migration = props.from
  const slides = migration && migration.length
  const slideDegree = 360 / wheelSize
  const slidesPerView = props.loop ? 9 : 1
  const [sliderState, setSliderState] = React.useState(null)
  const [sliderRef, slider] = useKeenSlider({
    centered: props.loop,
    vertical: true,
    friction: 0.0025,
    initial: props.initIdx || 0,
    loop: props.loop,
    dragSpeed: (val, instance) => {
      const height = instance.details().widthOrHeight
      return (
        val *
        (height /
          ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) /
          slidesPerView)
      )
    },
    move: s => {
      setSliderState(s.details())
    },
    rubberband: !props.loop,
    mode: 'free-snap',
    slides,
    slidesPerView,
  })

  const [radius, setRadius] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

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

  React.useEffect(() => {
    if (slider) setRadius(slider.details().widthOrHeight / 2)
  }, [slider])

  function slideValues() {
    if (!sliderState) return []
    const offset = props.loop ? 1 / 2 - 1 / slidesPerView / 2 : 0

    const values = []

    for (let i = 0; i < slides; i++) {
      const distance = sliderState
        ? (sliderState.positions[i].distance - offset) * slidesPerView
        : 0
      const rotate =
        Math.abs(distance) > wheelSize / 2
          ? 180
          : distance * (360 / wheelSize) * -1
      const style = {
        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
      }

      let migratingFrom = migration[i]

      const value = props.setValue
        ? props.setValue(i, sliderState.absoluteSlide + Math.round(distance))
        : i
      values.push({ style, value, migratingFrom })
    }
    return values
  }

  return (
    <Slider
      className={'wheel keen-slider wheel--perspective-' + perspective}
      ref={sliderRef}
    >
      <div
        className="wheel__shadow-top"
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
      <div className="wheel__inner">
        <div className="wheel__slides" style={{ width: props.width + 'px' }}>
          {slideValues().map(({ style, migratingFrom }, idx) => (
            <div className="wheel__slide" style={style} key={idx}>
              <span>{migratingFrom}</span>
            </div>
          ))}
        </div>
        {props.label && (
          <div
            className="wheel__label"
            style={{
              transform: `translateZ(${radius}px)`,
              WebkitTransform: `translateZ(${radius}px)`,
            }}
          >
            {props.label}
          </div>
        )}
      </div>
      <div
        className="wheel__shadow-bottom"
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
    </Slider>
  )
}
