import React, { useState } from 'react'

import Container from '../components/container'
import { Box, jsx } from 'theme-ui'

import { Tab } from '@headlessui/react'
import StartHero from './startHero'

export default function StartTab(props) {
    const [selectedIndex, setSelectedIndex] = useState(0)

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
                <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <Tab.List sx={{ display: 'flex', gap: '3', justifyContent: 'center' }}>
                        {props.tab.map((tab, i) => (
                            <Tab sx={{ ':focus-visible': { border: 'none', color: 'green', ':focus-outline': { outline: '2px solid', outlineOffset: '5px' }, outlineColor: 'green', }, p: 1, background: 'white', cursor: 'pointer', transition: 'all 0.2s ease-in-out', fontWeight: '500', border: 'none', pb: 1, borderBottom: selectedIndex === i ? '1px solid' : 'none', borderColor: 'raspberry', color: selectedIndex === i ? 'raspberry' : '' }}>{tab?.tabName}</Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels>
                        {props.tab.map((content, i) => (
                            <Tab.Panel><StartHero customPaddingBottom={[0, null, null, null, 0]} customPaddingTop={[3, null, null, null, 4]} {...content} arrowAsButton={content?.showButton ? false : true} /></Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </Container>
        </Box>
    )
}
