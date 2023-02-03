import React from 'react'
import mediaqueries from '../styles/media'
import styled from '@emotion/styled'

const HeaderGradient = styled.div`
  ${mediaqueries.tablet`
      height: 300px;
    `}
  ${mediaqueries.phone`
      height: 200px;
    `}
  position: absolute;
  height: 400px;
  width: 100%;
  z-index: -5;
  z-index: 0;
  top: -100px;
  background: linear-gradient(132deg, #362F4A, #6154F9, #F44599, #20D287);
  background-size: 400% 400%;
  animation: Gradient 60s ease infinite;
  transform: skew(0deg, -5deg);
`

export default function GradientSection() {
  return <HeaderGradient />
}
