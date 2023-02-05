import {appWithTranslation} from "next-i18next";
import {ThemeProvider} from "theme-ui";
import theme from "@/gatsby-plugin-theme-ui/index"
import {ApolloProvider} from "@apollo/client";
import client from "../apollo-client";
import {createContext} from "react";


export const AlternateLinksContext = createContext([])

function App({Component, pageProps}) {
  const alternateLinks = pageProps.page.alternativePages
    .filter(d => d?.slug?.current && d?.language)
    .map(link => ({
      language: link.language,
      path: `/${link.slug.current}`
    }))

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
