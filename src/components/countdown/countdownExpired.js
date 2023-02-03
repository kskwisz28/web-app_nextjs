import React, { useState, useEffect } from 'react'
import { useReward } from 'react-rewards';
import { Box } from 'theme-ui'

const CountdownExpired = (props) => {
    const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti', { lifetime: 5000, angle: 90, spread: 100 });

    useEffect(() => {
        confettiReward();
    }, [])

    return (
        <Box id="confettiReward" sx={{ fontWeight: '600', fontSize: '1.4rem', textAlign: 'center', width: '100%', height: '100%' }}>
            {props.text}
        </Box>
    )
}

export default CountdownExpired