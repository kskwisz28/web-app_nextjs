
import { Box, jsx } from 'theme-ui'

import InfoSection from '../components/infoWithImage'
import CarouselChildren from '../components/carouselChildren'

export default function CustomerStories(props) {
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
        slideTimer={props.slideTimer ? props.slideTimer : 15000}
      >
        {props.rows &&
          props.rows.map(story => (
            <Box
              key={story._key}
              bg={
                story.info && story.info.colorBg ? story.info.colorBg.hex : ''
              }
              className={'keen-slider__slide'}
              py={5}
            >
              <InfoSection {...story}></InfoSection>
            </Box>
          ))}
      </CarouselChildren>
    </Box>
  )
}
