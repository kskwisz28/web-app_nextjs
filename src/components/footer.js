import {useContext} from 'react'

import LinkCheck from '../components/linkCheck'
import Container from './container'

import {useTranslation} from 'next-i18next'
import {PathCheck} from '../helpers/pathCheck'

import mediaqueries from '../styles/media'

import {useThemeUI} from 'theme-ui'
import {Flex, Text, Divider} from 'theme-ui'
import {CountryFlag} from '../helpers/countryFlags'

import styled from '@emotion/styled'

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'
import Link from "next/link";
import {useRouter} from "next/router";
import {AlternateLinksContext} from "@/pages/_app";


const SocialIcons = styled.div`
  display: flex;
  flex-direction: row-row-reverse;

  ${mediaqueries.phablet`
  width: 100%;
  justify-content: left;
  margin-top: 1em;
  `};
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

export default function Footer(props) {
  const alternateLinks = useContext(AlternateLinksContext)
  const {i18n} = useTranslation('common')
  const context = useThemeUI()
  const {theme} = context

  const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  color: ${theme.colors.textPrimary};`

  const footerSocial =
    props.navMenu &&
    props.navMenu.filter(
      menus => menus.menuPlacement === 'menuSocial'
    )

  const footerMenuOne =
    props.navMenu &&
    props.navMenu.filter(
      menus => menus.menuPlacement === 'menuFooterOne'
    )

  const footerMenuTwo =
    props.navMenu &&
    props.navMenu.filter(
      menus => menus.menuPlacement === 'menuFooterTwo'
    )

  const footerMenuThree =
    props.navMenu &&
    props.navMenu.filter(
      menus => menus.menuPlacement === 'menuFooterThree'
    )

  const footerMenuFour =
    props.navMenu &&
    props.navMenu.filter(
      menus => menus.menuPlacement === 'menuFooterFour'
    )

  const SwedishAltExists =
    alternateLinks && alternateLinks.some(link => link['language'] === 'sv')

  const NorwegianAltExists =
    alternateLinks && alternateLinks.some(link => link['language'] === 'no')

  const DanishAltExists =
    alternateLinks && alternateLinks.some(link => link['language'] === 'da')

  const FooterLink = styled(LinkCheck)`
    color: ${theme.colors.textFadedOne};
    text-decoration: none;
    font-size: 1.2rem;
    line-height: 1.8;

    &:hover {
      color: ${theme.colors.primary};
      transition: 0.3s ease-out;
    }
  `

  const FooterALink = styled.a`
    color: ${theme.colors.textFadedOne};
    text-decoration: none;
    font-size: 1.2rem;
    line-height: 1.8;

    &:hover {
      color: ${theme.colors.primary};
      transition: 0.3s ease-out;
    }
  `

  const SocialIconLink = styled.a`
    color: ${theme.colors.textFadedOne};
    padding-right: 1rem;
    font-size: 1.5rem;
    &:hover {
      color: ${theme.colors.primary};
      transition: 0.3s ease-out;
    }
  `

  // const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  const {locale, asPath} = useRouter()
  // TODO: fix currentUrl if it's not correct
  const currentUrl = asPath

  return (
    <footer sx={{bg: 'bgSecondary', width: '100%', pt: 4, position: 'relative'}}>
      <Container>
        <Flex
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          <Flex
            sx={{
              width: ['100%', null, '50%', '25%'],
              py: 3,
              flexDirection: 'column',
            }}
          >
            <FooterLinkTitle>
              {footerMenuOne &&
                footerMenuOne[0] &&
                footerMenuOne[0].menuName[locale]}
            </FooterLinkTitle>
            {footerMenuOne &&
              footerMenuOne[0] &&
              footerMenuOne[0].menuItems[locale].map(items => (
                <div key={items._key}>
                  {items.menuItemExternalLink && (
                    <FooterALink href={items.menuItemExternalLink}>
                      {items.menuItemName}
                    </FooterALink>
                  )}
                  {items.menuItemSlug && (
                    <FooterLink
                      key={items._key}
                      to={items.menuItemSlug}
                      effect="fade"
                      length={0}
                    >
                      {items.menuItemName}
                    </FooterLink>
                  )}
                </div>
              ))}
          </Flex>

          <Flex
            sx={{
              width: ['100%', null, '50%', '25%'],
              py: 3,
              flexDirection: 'column',
            }}
          >
            <FooterLinkTitle>
              {footerMenuTwo &&
                footerMenuTwo[0] &&
                footerMenuTwo[0].menuName[locale]}
            </FooterLinkTitle>
            {footerMenuTwo &&
              footerMenuTwo[0] &&
              footerMenuTwo[0].menuItems[locale].map(items => (
                <div key={items._key}>
                  {items.menuItemExternalLink && (
                    <FooterALink href={items.menuItemExternalLink}>
                      {items.menuItemName}
                    </FooterALink>
                  )}
                  {items.menuItemSlug && (
                    <FooterLink
                      key={items._key}
                      to={items.menuItemSlug}
                      effect="fade"
                      length={0}
                    >
                      {items.menuItemName}
                    </FooterLink>
                  )}
                </div>
              ))}
          </Flex>
          <Flex
            sx={{
              width: ['100%', null, '50%', '25%'],
              py: 3,
              flexDirection: 'column',
            }}
          >
            <FooterLinkTitle>
              {footerMenuThree &&
                footerMenuThree[0] &&
                footerMenuThree[0].menuName[locale]}
            </FooterLinkTitle>
            {footerMenuThree &&
              footerMenuThree[0] &&
              footerMenuThree[0].menuItems[locale].map(items => (
                <div key={items._key}>
                  {items.menuItemExternalLink && (
                    <FooterALink href={items.menuItemExternalLink}>
                      {items.menuItemName}
                    </FooterALink>
                  )}
                  {items.menuItemSlug && (
                    <FooterLink
                      key={items._key}
                      to={items.menuItemSlug}
                      effect="fade"
                      length={0}
                    >
                      {items.menuItemName}
                    </FooterLink>
                  )}
                </div>
              ))}
          </Flex>
          <Flex
            sx={{
              width: ['100%', null, '50%', '25%'],
              py: 3,
              flexDirection: 'column',
            }}
          >
            <FooterLinkTitle>
              {footerMenuFour &&
                footerMenuFour[0] &&
                footerMenuFour[0].menuName[locale]}
            </FooterLinkTitle>
            <SocialIcons>
              {footerSocial &&
                footerSocial[0] &&
                footerSocial[0].menuItems[locale] &&
                footerSocial[0].menuItems[locale].map(
                  items =>
                    items.menuItemExternalLink && (
                      <SocialIconLink
                        key={items._key}
                        href={items.menuItemExternalLink}
                        aria-label={items.menuItemName}
                        target="_blank"
                      >
                        <SocialIcon social={items.menuItemName}/>
                      </SocialIconLink>
                    )
                )}
            </SocialIcons>
            {footerMenuFour &&
              footerMenuFour[0] &&
              footerMenuFour[0].menuItems[locale].map(items => (
                <div key={items._key}>
                  {items.menuItemExternalLink && (
                    <FooterALink href={items.menuItemExternalLink}>
                      {items.menuItemName}
                    </FooterALink>
                  )}
                  {items.menuItemSlug && (
                    <FooterLink
                      key={items._key}
                      to={items.menuItemSlug}
                      effect="fade"
                      length={0}
                    >
                      {items.menuItemName}
                    </FooterLink>
                  )}
                </div>
              ))}
          </Flex>
        </Flex>
        <Divider color="dark100"/>
        <Flex
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            my: 3,
          }}
        >
          <Text
            color="dark200"
            sx={{
              textAlign: ['center', null, 'left'],
              width: ['100%', null, '50%'],
            }}
          >
            <Flex mt={1} width={1}>
              <Text mx={2} color="dark300">
                <small>
                  {props.siteSettings &&
                    props.siteSettings.footerLanguageTitle &&
                    props.siteSettings.footerLanguageTitle[locale]}
                </small>
              </Text>

              {!SwedishAltExists && i18n.language === 'sv' && (
                <Link href={currentUrl} sx={{mx: '0.2rem'}}>
                  <CountryFlag country={'sv'}/>
                </Link>
              )}

              {!SwedishAltExists && i18n.language !== 'sv' && (
                <a href="https://quickbutik.com/sv" sx={{mx: '0.2rem'}}>
                  <CountryFlag country={'sv'}/>
                </a>
              )}

              {alternateLinks &&
                alternateLinks
                  .filter(link => link.language !== i18n.language)
                  .map((link, i) => [
                    i > 0 && '',
                    <Link
                      key={link.language}
                      href={PathCheck(link.path)}
                      hrefLang={link.language}
                      locale={link.language}
                      sx={{mx: '0.2rem'}}
                    >
                      <CountryFlag country={link.language}/>
                    </Link>,
                  ])}

              {!NorwegianAltExists && i18n.language === 'no' && (
                <Link href={currentUrl} sx={{mx: '0.2rem'}}>
                  <CountryFlag country={'no'}/>
                </Link>
              )}

              {!NorwegianAltExists && !i18n.language === 'no' && (
                <a href="https://quickbutik.com/no" sx={{mx: '0.2rem'}}>
                  <CountryFlag country={'no'}/>
                </a>
              )}

              {!DanishAltExists && i18n.language === 'da' && (
                <Link href={currentUrl} sx={{mx: '0.2rem'}}>
                  <CountryFlag country={'da'}/>
                </Link>
              )}

              {!DanishAltExists && !i18n.language === 'da' && (
                <a href="https://quickbutik.com/no" sx={{mx: '0.2rem'}}>
                  <CountryFlag country={'da'}/>
                </a>
              )}
            </Flex>
          </Text>
          <small sx={{color: 'dark300'}}>
            {props.siteSettings &&
              props.siteSettings.footerCopyright &&
              props.siteSettings.footerCopyright[locale]}
          </small>
        </Flex>
      </Container>
    </footer>
  )
}
