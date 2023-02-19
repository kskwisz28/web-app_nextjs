import React from 'react'

import Norway from '../images/flag-no.svg'
import Sweden from '../images/flag-sv.svg'
import Denmark from '../images/flag-da.svg'
import England from '../images/flag-uk.svg'
import Image from "next/image";

export const CountryFlag = ({country}) => {
  let source = England;
  switch (country) {
    case 'sv':
      source = Sweden
      break;
    case 'no':
      source = Norway
      break;
    case 'da':
      source = Denmark
      break;
  }

  return (
    <Image
      src={source}
      alt="flag"
      style={{
        marginLeft: '0.2rem',
        marginRight: '0.2rem',
        width: '100%',
        height: 'auto',
        display: 'block',
      }}
      height={28.8}
    />
  )
}
