import {appWithTranslation} from "next-i18next";
import {ThemeProvider} from "theme-ui";
import theme from "@/gatsby-plugin-theme-ui/index"
import {createContext, useEffect, useMemo} from "react";
import {isHomepage} from "@/helpers/general";
import {IntercomProvider} from "react-use-intercom";
import Head from "next/head";

import * as fbq from '@/lib/fpixel'

import 'vanilla-cookieconsent/dist/cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import {setCookieConsent} from "@/lib/cookieConsent";
import Script from "next/script";

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

  useEffect(() => {
    setCookieConsent()
  }, [])


  const router = useRouter()
  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
            }}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </IntercomProvider>
    </AlternateLinksContext.Provider>
  )
}

export default appWithTranslation(App)
