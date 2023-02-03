import React from 'react'
import Link from "next/link";

export default function LinkCustom(props) {
  return (
    <Link className={props.className} style={props.activeStyle} href={props.to}>{props.children}</Link>
  )
}
