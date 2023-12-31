import React from 'react'
import PropTypes from 'prop-types'

import Footer from './footer'
import Header from '@/components/Header/Header'
import GlobalStyles from '../styles/globalStyles'
import Headroom from 'react-headroom'

export default function Layout(props) {
  const mainMenu =
    props.navMenu &&
    props.navMenu.find(menus => menus.menuPlacement === 'menuMain')

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        pt: ['64px', null, null, null, '92px'],
      }}
    >
      <GlobalStyles/>
      <Header
        navMenu={mainMenu}
        logoDark={props.logoDark}
        headerBg={props.headerBg}
        headerColor={props.headerColor}
        siteSettings={props?.siteSettings}
      />
      <main
        css={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        {props.children}
      </main>
      <Footer
        navMenu={props.navMenu}
        siteSettings={props?.siteSettings}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
