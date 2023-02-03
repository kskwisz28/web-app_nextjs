import React from 'react';

import { jsx, Flex, Text, Heading } from 'theme-ui'


const DateTimeDisplay = ({ value, type, isDanger, colors }) => {
    return (
        <Flex sx={{ flexDirection: 'column' }}>
            <Heading sx={{ textAlign: 'center' }}>{value}</Heading>
            <Text sx={{ opacity: '0.6', color: colors?.text }}>{type}</Text>
        </Flex>
    )
}

export default DateTimeDisplay;
