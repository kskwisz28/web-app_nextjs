import React from 'react'
import styled from '@emotion/styled'

const Device = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  margin: 0rem auto;
  padding: 1rem;
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 40px 80px -20px rgba(50, 50, 93, 0.25),
    0 20px 60px -20px rgba(0, 0, 0, 0.3);
  .outline {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`

export default function DeviceFrame(props) {
  return (
    <Device>
      <div className="outline">{props.children}</div>
    </Device>
  )
}
