import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'


import { jsx } from 'theme-ui'

const BaseSwitch = styled(motion.div)`
  border: 1px solid ${props => (props.borderColor ? props.borderColor : 'none')};
  background-color: ${props => (props.bgColor ? props.bgColor : '#ffffff')};
  padding: 0.5rem;
  border-radius: 100em;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-around;
  align-items: center;
  position: relative;
  font-weight: 600;
  white-space: nowrap;
  min-height: 1.1em;
  min-width: 3em;
`

const Toggle = styled(motion.span)`
  height: 1.9em;
  width: 1.9em;
  box-sizing: border-box;
  display: inline-block;
  background-color: ${props => props.toggleColor};
  border-radius: 50%;
  position: absolute;
  left: 0;
  transition: all 0.3s;
  left: 0.2rem;
  ${props =>
    props.modeOn &&
    `
    left: calc(100% - 2.1rem);
    `}
`

const SwitchLabelOn = styled(motion.label)`
  user-select: none;
  color: ${props => (props.textOnColor ? props.textOnColor : '#000000')};
  ${props =>
    !props.modeOn &&
    `
    display: none;
    `}
`

const SwitchLabelOff = styled(motion.label)`
  user-select: none;
  color: ${props => (props.textOffColor ? props.textOffColor : '#000000')};
  ${props =>
    props.modeOn &&
    `
    display: none;
    `}
`

export default function CustomSwitch(props) {
  return (
    <BaseSwitch
      transition={{ duration: 5 }}
      borderColor={props.borderColor}
      bgColor={props.bgColor}
      value="true"
    >
      <SwitchLabelOn
        transition={{ duration: 5 }}
        modeOn={props.modeOn}
        textOnColor={props.textOnColor}
      >
        {props.titleOn}
      </SwitchLabelOn>
      <Toggle
        transition={{ duration: 5 }}
        modeOn={props.modeOn}
        toggleColor={props.toggleColor}
      />
      <SwitchLabelOff
        transition={{ duration: 5 }}
        modeOn={props.modeOn}
        textOffColor={props.textOffColor}
      >
        {props.titleOff}
      </SwitchLabelOff>
    </BaseSwitch>
  )
}
