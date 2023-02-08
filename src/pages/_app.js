import {appWithTranslation} from "next-i18next";
import {ThemeProvider} from "theme-ui";
import theme from "@/gatsby-plugin-theme-ui/index"
import {ApolloProvider} from "@apollo/client";
import client from "../apollo-client";
import {createContext, useMemo} from "react";
import {isHomepage} from "@/helpers/general";


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

  return (
    <AlternateLinksContext.Provider
      value={alternateLinks}
    >
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </AlternateLinksContext.Provider>
  )
}

export default appWithTranslation(App)
