import React from 'react'
import { Input } from 'theme-ui'


import { Box } from 'theme-ui'

export default function ctaInput() {
  return (
    <Input
      sx={{
        maxWidth: '400px',
        py: 3,
        mt: 4,
        cursor: 'none',
        mx: 'auto',
        transition: 'all 0.3s linear',
        borderColor: 'black',
        color: 'dark300',
        background: 'rgba(255,255,255,.4)',
        textAlign: 'center',
        border: '2px solid',
        borderRadius: '8px',
        ':focus': {
          outline: 'none',
          borderColor: 'primary',
          transition: 'all 0.3s linear',
          color: 'dark',
        },
        ':focus::placeholder': {
          color: 'transparent',
          transition: 'all 0.3s linear',
        },
      }}
      placeholder="Enter your e-mail"
    />
  )
}
