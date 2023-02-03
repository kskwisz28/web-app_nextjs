import React from 'react'

import styled from '@emotion/styled'

const SpecialDivider = styled.div`
  border: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 1.8rem;
  justify-content: space-between;
  width: 3px;

  ::before {
    border-radius: 50%;
    height: 4px;
    width: 4px;
    background-color: red;
    content: '';
  }

  ::after {
    border-radius: 8px;
    height: 20px;
    background-color: red;
    content: "";
    width: 4px;
}
  }
`

export default function DividerSymbolic() {
  return <SpecialDivider></SpecialDivider>
}
