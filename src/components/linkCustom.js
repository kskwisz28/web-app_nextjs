import React, {useMemo} from 'react'
import Link from "next/link";
import {useRouter} from "next/router";

export default function LinkCustom(props) {
  const {asPath, locale} = useRouter();
  const isActive = useMemo(() => `/${locale}${asPath}` === props.to, [props.to, asPath, locale])

  return (
    <Link className={props.className} style={isActive ? props.activeStyle : undefined}
          href={props.to}>{props.children}</Link>
  )
}
