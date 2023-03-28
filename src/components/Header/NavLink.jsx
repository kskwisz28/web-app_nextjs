import {Heading} from "theme-ui";
import React, {useMemo} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export default function NavLink({children, ...props}) {
  const {asPath, locale} = useRouter();
  const isActive = useMemo(() => {
    let parts = ['', locale]
    if (asPath !== '/') {
      parts.push(asPath.slice(1))
    }
    return parts.join('/') === props.href
  }, [asPath, locale, props.href])
  return (
    <Heading as="li" sx={{
      fontSize: ['30px', null, null, null, '40px', null],
      lineHeight: ['30px', null, null, null, '40px', null],
      fontWeight: '700',
      letterSpacing: '-0.05em',
    }}>
      <Link {...props} sx={{
        display: 'inline-block',
        borderBottom: isActive ? '3px solid black' : 'none',
        paddingBottom: isActive ? '1px' : '4px',
        color: isActive ? 'black' : 'grey1',
        '&:hover': {
          color: 'blurple',
          borderBottomColor: 'blurple',
        }
      }}>
        {children}
      </Link>
    </Heading>
  )
}