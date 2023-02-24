import React, {useState} from 'react'
import MainNav from './navMainMenu'
import LinkCheck from './linkCheck'
import Container from './container'

import {Flex, Link, Heading, Box, Button, Grid, Text} from 'theme-ui'

import qbLogoWhite from '../images/quickbutik-white.svg'
import qbLogoDark from '../images/quickbutik-black.svg'

import {CountryFlag} from '../helpers/countryFlags'
import {Dialog} from '@headlessui/react'
import {useTranslation} from "next-i18next";
import Image from "next/image";
import {useRouter} from "next/router";

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

export default function Navbar(props) {
  const {i18n} = useTranslation('common')
  let [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const currentLanguage = router.locale

  return (
    <React.Fragment>
      <div
        sx={{
          background: props.headerBg ? props.headerBg : 'aubergine',
          backdropFilter: 'saturate(180%) blur(20px)',
          position: 'relative',
          zIndex: 5,
          height: '100%',
        }}
      >
        <Container>
          <header
            sx={{
              color: props.headerColor ? props.headerColor : 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              py: 2,

              height: '100%',
            }}
          >
            <Flex css={{}} py={2} style={{alignItems: 'center',marginRight: '-3px'}}>
              <LinkCheck
                to={'/' + i18n.language}
                effect="fade"
                length={0.5}
                css={{display: 'flex', alignSelf: 'center'}}
              >
                <Image
                  src={props.logoDark ? qbLogoDark : qbLogoWhite}
                  alt="Quickbutik logo"
                  height={28}
                />
              </LinkCheck>

              <Button onClick={() => setIsOpen(true)} bg="transparent" css={{
                border: 'none',
                width: '100%',
                height: '100%',
                marginLeft: '11px',
                marginTop: '8px',
                padding: 0
              }}>
                <Box sx={{maxWidth: '1.5rem'}}>
                  <CountryFlag country={currentLanguage} small/>
                </Box>
              </Button>

              <Dialog open={isOpen} onClose={() => setIsOpen(false)} css={{position: 'relative', zIndex: '50'}}>
                <div css={{position: 'fixed', inset: '0', background: 'rgba(0,0,0,.2)'}}>
                  <Flex p={4} css={{position: 'fixed', inset: '0', alignItems: 'center', justifyContent: 'center'}}>
                    <Dialog.Panel css={{
                      padding: '4rem',
                      textAlign: 'center',
                      width: '100%',
                      maxWidth: '500px',
                      borderRadius: '2px',
                      background: 'white'
                    }}>
                      <Dialog.Title>Pick a Country/Language</Dialog.Title>
                      <Text>You are currently on the {CountryVisitInfo(currentLanguage)}</Text>

                      <Grid columns={[1, null, 3]} gap={3} mt={4}>
                        <Link href="https://quickbutik.com/sv">
                          <CountryFlag country={'sv'}/>
                          <Heading sx={{color: 'text', mt: 2}}>Sverige</Heading>
                        </Link>

                        <Link href="https://quickbutik.com/da">
                          <CountryFlag country={'da'}/>
                          <Heading sx={{color: 'text', mt: 2}}>Danmark</Heading>
                        </Link>

                        <Link href="https://quickbutik.com/no">
                          <CountryFlag country={'no'}/>
                          <Heading sx={{color: 'text', mt: 2}}>Norge</Heading>
                        </Link>
                      </Grid>

                    </Dialog.Panel>
                  </Flex>
                </div>
              </Dialog>
            </Flex>
            <MainNav
              siteSettings={props.siteSettings}
              navMenu={props.navMenu}
              headerColor={props.headerColor}
            >
              <Flex
                width={1}
                css={{
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              ></Flex>
            </MainNav>
          </header>
        </Container>
      </div>
    </React.Fragment>
  )
}
