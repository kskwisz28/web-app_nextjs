import React, {useEffect, useState} from 'react'

import Container from '../components/container'
import {Box} from 'theme-ui'

import {Tab} from '@headlessui/react'
import StartHero from './startHero'

export default function StartTab(props) {
  // This is ONLY to prevent hydration mismatch between server and client
  // which is a BUG in @headlessui tab
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    setRendered(true)
  }, [])

  if (!rendered) {
    return null
  }

  return (
    <Box
      sx={{
        py: [5, null, null, null, 6],
        color: props?.heroColors?.theme?.text,
        backgroundColor: props?.heroColors?.theme?.background,
        position: 'relative',
      }}
    >
      <Container>
        <Tab.Group>
          {({selectedIndex}) => (
            <>
              <Tab.List sx={{display: 'flex', gap: '3', justifyContent: 'center'}}>
                {props.tab.map((tab, i) => (
                  <Tab
                    key={tab._key}
                    sx={{
                      ':focus-visible': {
                        border: 'none',
                        color: 'green',
                        ':focus-outline': {outline: '2px solid', outlineOffset: '5px'},
                        outlineColor: 'green',
                      },
                      p: 1,
                      background: 'white',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease-in-out',
                      fontWeight: '500',
                      border: 'none',
                      pb: 1,
                      borderBottom: selectedIndex === i ? '1px solid' : 'none',
                      borderColor: 'raspberry',
                      color: selectedIndex === i ? 'raspberry' : ''
                    }}
                  >
                    {tab?.tabName}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {props.tab.map((content) => (
                  <Tab.Panel key={content._key}>
                    <StartHero
                      customPaddingBottom={[0, null, null, null, 0]}
                      customPaddingTop={[3, null, null, null, 4]}
                      {...content}
                      arrowAsButton={!content?.showButton}
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </Box>
  )
}
