import {Box} from 'theme-ui'

import CarouselChildren from '../components/carouselChildren'
import StartHero from '../components/startHero'

export default function SliderGeneral(props) {
  return (
    <Box
      sx={{
        py: [5, null, null, null, 6],
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <CarouselChildren
        slidesPerView={1}
        slideTimer={props.slideTimer ? props.slideTimer : 5000}
      >
        {props?.rows.map(story => (
          <Box
            key={story._key}
            className={'keen-slider__slide'}
          >
            <StartHero {...story} />
          </Box>
        ))}
      </CarouselChildren>
    </Box>
  )
}
