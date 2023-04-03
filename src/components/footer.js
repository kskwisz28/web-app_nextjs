import React, {useContext} from 'react'

import LinkCheck from '../components/linkCheck'
import Container from './container'

import {useTranslation} from 'next-i18next'
import {PathCheck} from '../helpers/pathCheck'

import mediaqueries from '../styles/media'

import {Flex, Text, Divider, Link, Box, useThemeUI} from 'theme-ui'
import {CountryFlag} from '../helpers/countryFlags'

import styled from '@emotion/styled'

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'
import {useRouter} from "next/router";
import {AlternateLinksContext} from "@/pages/_app";
import NextLink from "next/link";


const SocialIcons = styled.div`
  display: flex;
  flex-direction: row-reverse;

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
    <>
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
                  <NextLink href={currentUrl} sx={{mx: '0.2rem'}} locale="sv">
                    <CountryFlag country={'sv'}/>
                  </NextLink>
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
                      <NextLink
                        key={link.language}
                        href={PathCheck(link.path)}
                        hrefLang={link.language}
                        locale={link.language}
                        sx={{mx: '0.2rem'}}
                      >
                        <CountryFlag country={link.language}/>
                      </NextLink>,
                    ])}

                {!NorwegianAltExists && i18n.language === 'no' && (
                  <NextLink href={currentUrl} sx={{mx: '0.2rem'}}>
                    <CountryFlag country={'no'}/>
                  </NextLink>
                )}

                {!NorwegianAltExists && !i18n.language === 'no' && (
                  <a href="https://quickbutik.com/no" sx={{mx: '0.2rem'}}>
                    <CountryFlag country={'no'}/>
                  </a>
                )}

                {!DanishAltExists && i18n.language === 'da' && (
                  <NextLink href={currentUrl} sx={{mx: '0.2rem'}}>
                    <CountryFlag country={'da'}/>
                  </NextLink>
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

      <Box sx={{
        display: ['block', null, null, null, 'none'],
      }}>
        <Box sx={{
          backgroundColor: 'white',
          p: '10px',
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: '100vw',
        }}>
          <Link href={props.siteSettings.headerButtonUrl[locale]} variant="blue">
            {props.siteSettings.headerButtonText[locale]}
            <svg sx={{ml: '12px'}} width="15" height="13" viewBox="0 0 15 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z"
                fill="#FAF8F7"/>
            </svg>
          </Link>
        </Box>
      </Box>
    </>
  )
}
