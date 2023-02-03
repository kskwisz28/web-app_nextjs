import React from 'react';

import { jsx, Box } from 'theme-ui'

export default function DivBottom(props) {
  const Divider = props => (
    <Box bg={props.colorBg}>
      <svg
        style={{ display: 'block', margin: '-1px 0' }}
        width="100%"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H1440V66L0 320V0Z"
          fill={props.bgColor ? props.bgColor : '#F7F9FD'}
        />
        <g
          style={{ mixBlendMode: props.multiply ? 'multiply' : '' }}
          opacity="0.8"
        >
          <path
            d="M1030.45 106.13L1439.52 34V98.9873L1041.56 169.158C1024.16 172.227 1007.56 160.605 1004.49 143.201C1001.42 125.796 1013.04 109.199 1030.45 106.13Z"
            fill={
              props.symbolUpper &&
              props.symbolUpper.colorSelection &&
              props.symbolUpper.colorSelection.value
                ? props.symbolUpper.colorSelection.value
                : '#CEFACF'
            }
          />
        </g>
        <path
          opacity="0.8"
          d="M1439.52 66L1286.14 93.044C1268.74 96.1129 1257.12 112.71 1260.19 130.115C1263.26 147.519 1279.85 159.141 1297.26 156.072L1439.52 130.987V66Z"
          fill={
            props.symbolLower &&
            props.symbolLower.colorSelection &&
            props.symbolLower.colorSelection.value
              ? props.symbolLower.colorSelection.value
              : '#DFF6FD'
          }
        />
      </svg>
    </Box>
  )

  const ColoredDivider = props => {
    let { bgVariant } = props
    switch (bgVariant) {
      case '1':
        return <Divider bgColor="#ffffff" colorBg="#f7f8fc" {...props} />
      case '2':
        return <Divider bgColor="#ffffff" colorBg="#362F4A" {...props} />
      case '3':
        return <Divider bgColor="#f7f8fc" colorBg="#ffffff" {...props} />
      case '4':
        return <Divider bgColor="#f7f8fc" colorBg="#362F4A" {...props} />
      case '5':
        return <Divider bgColor="#362F4A" colorBg="#ffffff" {...props} />
      case '6':
        return <Divider bgColor="#362F4A" colorBg="#f7f8fc" {...props} />
      default:
        return <Divider {...props} />
    }
  }

  // return <ColoredDivider {...props} />

  return <React.Fragment />
}
