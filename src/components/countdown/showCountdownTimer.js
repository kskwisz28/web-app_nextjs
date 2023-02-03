import React from 'react';
import CountdownTimer from './countdownTimer';
import { useState } from "react";

import Container from '../container'

import { jsx, Flex, Heading, editor } from 'theme-ui'


const ShowCountdownTimer = ({ heroColors, heading, date, rewardText, editor }) => {
    const [targetDate, setTargetDate] = useState(date);

    return (
        <Flex
            sx={{
                py: [5, null, null, null, 6],
                color: heroColors?.theme?.text,
                backgroundColor: heroColors?.theme?.background,
                position: 'relative',
            }}
        >
            <Container>
                {heading && (<Heading variant={'h2'} py={3} as={'h2'} sx={{ textAlign: 'center' }}>{heading}</Heading>)}
                <CountdownTimer rewardText={rewardText} colors={heroColors?.theme} targetDate={targetDate} />
            </Container>
        </Flex>
    );
}

export default ShowCountdownTimer
