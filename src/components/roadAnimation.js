import React, { useEffect, useRef } from 'react'

import InfoText from '../components/infoText'
import { Box } from 'theme-ui'
import styled from '@emotion/styled'
import Lightscript from '../helpers/lights.js'

const Lights = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const options = {
  onSpeedUp: ev => {},
  onSlowDown: ev => {},
  length: 400,
  roadWidth: 10,
  islandWidth: 5,
  lanesPerRoad: 2,

  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,

  totalSideLightSticks: 50,
  lightPairsPerRoadWay: 70,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],

  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.05, 400 * 0.15],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.2, 0.2],
  carFloorSeparation: [0.05, 1],

  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x0f1a25,
    shoulderLines: 0x131318,
    brokenLines: 0x131318,
    /***  Only these colors can be an array ***/
    leftCars: [0xac85dc, 0x5ba5e5, 0x3a956b],
    rightCars: [0xac85dc, 0x5ba5e5, 0x3a956b],
    sticks: 0xa4e3e6,
  },
}

export default function RoadAnimation(props) {
  const anime = useRef(null)
  useEffect(() => {
    const lol = document.getElementById('lights')
    // Update the document title using the browser API
    const myApp = new Lightscript(lol, options)
    myApp.loadAssets().then(myApp.init)
  })

  return (
    <div>
      <Box
        variant="box.intro"
        sx={{
          position: 'absolute',
          mx: 'auto',
          display: 'block',
          width: '100%',
        }}
      >
        <InfoText
          centered
          bgTop={{ hex: 'purple600' }}
          colorTop={{ hex: 'white' }}
          topLine="UPPTÄCK"
          headline="Vägen till effektivare e-handel"
          colorHeadline={{ hex: 'white' }}
          description="Allt du behöver på bara några klick."
          colorDesc={{ hex: 'white' }}
        />
      </Box>
      <Lights className="lights" id="lights" ref={anime}></Lights>
    </div>
  )
}
