
import { Box, Button, jsx } from 'theme-ui'
import InfoText from './infoText'
import LinkCheck from './linkCheck'

import Container from './container'

export default function CTABoxRegister(props) {
  const modifiedBg = props?.colorBg?.hex == "#2d3947"  ? "#362f4a" : props?.colorBg?.hex
  return (
    <Box
      sx={{
        position: 'relative',
        bg: modifiedBg ? modifiedBg : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Container>
        <Box
          py={5}
          css={{ textAlign: 'center', position: 'relative' }}
          variant="box.primary"
          bg={props.info && props.info.colorBg ? props.info.colorBg.hex : ''}
        >
          <Box sx={{ display: 'block' }}>
            <InfoText
              {...props.info}
              centered={props.info && props.info.centered}
            />
            <Box py={4}>
              <LinkCheck to={props.secondaryButtonUrl} effect="fade" length={0}>
                {props.secondaryButtonText && (
                  <Button my={2} variant="buttons.linkWithBorder" mx={2}>
                    {props.secondaryButtonText}
                  </Button>
                )}
              </LinkCheck>
              <LinkCheck to={props.primaryButtonUrl} effect="fade" length={0}>
                {props.primaryButtonText && (
                  <Button my={2} variant="buttons.cta" mx={2}>
                    {props.primaryButtonText}
                  </Button>
                )}
              </LinkCheck>
            </Box>
            {props.children}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
