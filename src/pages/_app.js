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

import {GoogleAnalytics} from "nextjs-google-analytics";
import {useRouter} from "next/router";

import ReactGA from "react-ga4";
import GA4Head from '../components/GA4Head';

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

  useEffect(() => {
    const handleRouteChange = (url) => {
      `
      window.gtag('config', '${process.env.NEXT_PUBLIC_GA4_SV_ID}', {
        page_path: url,
      });
      `
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const INTERCOM_APP_ID = 'pjlmfkmx'

  return (
    <AlternateLinksContext.Provider
      value={alternateLinks}
    >
      <IntercomProvider autoBoot={true} appId={INTERCOM_APP_ID}>
        <ThemeProvider theme={theme}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="theme-color" content="#6154F9"/>
            <link rel="icon" href="/favicon.png" type="image/png"/>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
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
          <GA4Head />
          <Script
            strategy="afterInteractive"
            onLoad={() => ReactGA.initialize()}
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA4_SV_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <GoogleAnalytics trackPageViews/>
          <Component {...pageProps} />
        </ThemeProvider>
      </IntercomProvider>
    </AlternateLinksContext.Provider>
  )
}

export default appWithTranslation(App)
