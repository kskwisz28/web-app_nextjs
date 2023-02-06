import React from 'react'
import LinkCustom from './linkCustom'
import PropTypes from 'prop-types'
import {Themed} from '@theme-ui/mdx'

const LinkCheck = props => {
  if (
    (props.to && props.to.startsWith('http')) ||
    (props.to && props.to.startsWith('mailto'))
  ) {
    return (
      <Themed.a {...props} href={props.to} target={props.blank ? '_blank' : ''}>
        {props.children}
      </Themed.a>
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
