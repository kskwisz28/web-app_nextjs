
import { jsx, Box, Text, Button } from 'theme-ui'
import LinkCheck from '../components/linkCheck'

export default function button(props) {
  return (
    <Box
      sx={{
        my: 0,
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      {props.buttonText && (
        <LinkCheck to={props.buttonUrl} effect="slideLeft" length={0.5}>
          <Button
            variant="buttons.cta"
            sx={{
              my: 0,
              display: 'flex',
              alignItems: 'center',
              mx: props.centered ? 'auto' : '',
            }}
          >
            {props.buttonText}
          </Button>
        </LinkCheck>
      )}
      {props.subtitle && (
        <Text
          color="dark300"
          py={3}
          css={{
            textAlign: 'center',
            fontSize: '0.9rem !important',
          }}
        >
          {props.subtitle}
        </Text>
      )}
      {props.children}
    </Box>
  )
}
