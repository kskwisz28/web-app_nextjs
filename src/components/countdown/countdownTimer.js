import React from 'react';
import { useCountdown } from '../../hooks/useCountdown'
import CountdownExpired from './countdownExpired'
import ShowCounter from './showCounter'

const CountdownTimer = ({ targetDate, colors, rewardText }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <CountdownExpired text={rewardText} />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                colors={colors}
            />
        );
    }
};

export default CountdownTimer