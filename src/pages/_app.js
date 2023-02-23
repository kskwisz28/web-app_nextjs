import {appWithTranslation} from "next-i18next";
import {ThemeProvider} from "theme-ui";
import theme from "@/gatsby-plugin-theme-ui/index"
import {createContext, useEffect, useMemo} from "react";
import {isHomepage} from "@/helpers/general";
import {IntercomProvider} from "react-use-intercom";
import Head from "next/head";

export const AlternateLinksContext = createContext([])

function App({Component, pageProps}) {
  const alternateLinks = useMemo(() => {
    if (!pageProps.page || !pageProps.page.alternativePages) {
      return []
    }
    return pageProps.page.alternativePages
      .filter(d => d?.slug?.current && d?.language)
      .map(link => {
        const path = isHomepage(link.slug.current) ? '' : link.slug.current
        return {
          language: link.language,
          path: `/${path}`
        }
      })
  }, [pageProps.page])

  useEffect(() => {
    window.WebFontConfig = {
      typekit: {id: 'ymn7npe'}
    };

    (function (d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
    })(document);
  })

  const INTERCOM_APP_ID = 'pjlmfkmx'

  return (
    <AlternateLinksContext.Provider
      value={alternateLinks}
    >
      <IntercomProvider autoBoot={true} appId={INTERCOM_APP_ID}>
        <ThemeProvider theme={theme}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </IntercomProvider>
    </AlternateLinksContext.Provider>
  )
}

export default appWithTranslation(App)
