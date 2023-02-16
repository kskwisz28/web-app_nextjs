import {Box} from 'theme-ui'

const Container = ({noPadding, containersize, ...rest}) => (
  <Box
    px={noPadding ? ['2', null, null, '0'] : ['3', null, null, '4']}
    {...rest}
    sx={{
      ...rest.sx,
      maxWidth: containersize ? containersize : 'container',
      mx: 'auto',
    }}
  />
)

export default Container
