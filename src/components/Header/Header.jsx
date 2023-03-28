import React, {useEffect, useMemo, useState} from 'react'
import Image from 'next/image';
import logo from './icon.svg'
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {Box, Button, Link, useThemeUI} from "theme-ui";
import NavLink from "@/components/Header/NavLink";
import NextLink from 'next/link';
import useBreakpoint from "@/hooks/useBreakpoint";
import Hamburger from "@/components/Header/Hamburger";

const CountryVisitInfo = country => {
  switch (country) {
    case 'da':
      return 'Danish site'
    case 'no':
      return 'Norwegian site'
    case 'sv':
      return 'Swedish site'
    case 'en':
      return 'English site'
    default:
      return 'sv'
  }
}

export default function Header({
                                 headerBg = 'aubergine',
                                 headerColor = 'white',
                                 logoDark = false,
                                 navMenu,
                                 siteSettings,
                               }) {
  const {i18n} = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)
  const {theme} = useThemeUI()

  const {locale, asPath} = useRouter()

  useEffect(() => {
    setIsOpen(false)
  }, [asPath])

  const {isDesktop} = useBreakpoint()

  useEffect(() => {
    if (isDesktop) {
      return
    }

    if (isOpen) {
      document.documentElement.classList.add('navbar-open')
    } else {
      document.documentElement.classList.remove('navbar-open')
    }
    return () => {
      document.documentElement.classList.remove('navbar-open')
    }
  }, [isOpen, isDesktop])

  const menuItems = useMemo(() => navMenu.menuItems[locale], [navMenu, locale])
  return (
    <Box
      sx={{
        backgroundColor: ["white", null, null, null, 'rgba(255, 255, 255, 0.8)'],
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: '99',
        backdropFilter: [null, null, null, null, 'blur(20px)'],
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: [null, null, null, null, "18px 40px"],
        flexWrap: 'wrap',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: ['64px', null, null, null, '44px'],
          width: ['64px', null, null, null, '44px'],
          pl: ['24px', null, null, null, '0'],
          flexGrow: '1',
          flexBasis: '0',
        }}>
          <NextLink href="/">
            <Image
              src={logo}
              alt="Quickbutik logo"
              width={isDesktop ? 44 : 32}
              sx={{
                display: 'block',
              }}
            />
          </NextLink>
        </Box>

        <Box sx={{
          display: ['block', null, null, null, 'none'],
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: '100vw',
        }}>
          <Box sx={{backgroundColor: 'white', p: '10px'}}>
            <NextLink href={siteSettings.headerButtonUrl[locale]} passHref legacyBehavior>
              <Link variant="blue">
                {siteSettings.headerButtonText[locale]}
                <svg sx={{ml: '12px'}} width="15" height="13" viewBox="0 0 15 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z"
                    fill="#FAF8F7"/>
                </svg>
              </Link>
            </NextLink>
          </Box>
        </Box>

        <Box>
          <Button
            variant="naMedium" onClick={() => setIsOpen(prev => !prev)}
            sx={{display: ['none', null, null, null, 'flex']}}>
            Discover
            <svg sx={{
              ml: '8px',
              transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
              transition: '0.3s',
            }} width="19" height="11" viewBox="0 0 19 11" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.5 10.75C9.14844 10.75 8.83594 10.6328 8.60156 10.3984L1.10156 2.89844C0.59375 2.42969 0.59375 1.60938 1.10156 1.14062C1.57031 0.632812 2.39062 0.632812 2.85938 1.14062L9.5 7.74219L16.1016 1.14062C16.5703 0.632812 17.3906 0.632812 17.8594 1.14062C18.3672 1.60938 18.3672 2.42969 17.8594 2.89844L10.3594 10.3984C10.125 10.6328 9.8125 10.75 9.5 10.75Z"
                fill="black"/>
            </svg>
          </Button>
        </Box>

        <Box sx={{
          display: ['none', null, null, null, 'flex'],
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '16px',
          flexGrow: '1',
          flexBasis: '0',
        }}>
          <NextLink href={siteSettings.headerSecondButtonUrl[locale]} passHref legacyBehavior>
            <Link sx={{variant: 'buttons.naExtraSmall'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 25 21" fill="none">
                <path
                  d="M24.5 4.5V16.5C24.5 19.0312 22.4844 21 20 21H16.625C15.9688 21 15.5 20.5312 15.5 19.875C15.5 19.2656 15.9688 18.75 16.625 18.75H20C21.2188 18.75 22.25 17.7656 22.25 16.5V4.5C22.25 3.28125 21.2188 2.25 20 2.25H16.625C15.9688 2.25 15.5 1.78125 15.5 1.125C15.5 0.515625 15.9688 0 16.625 0H20C22.4844 0 24.5 2.01562 24.5 4.5ZM16.6719 9.75L10.6719 3.375C10.25 2.90625 9.54688 2.90625 9.07812 3.32812C8.60938 3.75 8.60938 4.45312 9.03125 4.92188L13.25 9.375H1.625C0.96875 9.375 0.5 9.89062 0.5 10.5C0.5 11.1562 0.96875 11.625 1.625 11.625H13.25L9.03125 16.125C8.60938 16.5938 8.60938 17.2969 9.07812 17.7188C9.3125 17.9062 9.59375 18 9.875 18C10.1562 18 10.4375 17.9062 10.6719 17.6719L16.6719 11.2969C17.0938 10.875 17.0938 10.1719 16.6719 9.75Z"
                />
              </svg>
            </Link>
          </NextLink>
          <NextLink href={siteSettings.headerButtonUrl[locale]} passHref legacyBehavior>
            <Link sx={{variant: 'buttons.blueMedium'}}>
              {siteSettings.headerButtonText[locale]}
            </Link>
          </NextLink>
        </Box>

        <Box sx={{
          position: ["fixed", null, null, null, "static"],
          top: ['64px', null, null, null, "92px"],
          zIndex: '99',
          backgroundColor: ["white", null, null, null, "initial"],
          height: ['calc(100% - 64px)', null, null, null, "fit-content"],
          width: '100vw',
          padding: ['10px', null, null, null, '0'],
          transform: [!isOpen ? 'translate3d(100%, 0, 0)' : 'translate3d(0, 0, 0);', null, null, null, 'none'],
          transition: '0.3s',
          display: ['flex', null, null, null, isOpen ? 'flex' : 'none'],
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <Box sx={{
            padding: ['30px', null, null, null, '56px 0 38px'],
          }}>
            <Box as="ul" sx={{
              display: 'flex',
              flexDirection: ['column', null, null, null, "row"],
              gap: ['20px', null, null, null, "80px"],
              justifyContent: 'center',
            }}>
              <NavLink
                href={`/${locale}`}>
                Home
              </NavLink>
              {menuItems.map(item => (
                <NavLink
                  key={item._key}
                  href={item.menuItemSlug}>
                  {item.menuItemName}
                </NavLink>
              ))}
            </Box>
          </Box>
          <Box sx={{
            display: ['flex', null, null, null, 'none'],
            flexDirection: 'column',
            gap: '10px',
          }}>
            <NextLink href={siteSettings.headerSecondButtonUrl[locale]} passHref legacyBehavior>
              <Link variant="white">
                Sign in
              </Link>
            </NextLink>
            <NextLink href={siteSettings.headerButtonUrl[locale]} passHref legacyBehavior>
              <Link variant="blue">
                {siteSettings.headerButtonText[locale]}
                <svg sx={{ml: '12px'}} width="15" height="13" viewBox="0 0 15 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z"
                    fill="#FAF8F7"/>
                </svg>
              </Link>
            </NextLink>
          </Box>
        </Box>

        <Box sx={{
          display: ['block', null, null, null, 'none'],
          mr: '17px',
        }}>
          <Hamburger
            open={isOpen}
            onClick={() => setIsOpen(prev => !prev)}
          />
        </Box>
      </Box>
    </Box>
  )
}
