import React, {useMemo} from 'react'
import {Box, Flex} from 'theme-ui'
import Container from './container'
import InfoText from './infoText'
import {FaHeart} from 'react-icons/fa'

// TODO: use non legacy image component
import Image from 'next/legacy/image'

import Adrian from '@/images/Adrian.png'
import Daniel from '@/images/Daniel.png'
import Jonna from '@/images/Jonna.png'
import Adam from '@/images/Adam.png'
import Azddin from '@/images/Azddin.png'
import Moris from '@/images/qb-moris.png'
import Victor from '@/images/qb-victor.png'
import Linnea from '@/images/qb-linnea.png'
import Oliver from '@/images/Oliver.png'
import Peter from '@/images/Peter.png'
import Ron from '@/images/Ron.png'
import Simon from '@/images/Simon.png'

export default function Employees(props) {
  const shuffledEmployees = useMemo(() => {
      const Employees = [
        Adrian,
        Daniel,
        Jonna,
        Adam,
        Azddin,
        Moris,
        Oliver,
        Peter,
        Ron,
        Simon,
        Linnea,
        Victor,
      ]

      return Employees.map(a => ({
        sort: Math.random(),
        value: a,
      }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
    },
    [])

  return (
    <Box
      sx={{
        py: [5, null, null, null, 6],
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <Container>
        <Flex p={1} sx={{alignItems: 'flex-end', flexWrap: 'wrap'}}>
          <Box sx={{width: ['100%', null, '70%']}}>
            <InfoText topIcon={<FaHeart sx={{pr: 1}}/>} {...props.info}>
              {props.children}
            </InfoText>
          </Box>
          <Flex
            sx={{
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              width: ['100%', null, '30%'],
            }}
          >
            <Box p={1} sx={{flex: '1 1 40%'}}>
              <Image
                src={shuffledEmployees[0]}
                alt="Team member Quickbutik"
                css={{borderRadius: '8px'}}
              />
            </Box>
            <Box p={1} sx={{flex: '1 1 60%'}}>
              <Image
                src={shuffledEmployees[1]}
                alt="Team member Quickbutik"
                css={{borderRadius: '8px'}}
              />
            </Box>
          </Flex>
        </Flex>
        <Flex pt={3} sx={{alignItems: 'flex-start', flexWrap: 'wrap'}}>
          <Box p={1} sx={{flex: '1 1 22%'}}>
            <Image
              src={shuffledEmployees[2]}
              alt="Team member Quickbutik"
              css={{borderRadius: '8px'}}
            />
          </Box>
          <Box p={1} sx={{flex: '1 1 28%'}}>
            <Image
              src={shuffledEmployees[3]}
              alt="Team member Quickbutik"
              css={{borderRadius: '8px'}}
            />
          </Box>
          <Box p={1} sx={{flex: '1 1 28%'}}>
            <Image
              src={shuffledEmployees[4]}
              alt="Team member Quickbutik"
              css={{borderRadius: '8px'}}
            />
          </Box>
          <Box p={1} sx={{flex: '1 1 22%'}}>
            <Image
              src={shuffledEmployees[5]}
              alt="Team member Quickbutik"
              css={{borderRadius: '8px'}}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
