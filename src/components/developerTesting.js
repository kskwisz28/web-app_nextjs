import React, { useState, useEffect } from "react";
import { Button, Text, Grid, Heading, Box, jsx, Flex } from "theme-ui";

import Container from './container'
import RangeSlider from "./rangeSlider";
import { motion, useAnimation } from "framer-motion"
import { Listbox } from '@headlessui/react'


const pricing = [
    { id: 1, name: 'Startup', color: '#F44599', type: 'månadsvis', price: 0, unavailable: true },
    { id: 1, name: 'Startup', color: '#F44599', type: 'kvartalvis', price: 249, unavailable: false },
    { id: 2, name: 'Startup', color: '#F44599', type: 'årsvis', price: 199, unavailable: false },
    { id: 3, name: 'Standard', color: '#20D287', type: 'månadsvis', price: 795, unavailable: false },
    { id: 4, name: 'Standard', color: '#20D287', type: 'kvartalvis', price: 699, unavailable: false },
    { id: 5, name: 'Standard', color: '#20D287', type: 'årsvis', price: 629, unavailable: false },
    { id: 6, name: 'Pro', color: '#6154F9', type: 'månadsvis', price: 1249, unavailable: false },
    { id: 7, name: 'Pro', color: '#6154F9', type: 'kvartalvis', price: 1099, unavailable: false },
    { id: 8, name: 'Pro', color: '#6154F9', type: 'årsvis', price: 995, unavailable: false },
]

export default function DeveloperTesting(props) {
    const [selectedPricing, setSelectedPricing] = useState(pricing[1])
    const [animation, setAnimation] = useState(1);
    const [scale, setScale] = useState(1);

    const controls = useAnimation()

    const definedAnimation = { opacity: [1, 0, 1], scale: [1, 0.98, 1] }

    useEffect(() => {
        controls.start(definedAnimation)
    }, [])

    const onPlanChange = e => {
        setSelectedPricing(e)
        textAnimation()
    }

    const textAnimation = () => {
        controls.start(definedAnimation)
    }

    return (
        <Container>
            <Heading pt={4} pb={4} as="h1" css={{ textAlign: 'center' }}>Alltid ett pris. Oavsett tillväxt.</Heading>
            <Grid gap={5} columns={[1, null, 3]}>
                <RangeSlider triggerTextAnimation={textAnimation} value={1000} min={0} max={100000} step={10000} suffix="besökare" title="Besökare" />
                <RangeSlider triggerTextAnimation={textAnimation} value={10000000} min={0} max={100000000} step={10000000} suffix="kr" title="Din omsättning" />
                <RangeSlider triggerTextAnimation={textAnimation} value={1000} min={0} max={10000} step={1000} suffix="st" title="Antal produkter" />
            </Grid>
            <Grid mt={4} columns={[1, null, 2]} gap={"0px 1rem"} css={{ alignItems: 'center' }}>
                <Text css={{
                    textAlign: 'center',
                    '@media screen and (min-width: 540px)': {
                        textAlign: 'right'
                    }
                }}>Välj prisplan:</Text>
                <Listbox value={selectedPricing} onChange={onPlanChange}>
                    <Listbox.Button sx={{ '@media screen and (max-width: 540px)': { mx: 'auto' }, maxWidth: '165px', boxShadow: '0 8px 14px rgb(50 50 93 / 10%), 0 4px 6px rgb(0 0 0 / 8%)', borderRadius: '0', background: '#6154F9', color: '#fff', border: 'none', cursor: 'pointer', padding: '1rem', ':hover': { background: '#F44599' } }}>{selectedPricing.name} <small>{selectedPricing.type}</small></Listbox.Button>
                    <div></div>
                    <Listbox.Options sx={{ mx: 'auto', width: '100%', width: '100%', padding: '1rem', background: '#362f4a', color: '#fff' }}>
                        <Grid columns={[1, 3]} gap={"0px 2rem"} sx={{ mx: 'auto', justifyContent: 'space-between' }}>
                            {pricing.map((plan) => (
                                <Listbox.Option
                                    key={plan.id}
                                    value={plan}
                                    disabled={plan.unavailable}
                                    css={{ width: '100%' }}
                                >
                                    <li sx={{ textAlign: 'center', width: '100%', py: '1rem', cursor: 'pointer', ':hover': { opacity: '0.8', background: 'rgba(255,255,255,.1)' } }}>
                                        {plan.unavailable ? <div css={{ position: 'relative' }}><div sx={{ opacity: '0.4', width: '100%' }}><span css={{ background: plan.color, padding: '0.2rem 0.8rem' }}>{plan.name}</span><small css={{ display: 'block' }}>{plan.type}</small></div><div sx={{ position: 'absolute', top: 0, left: 0, textAlign: 'center', width: '100%' }}>Ej tillgängligt</div></div> : <div><span css={{ background: plan.color, padding: '0.2rem 0.8rem' }}>{plan.name}</span><small css={{ display: 'block' }}>{plan.type}</small></div>}
                                    </li>
                                </Listbox.Option>
                            ))}
                        </Grid>
                    </Listbox.Options>
                </Listbox>
            </Grid>
            <Grid mt={4} mb={5} columns={[1, null, 2]} gap={"0px 1rem"} css={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text css={{
                    textAlign: 'center',
                    marginTop: '1rem',
                    '@media screen and (min-width: 540px)': {
                        marginTop: '0',
                        textAlign: 'right',
                    }
                }}>Ditt pris:</Text>
                <motion.div css={{ '@media screen and (max-width: 540px)': { textAlign: 'center' } }} transition={{ ease: "easeInOut", duration: 1 }} animate={controls}><Text css={{ borderBottom: '2px solid #1ab876', color: '#1ab876', fontWeight: '600' }}>Alltid {selectedPricing.price}:- <small>per månad</small></Text></motion.div>
            </Grid>
        </Container >
    );
}
