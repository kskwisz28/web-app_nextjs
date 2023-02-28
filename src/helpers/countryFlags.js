import React from 'react'

import Norway from '../images/flag-no.svg'
import Sweden from '../images/flag-sv.svg'
import Denmark from '../images/flag-da.svg'
import England from '../images/flag-uk.svg'
import Image from "next/image";

export const CountryFlag = ({country, small = false, priority}) => {
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
        width: small ? '24px' : '38.4px',
        height: 'auto',
      }}
      priority={priority}
    />
  )
}
