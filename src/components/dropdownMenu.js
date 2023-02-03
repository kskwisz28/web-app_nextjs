import React, { useState, useEffect, useRef } from 'react'

import styled from '@emotion/styled'
import { CSSTransition } from 'react-transition-group'

const Dropdown = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX() (-45%);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: 'saturate(180%) blur(20px)';
  border-radius: 8px;
  transition: height var(--speed) ease;

  .menu-item {
    height: 50px;
    color: black;
    display: flex;
    align-items: center;
    transition: background var(--speed);
    padding: 1.5rem;
  }

  .menu-item:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  .icon-right {
    margin-left: auto;
  }

  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
  }

  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all var(--speed) ease;
  }
`

export default function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <Dropdown style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="settings">Profile</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main">Settings</DropdownItem>
          <DropdownItem>Test</DropdownItem>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Contact us</DropdownItem>
        </div>
      </CSSTransition>
    </Dropdown>
  )
}
