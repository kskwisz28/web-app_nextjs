import {Box, Flex, Divider} from 'theme-ui'
import InfoText from '../components/infoText'
import Container from '../components/container'
import Base from '../images/qb-base-3.svg'
import InfoSection from '../components/infoWithImage'
import Image from 'next/image'

export default function QBSteps(props) {
  return (
    <Box
      bg="dark"
      variant="box.intro"
      sx={{
        py: [5, null, null, null, 6],
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
        alignItems: 'center',
        justifyContent: 'center',
        '@media screen and (max-width: 1280px)': {
          flexDirection: 'column',
        },
      }}
    >
      <Container noPadding>
        <Box css={{position: 'relative'}} p={4}>
          <InfoText
            {...props.info}
            centered={props.info && props.info.centered}
          />
        </Box>
        <Box
          sx={{
            mx: 'auto',
            width: [null, null, null, null, null, '50%', '70%'],
          }}
        >
          <Box css={{width: '100%'}}>
            <InfoText
              center
              heading="h3"
              colorDesc={{hex: 'white'}}
              colorHeadline={{hex: 'white'}}
            />
            <Flex
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                color: 'dark300',
              }}
            ></Flex>
          </Box>
          <Box sx={{alignItems: 'center', position: 'relative'}}>
            <Image
              p={[0, null, null, null, null, 2, 3, 4]}
              css={{width: '100%', position: 'relative', zIndex: 5}}
              src={Base}
              alt="Quickbutik base image"
            />
          </Box>
        </Box>
        <Box css={{position: 'relative'}}>
          <Divider
            mt={-6}
            mx={'auto'}
            sx={{
              height: '100%',
              width: '0',
              border: '8px solid',
              borderColor: 'rgba(0,0,0,.1)',
              borderRadius: '8px',
              position: 'absolute',
              left: 'calc(50% - 8px)',
            }}
          />
          {props.rows &&
            props.rows.map(info => (
              <Box
                key={info._key}
                bg={info.info && info.info.colorBg ? info.info.colorBg.hex : ''}
                my={5}
                sx={{
                  boxShadow: 'shadow48',
                  border: '16px solid',
                  borderColor: 'rgba(255,255,255,.08)',
                  borderRadius: '16px',
                  position: 'relative',
                }}
              >
                <InfoSection {...info} />
              </Box>
            ))}
        </Box>
      </Container>
    </Box>
  )
}
