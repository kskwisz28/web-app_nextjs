import React from 'react'
import LinkCustom from './linkCustom'
import PropTypes from 'prop-types'
import {Themed} from '@theme-ui/mdx'
import Link from 'next/link'

const LinkCheck = props => {
  if (
    (props.to && props.to.startsWith('http')) ||
    (props.to && props.to.startsWith('mailto'))
  ) {
    return (
      <Link href={props.to} passHref legacyBehavior>
        <Themed.a {...props} target={props.blank ? '_blank' : ''}>
          {props.children}
        </Themed.a>
      </Link>
    )
  }

  return <LinkCustom {...props}>{props.children}</LinkCustom>
}

LinkCheck.propTypes = {
  to: PropTypes.string,
}

LinkCheck.defaultProps = {
  to: '',
}

export default LinkCheck
