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

fragment ImagePaletteSwatch on SanityImagePaletteSwatch {
 background
 foreground
 population
 title
}

fragment ImagePalette on SanityImagePalette {
 darkMuted {...ImagePaletteSwatch}
 darkVibrant {...ImagePaletteSwatch}
 dominant {...ImagePaletteSwatch}
 lightMuted {...ImagePaletteSwatch}
 lightVibrant {...ImagePaletteSwatch}
 muted {...ImagePaletteSwatch}
 vibrant {...ImagePaletteSwatch}
}

fragment ImageMetadata on SanityImageMetadata {
 blurHash
 dimensions {aspectRatio height width}
 hasAlpha
 isOpaque
 location {alt lat lng}
 lqip
 palette {...ImagePalette}
}

fragment SanityMainImage on MainImage {
 asset {
  originalFilename
  label
  title
  description
  url
  altText
  assetId
  extension
  label
  metadata {...ImageMetadata}
  mimeType
  path
  sha1hash
  size
  source {name id url}
  uploadId
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
 _key
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
fragment SanityPadding on Padding {top bottom}
fragment SanityStartTabItems on StartTabItems {
 _key
 blockContentRaw
 button1OpenNewTab
 button1Text
 button1Url
 heading
 headingSize
 heroColors {...SanityHeroColors}
 image {noLazyLoad padding {...SanityPadding} image {...SanityMainImage} }
 padding {...SanityPadding}
 reverse
 showButton
 tabName
 transparentImage
}
fragment SanityHeroColors on HeroColors {
 theme {title value}
}

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
   button1Arrow
   button1OpenNewTab
   button1Text
   button1Url
   button2Arrow
   button2OpenNewTab
   button2Text
   button2Url
   center
   heroColors {
    ...SanityHeroColors
   }
   imageFullWidth
   imageText
   reverse
   subtitle
   transparentImage
   videoAutoplay
   videoControls
   videoLoop
   videoMuted
   videoUrl
   image {
    image {...SanityMainImage}
    noLazyLoad
    padding {...SanityPadding}
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
  blockContentRaw
  button1OpenNewTab
  button1Text
  button1Url
  button1Text
  button2OpenNewTab
  button2Text
  button2Url
  heading
  headingSize
  heroColors {theme {title value}}
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
  padding {...SanityPadding}
  tab {...SanityStartTabItems}
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
