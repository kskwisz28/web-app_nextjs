import React, { useState, useEffect } from 'react'
import CustomSwitch from './customSwitch'

const LandingAnimationSwitch = props => {
  const [firstSwitch, setFirstSwitch] = useState({
    modeOn: false,
    bgColor: '#ffffff',
    textColor: '#000000',
    titleOn: 'Test',
    titleOff: 'Test',
    toggleColor: '#6154F9',
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstSwitch({
        modeOn: true,
        bgColor: '#6154F9',
        textColor: '#ffffff',
        titleOn: 'Test',
        toggleColor: '#ffffff',
      })
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstSwitch({
        display: 'none',
      })
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div css={{ display: firstSwitch.display, transition: 'all .3s ease' }}>
      <CustomSwitch
        bgColor={firstSwitch.bgColor}
        modeOn={firstSwitch.modeOn}
        textColor={firstSwitch.textColor}
        titleOn={firstSwitch.titleOn}
        titleOff={firstSwitch.titleOff}
        toggleColor={firstSwitch.toggleColor}
      />
    </div>
  )
}

export default LandingAnimationSwitch
