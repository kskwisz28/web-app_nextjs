import React from 'react'
import DateTimeDisplay from './DateTimeDisplay'

import { useTranslation } from 'react-i18next'
import { jsx, Flex, Box } from 'theme-ui'


const ShowCounter = ({ days, hours, minutes, seconds, colors }) => {
  const { t } = useTranslation('common')

  return (
    <Flex gap={2}>
      <Box sx={{ px: 2 }}>
        <DateTimeDisplay colors={colors} value={days} type={t('common:days')} />
      </Box>
      <Box sx={{ px: 2 }}>
        <DateTimeDisplay colors={colors} value={hours} type={t('common:hours')} />
      </Box>
      <Box sx={{ px: 2 }}>
        <DateTimeDisplay colors={colors} value={minutes} type={t('common:minutes')} />
      </Box>
      <Box sx={{ px: 2 }}>
        <DateTimeDisplay colors={colors} value={seconds} type={t('common:seconds')} />
      </Box>
    </Flex>
  );
};

export default ShowCounter
