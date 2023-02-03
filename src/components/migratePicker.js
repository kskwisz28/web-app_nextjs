import Wheel from './wheel'

import { jsx, Box, Image } from 'theme-ui'
import LogoQB from '../images/qb-logo-white.svg'
import { Flex } from 'theme-ui'
import ArrowRight from '../images/arrow-right-white.svg'
import LinkCheck from '../components/linkCheck'

export default function migratePicker(props) {
  return (
    <Box
      sx={{
        height: '200px',
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        background: '#362F4A',
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Box sx={{ width: '220px' }}>
        <Wheel
          loop
          from={props.items && props.items.map(item => item.title)}
          width={150}
        />
      </Box>
      <Flex
        py={4}
        sx={{
          alignSelf: 'center',
          '@media screen and (max-width: 510px)': { display: 'none' },
        }}
      >
        <LinkCheck
          to={props?.url}
          effect="slideLeft"
          length={0.5}
          sx={{
            px: 3,
            transition: 'all .3s ease',
            ':hover': { transition: 'all .3s ease', transform: 'scale(1.2)' },
          }}
        >
          <Image
            src={ArrowRight}
            alt="Merchants"
            sx={{
              height: 'auto',
              width: '100%',
              maxWidth: '4rem',
              px: 2,
              mx: 3,
              mt: -3,
            }}
          />
        </LinkCheck>
      </Flex>
      <Flex
        sx={{
          maxWidth: '100%',
          '@media screen and (max-width: 510px)': { display: 'none' },
        }}
      >
        <img
          sx={{ width: '100%', maxWidth: '15rem' }}
          src={LogoQB}
          alt="Quickbutik Logo"
        />
      </Flex>
    </Box>
  )
}
