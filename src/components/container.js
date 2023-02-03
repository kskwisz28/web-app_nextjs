import {Box} from 'theme-ui'

const Container = props => (
  <Box
    px={props.noPadding ? ['2', null, null, '0'] : ['3', null, null, '4']}
    {...props}
    sx={{
      ...props.sx,
      maxWidth: props.containersize ? props.containersize : 'container',
      mx: 'auto',
    }}
  />
)

export default Container
