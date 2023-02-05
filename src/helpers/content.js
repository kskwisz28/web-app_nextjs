import {gql} from "@apollo/client";

export const LOCALIZATION_FRAGMENT = gql`
fragment Language on LocaleString {
 sv
 da
 no
 en
}

fragment LanguageText on LocaleText {
 sv
 da
 no
 en
}

fragment SanityImage on Image {
 asset {
  originalFilename
  label
  title
  description
 }
 crop {
  bottom
  left
  right
  top
 }
 hotspot {
  height
  width
  x
  y
 }
}

fragment SanityLocaleImage on LocaleImage {
 sv {
  ...SanityImage
 }
 da {
  ...SanityImage
 }
 no {
  ...SanityImage
 }
 en {
  ...SanityImage
 }
}
`

export const NAVIGATION_FRAGMENT = gql`
fragment SanityLocaleMenu on MenuItem {
 menuItemExternalLink
 menuItemName
 menuItemSlug
 padding {bottom top}
}

fragment SanityNavigationMenu on NavigationMenu {
 menuName {
  ...Language
 }
 menuPlacement
 menuItems {
  _key
  sv {
   ...SanityLocaleMenu
  }
  da {
   ...SanityLocaleMenu
  }
  no {
   ...SanityLocaleMenu
  }
  en {
   ...SanityLocaleMenu
  }
 }
}

fragment SanitySiteSettings on SiteSettings {
 headerButtonText {
  ...Language
 }
 headerButtonUrl {
  ...Language
 }
 headerSecondButtonText {
  ...Language
 }
 headerSecondButtonUrl {
  ...Language
 }
 footerLanguageTitle {
  ...Language
 }
 headerBreakpoint {
  ...Language
 }
 footerCopyright {
  ...Language
 }
 openGraphDefault {
  title {
   ...Language
  }
  description {
   ...LanguageText
  }
  image {
   ...SanityLocaleImage
  }
 }
}
`

export const CONTENT_FRAGMENT = gql`
  fragment Content on Page {
 content {
  ... on StartHero {
   _key
   _type
  }
  ... on Hero {
   _key
   _type
   heading
   headingSize
   blockContentRaw
   image {
    image {
     alt
     asset {
      url
     }
    }
   }
  }
  ... on TextWithImage {
   _key
   _type
  }
  ... on AccordionList {
   _key
   _type
  }
  ... on CallToActionBox {
   _key
   _type
  }
  ... on StatsGrid {
   _key
   _type
  }
  ... on Testimonials {
   _key
   _type
  }
  ... on ImageCTAs {
   _key
   _type
  }
  ... on ImageGrid {
   _key
   _type
  }
  ... on IconGrid {
   _key
   _type
  }
  ... on Stepper {
   _key
   _type
  }
  ... on Thumbnails {
   _key
   _type
  }
  ... on StartTab {
   _key
   _type
  }
  ... on SliderGeneral {
   _key
   _type
  }
  ... on PricingPlan {
   _key
   _type
  }
  ... on FeatureList {
   _key
   _type
  }
  ... on ZettleBox {
   _key
   _type
  }
  ... on Reviews {
   _key
   _type
  }
  ... on IntegrationsBasic {
   _key
   _type
  }
  ... on Editor {
   _key
   _type
  }
  ... on ShowcaseFeatures {
   _key
   _type
  }
  ... on SliderThemes {
   _key
   _type
  }
  ... on InfoSteps {
   _key
   _type
  }
  ... on FormContact {
   _key
   _type
  }
  ... on Countdown {
   _key
   _type
  }
 }
}
`;
