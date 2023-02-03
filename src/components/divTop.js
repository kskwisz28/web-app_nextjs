import React from 'react';


import { jsx, Box } from 'theme-ui'

export default function DivUpper(props) {
  const Divider = props => (
    <Box bg={props.colorBg}>
      <svg
        width="100%"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', margin: '-1px 0' }}
      >
        <path
          d="M1440 320H0V254L1440 0V320Z"
          fill={props.bgColor ? props.bgColor : '#f7f8fc'}
        />
        <rect
          x="54.0898"
          y="179.987"
          width="328.177"
          height="64"
          rx="32"
          transform="rotate(-10 54.0898 179.987)"
          fill={
            props.symbolUpper &&
            props.symbolUpper.colorSelection &&
            props.symbolUpper.colorSelection.value
              ? props.symbolUpper.colorSelection.value
              : '#DFF6FD'
          }
        />
        <circle
          cx="425"
          cy="144"
          r="28"
          fill={
            props.symbolUpper &&
            props.symbolUpper.colorSelection &&
            props.symbolUpper.colorSelection.value
              ? props.symbolUpper.colorSelection.value
              : '#DFF6FD'
          }
        />
        <g
          style={{ mixBlendMode: props.multiply ? 'multiply' : '' }}
          opacity="0.9"
        >
          <path
            d="M0 287.627L215.752 249.584C233.156 246.515 244.778 229.918 241.709 212.514C238.64 195.109 222.043 183.488 204.638 186.557L0 222.64V287.627Z"
            fill={
              props.symbolLower &&
              props.symbolLower.colorSelection &&
              props.symbolLower.colorSelection.value
                ? props.symbolLower.colorSelection.value
                : '#E7FCE6'
            }
          />
        </g>
        <circle opacity="0.9" cx="210" cy="218" r="28" fill={'#ffffff'} />
      </svg>
    </Box>
  )

  const ColoredDivider = props => {
    let { bgVariant } = props
    switch (bgVariant) {
      case '1':
        return <Divider colorBg="#ffffff" bgColor="#f7f8fc" {...props} />
      case '2':
        return <Divider colorBg="#ffffff" bgColor="#362F4A" {...props} />
      case '3':
        return <Divider colorBg="#f7f8fc" bgColor="#ffffff" {...props} />
      case '4':
        return <Divider colorBg="#f7f8fc" bgColor="#362F4A" {...props} />
      case '5':
        return <Divider colorBg="#362F4A" bgColor="#ffffff" {...props} />
      case '6':
        return <Divider colorBg="#362F4A" bgColor="#f7f8fc" {...props} />
      default:
        return <Divider {...props} />
    }
  }

  // return <ColoredDivider {...props} />

  return <React.Fragment />
}
