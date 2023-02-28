import {Box, Button} from 'theme-ui'
import {HiArrowRight} from 'react-icons/hi'
import LinkCheck from './linkCheck'

export default function LinkWithArrow(props) {
  return (
    <Box
      sx={{
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <LinkCheck to={props?.url} effect="fade" length={0.5}>
        <Button
          variant="link"
          sx={{
            fontWeight: '400',
            color: props.color ? props.color.hex : 'raspberry',
            display: 'flex',
            alignItems: 'center',
            px: props.noSpace ? 0 : 2,
            mx: props.noSpace ? 0 : 'auto',
            justifyContent: props.justifyLeft ? 'start' : 'center',
          }}
          className={props.className}
        >
          {props.title} {props.title && <HiArrowRight sx={{ml: 1}}/>}
        </Button>
      </LinkCheck>
    </Box>
  )
}
