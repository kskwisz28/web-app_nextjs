import React, {useState, useContext} from 'react'
import styled from '@emotion/styled'
import NavItems from './navItems'


import {jsx, Flex, Button, Link} from 'theme-ui'
import {useRouter} from "next/router";

const NavCTA = styled.div`
  @media (max-width: 1050px) {
    display: none;
  }
`

function IconUser(props) {
  return (
    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.75 14.25H8.25C3.65625 14.25 0 17.9531 0 22.5C0 23.3438 0.65625 24 1.5 24H19.5C20.2969 24 21 23.3438 21 22.5C21 17.9531 17.2969 14.25 12.75 14.25ZM2.25 21.75C2.625 18.7969 5.15625 16.5 8.25 16.5H12.75C15.7969 16.5 18.3281 18.7969 18.7031 21.75H2.25ZM10.5 12C13.7812 12 16.5 9.32812 16.5 6C16.5 2.71875 13.7812 0 10.5 0C7.17188 0 4.5 2.71875 4.5 6C4.5 9.32812 7.17188 12 10.5 12ZM10.5 2.25C12.5625 2.25 14.25 3.9375 14.25 6C14.25 8.10938 12.5625 9.75 10.5 9.75C8.39062 9.75 6.75 8.10938 6.75 6C6.75 3.9375 8.39062 2.25 10.5 2.25Z"
        fill={props.color}/>
    </svg>
  )
}

const StyledBurger = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  &:hover {
    div {
      &:nth-of-type(2) {
        width: 100%;
      }
    }
  }
  z-index: 20;
  display: none;

  @media (max-width: 1050px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 1.8rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background-color: ${({open, headerColor}) =>
  open ? '#ffffff' : headerColor};

    &:nth-of-type(1) {
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-of-type(2) {
      transform: ${({open}) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({open}) => (open ? 0 : 1)};
      width: 75%;
    }
    &:nth-of-type(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export default function NavMainMenu(props) {
  const [open, setOpen] = useState(false)

  const {locale} = useRouter()

  console.log('navmainmenu', props.siteSettings)

  return (
    <React.Fragment>
      <StyledBurger
        {...props}
        open={open}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <div sx={{backgroundColor: open ? 'white' : props.headerColor}}/>
        <div sx={{backgroundColor: open ? 'white' : props.headerColor}}/>
        <div sx={{backgroundColor: open ? 'white' : props.headerColor}}/>
      </StyledBurger>
      <NavItems
        siteSettings={props.siteSettings}
        navMenu={props.navMenu}
        open={open}
        onClickOutside={() => open && setOpen(!open)}
        headerColor={props.headerColor}
      />

      <NavCTA>
        <Flex css={{alignItems: 'center'}}>
          {props.children}

          <Link
            px={3}
            href={
              props.siteSettings &&
              props.siteSettings.headerButtonUrl &&
              props.siteSettings.headerButtonUrl?.[locale]
            }
          >
            <Button py={2} variant="buttons.kiwi">
              {props.siteSettings &&
                props.siteSettings.headerButtonText &&
                props.siteSettings.headerButtonText?.[locale]}
            </Button>
          </Link>

          <a href={props?.siteSettings?.headerSecondButtonUrl?.[locale]}>
            <Button bg="transparent" css={{border: 'none'}}>
              <IconUser color={props.headerColor == 'dark' ? '#362F4A' : 'white'}/>
            </Button>
          </a>
        </Flex>
      </NavCTA>
    </React.Fragment>
  )
}
