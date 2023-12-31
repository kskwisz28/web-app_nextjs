import React from 'react'
import i18next from 'i18next'
import * as ReactI18next from 'react-i18next'
import { PathCheck } from '../helpers/pathCheck'

export function wrapWithI18nProvider({ element, props }) {
  const i18n = i18next
    .createInstance({
      lng: props.pageContext.language,
      interpolation: { escapeValue: false },
      initImmediate: false,
      resources: props.pageContext.i18nResources,
    })
    .use(ReactI18next.initReactI18next)
  // noinspection JSIgnoredPromiseFromCall
  i18n.init()
  return (
    <ReactI18next.I18nextProvider i18n={i18n}>
        {/*
        TODO: Fix react helmet
        {
          <Helmet htmlAttributes={{ lang: props.pageContext.language }}>
            {props.pageContext &&
              props.pageContext.alternateLinks &&
              props.pageContext.alternateLinks.map(link => (
                <link
                  key={link.language}
                  rel="alternate"
                  hrefLang={link.language}
                  href={PathCheck(link.path)}
                />
              ))}
          </Helmet>
        }
        */}
        {element}
    </ReactI18next.I18nextProvider>
  )
}

export default wrapWithI18nProvider
