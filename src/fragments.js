import {gql} from "@apollo/client";

export const GET_SITE_SETTINGS = gql`
fragment Language on LocaleString {sv da no en}

query {
 allSiteSettings {
  headerButtonText {...Language}
  headerButtonUrl {...Language}
  headerSecondButtonText {...Language}
  headerSecondButtonUrl {...Language}
  footerLanguageTitle {...Language}
  headerBreakpoint {...Language}
  footerCopyright {...Language}
 }
}
`
