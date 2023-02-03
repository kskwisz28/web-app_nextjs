import React, { useState } from 'react'
import { motion } from 'framer-motion'

import styled from '@emotion/styled'

const Switch = styled.div`
  width: 100%;
  .switch {
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    padding: 0.4rem;
    cursor: pointer;
  }

  .switch[data-ison='true'] {
    border: none;
    justify-content: flex-end;
    .switchText {
      color: #ffffff;
    }
    .handle {
      background-color: #ffffff;
    }
    background-color: #6154F9;
  }

  .handle {
    width: 2rem;
    height: 2rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
`

export default function AnimatedSwitch(props) {
  const [isOn, setIsOn] = useState(props.activated ? props.activated : false)
  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <Switch onMouseDown={props.onClick}>
      <div
        className="switch"
        role="button"
        tabIndex={0}
        ariaLabel="Switch button for effects"
        data-ison={isOn}
        onMouseDown={toggleSwitch}
        css={{ position: 'relative' }}
      >
        <motion.div className="handle" layout transition={spring} />
        <motion.div
          className="switchText"
          css={{
            position: 'absolute',
            left: 0,
            top: '25%',
            textAlign: 'center',
            width: '100%',
          }}
        >
          {props.titleBefore}
        </motion.div>
      </div>
    </Switch>
  )
}

const spring = {
  type: 'spring',
  stiffness: 800,
  damping: 40,
}
