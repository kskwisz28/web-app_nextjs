import {Box, Flex} from 'theme-ui'
import Image from 'next/image'

import useScript from '../hooks/useExternalScript'

import Facebook from '../images/logo-facebook.svg'
import Love from '../images/facebook-love.svg'
import Trustpilot from '../images/logo-trustpilot.svg'
import InfoText from './infoText'
import Container from '../components/container'

export default function Reviews(props) {
  useScript('https://embedsocial.com/embedscript/ri.js')
  return (
    <Box
      bg="bgSecondary"
      sx={{
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Container>
        <InfoText
          {...props.info}
          headlineAfterIcon={
            <Box sx={{display: ['none', null, null, 'block']}}>
              <Image
                sx={{maxHeight: '50px', maxWidth: '50px', width: '100%', height: 'auto', mx: 2}}
                src={Love}
                alt="Heart icon"
              />
            </Box>
          }
        />
        <div
          className="embedsocial-reviews"
          data-ref="6b4766a1a54cd8984bfb7ad1830fcc7e3b841c3f"
        ></div>
        <Flex
          css={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Flex sx={{alignItems: 'center', flexWrap: 'wrap'}}>
            <Box sx={{textAlign: 'center', width: ['100%', null, 'auto']}}>
              {props.reviewsText}
            </Box>
            <Flex
              sx={{alignItems: 'center', textAlign: 'center', mx: 'auto'}}
            >
              <a
                href="https://se.trustpilot.com/review/quickbutik.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  mx={2}
                  pt={1}
                  src={Trustpilot}
                  alt="Trustpilot logo"
                  css={{width: '6rem', height: 'auto'}}
                />
              </a>
              &
              <a
                href="https://www.facebook.com/quickbutik/reviews/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  mx={2}
                  pt={2}
                  src={Facebook}
                  alt="Trustpilot logo"
                  css={{width: '5rem', height: 'auto'}}
                />
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
