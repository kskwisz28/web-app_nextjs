import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'
import {useThemeUI, Box} from 'theme-ui'
import styled from '@emotion/styled'

import {useTranslation} from 'next-i18next'

export default function SocialIcons(props) {
  const {t} = useTranslation('common')
  const context = useThemeUI()
  const {theme} = context
  const SocialIconLink = styled.a`
    color: ${theme.colors.dark400};
    padding-right: 1rem;
    font-size: 1.5rem;

    &:hover {
      color: ${theme.colors.primary};
      transition: 0.3s ease-out;
    }
  `
  const SocialIcon = props => {
    let {social} = props
    switch (social) {
      case 'Facebook':
        return <FaFacebook/>
      case 'Instagram':
        return <FaInstagram/>
      case 'Youtube':
        return <FaYoutube/>
      case 'Twitter':
        return <FaTwitter/>
      case 'Linkedin':
        return <FaLinkedin/>
      default:
        return null
    }
  }

  return (
    <Box
      sx={{
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
        textAlign: props.centered ? 'center' : '',
      }}
    >

      <SocialIconLink
        href={t('facebook', "https://www.facebook.com/quickbutik/")}
        aria-label={'Facebook icon'}
        target="_blank"
      >
        <SocialIcon social={'Facebook'}/>
      </SocialIconLink>
      <SocialIconLink
        href={t('youtube', 'https://www.youtube.com/channel/UC__wDPuQUprzdbrR1LpI5RA')}
        aria-label={'Youtube icon'}
        target="_blank"
      >
        <SocialIcon social={'Youtube'}/>
      </SocialIconLink>
      <SocialIconLink
        href={t('instagram', 'https://instagram.com/quickbutiksverige')}
        aria-label={'Instagram icon'}
        target="_blank"
      >
        <SocialIcon social={'Instagram'}/>
      </SocialIconLink>
      <SocialIconLink
        href={t('twitter', 'https://twitter.com/quickbutik')}
        aria-label={'Twitter icon'}
        target="_blank"
      >
        <SocialIcon social={'Twitter'}/>
      </SocialIconLink>
      <SocialIconLink
        href={t('linkedin', 'https://www.linkedin.com/company/quickbutik/?originalSubdomain=se')}
        aria-label={'LinkedIn icon'}
        target="_blank"
      >
        <SocialIcon social={'Linkedin'}/>
      </SocialIconLink>
    </Box>
  )
}
