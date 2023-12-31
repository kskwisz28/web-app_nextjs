import React, {useEffect} from 'react'
import LinkCheck from './linkCheck'
import styled from '@emotion/styled'

import useClickOutside from '../hooks/useClickOutside'

// import DropdownItem from './dropdownItem'
// import DropdownMenu from './dropdownMenu'


import {jsx, Button} from 'theme-ui'
import {useRouter} from "next/router";

const Ul = styled.ul`
  background-color: transparent;
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  li {
    z-index: 99;
    font-weight: 600;
    font-size: 17px;
    padding: 18px 10px;

    a {
      text-decoration: none;
    }
  }

  @media (max-width: 1050px) {
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: saturate(180%) blur(20px);
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    z-index: 9;
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)')};
    visibility: ${({open}) => (open ? 'visible' : 'hidden')};
    top: 0;
    right: 0;
    height: 100vh;
    min-width: 300px;
    padding-top: 70px;
    transition: all 0.3s ease-in-out;
    li {
      font-size: 1.4em;
    }
  }
`

export default function NavItems({
                                   open,
                                   navMenu,
                                   headerColor,
                                   siteSettings,
                                 }) {

  const {locale} = useRouter()

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add('navbar-open')
    } else {
      document.documentElement.classList.remove('navbar-open')
    }
    return () => {
      document.documentElement.classList.remove('navbar-open')
    }
  }, [open])

  return (
    <Ul open={open}>
      {navMenu?.menuItems[locale] &&
        navMenu.menuItems[locale].map(items => (
          <li key={items._key} sx={{borderColor: 'primary'}}>
            <LinkCheck
              activeStyle={{borderBottom: `2px solid`}}
              to={items.menuItemSlug}
              effect="fade"
              length={0}
              sx={{
                color: headerColor ? headerColor : 'white',
                '@media screen and (max-width: 1050px)': {
                  color: 'white',
                },
                borderColor: 'primary',
                ':hover': {
                  color: 'primary',
                  transition: 'all 0.3s linear',
                },
              }}
            >
              {items.menuItemName}
            </LinkCheck>
          </li>
        ))}
      <li
        sx={{
          borderColor: 'primary',
          display: !open ? 'none' : '',
          '@media screen and (min-width: 1051px)': {
            display: 'none',
          },
        }}
      >
        <a
          href={
            siteSettings &&
            siteSettings.headerSecondButtonUrl &&
            siteSettings.headerSecondButtonUrl[locale]
          }
          sx={{
            color: 'white',
          }}
        >
          {siteSettings &&
            siteSettings.headerSecondButtonText &&
            siteSettings.headerSecondButtonText[locale]}
        </a>
      </li>
      <li
        sx={{
          borderColor: 'primary',
          display: !open ? 'none' : '',
          '@media screen and (min-width: 1051px)': {
            display: 'none',
          },
        }}
      >
        <a
          href={
            siteSettings &&
            siteSettings.headerButtonUrl &&
            siteSettings.headerButtonUrl[locale]
          }
        >
          <Button py={2} variant="buttons.cta" sx={{fontSize: '17px'}}>
            {siteSettings &&
              siteSettings.headerButtonText &&
              siteSettings.headerButtonText[locale]}
          </Button>
        </a>
      </li>
    </Ul>
  )
}
