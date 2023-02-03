import { FacebookProvider, Page } from 'react-facebook'


import { jsx } from 'theme-ui'

export default function facebookPage(props) {
  return (
    <div
      sx={{
        textAlign: 'center',
        bg: props.colorBg ? props.colorBg.hex : '',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
      }}
    >
      <FacebookProvider appId="412445126707715">
        <Page href={props?.url} tabs="timeline" width="700" height="820" />
      </FacebookProvider>
    </div>
  )
}
