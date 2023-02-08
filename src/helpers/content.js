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

fragment SanityColor on Color {
 alpha
 hex
 hsl {a h s l}
 hsv {a h s v}
 rgb {a r g b}
}

fragment SanityInfoText on InfoText {
 advancedDescriptionRaw
 bgTop {...SanityColor}
 borderRadius
 buttonOpenNewTab
 buttonSecondOpenNewTab
 buttonSecondText
 buttonSecondType
 buttonSecondUrl
 buttonText
 buttonUrl
 centered
 colorBg {...SanityColor}
 colorDesc {...SanityColor}
 colorHeadline {...SanityColor}
 colorTop {...SanityColor}
 description
 heading
 headingVariant
 headline
 padding {...SanityPadding}
 subtitle
 textVariant
 topLine
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


fragment ImageAsset on SanityImageAsset {
 originalFilename
 label
 title
 description
 url
 altText
 assetId
 extension
 label
 metadata {
  ...ImageMetadata
 }
 mimeType
 path
 sha1hash
 size
 source {
  name
  id
  url
 }
 uploadId
}

fragment ImageCrop on SanityImageCrop {
 bottom
 left
 right
 top
}

fragment ImageHotspot on SanityImageHotspot {
 height
 width
 x
 y
}

fragment SanityImage on Image {
 asset {
  ...ImageAsset
 }
 crop {
  ...ImageCrop
 }
 hotspot {
  ...ImageHotspot
 }
}

fragment SanityMainImage on MainImage {
 asset {
  ...ImageAsset
 }
 crop {
  ...ImageCrop
 }
 hotspot {
  ...ImageHotspot
 }
}

fragment SanitySimpleIllustration on SimpleIllustration {
 image {
  ...SanityMainImage
 }
 noLazyLoad
 padding {
  ...SanityPadding
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

fragment SanityStartHero on StartHero {
 _key
 _type
 blockContentRaw
 button1OpenNewTab
 button1Text
 button1Url
 heading
 headingSize
 heroColors {
  ...SanityHeroColors
 }
 image {
  padding {
   ...SanityPadding
  }
  noLazyLoad
  image {
   ...SanityMainImage
  }
 }
 reverse
 subtitle
 transparentImage
}


fragment SanityPricingPlanItems on PricingPlanItems {
 _key
 title
}

fragment Content on Page {
 content {
  ... on StartHero {
   ...SanityStartHero
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
    ...SanitySimpleIllustration
   }
  }
  ... on TextWithImage {
   _key
   _type
  }
  ... on AccordionList {
   _key
   _type
   accordionItems {
    _key
    blockContentRaw
    heading
    padding {...SanityPadding}
   }
   heading
   headingSize
   heroColors {...SanityHeroColors}
   padding {...SanityPadding}
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
   heroColors {
    ...SanityHeroColors
   }
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
   blockContentRaw
   heading
   headingSize
   heroColors {
    ...SanityHeroColors
   }
   images {
    image {
     ...SanitySimpleIllustration
    }
    openNewTab
    padding {
     ...SanityPadding
    }
    url
   }
   imagesPerRow
   padding {
    ...SanityPadding
   }
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
   padding {
    ...SanityPadding
   }
   tab {
    ...SanityStartTabItems
   }
  }
  ... on SliderGeneral {
   _key
   _type
   slideTimer
   rows {
    ...SanityStartHero
   }
  }
  ... on PricingPlan {
   _key
   _type
   blockContentRaw
   heading
   headingSize
   heroColors {
    ...SanityHeroColors
   }
   infoPaymentFirst
   infoPaymentFirstTooltip
   infoPaymentSecond
   infoPaymentSecondTooltip
   introFirstPlan
   introSecondPlan
   introThirdPlan
   itemsFirstPlan {
    ...SanityPricingPlanItems
   }
   itemsSecondPlan {
    ...SanityPricingPlanItems
   }
   itemsThirdPlan {
    ...SanityPricingPlanItems
   }
   padding {
    ...SanityPadding
   }
   priceBeforeMonthlyFirst
   priceBeforeMonthlySecond
   priceBeforeMonthlyThird
   priceBeforeQuarterlyFirst
   priceBeforeQuarterlySecond
   priceBeforeQuarterlyThird
   priceBeforeYearlyFirst
   priceBeforeYearlySecond
   priceBeforeYearlyThird
   priceMonthlyFirst
   priceMonthlySecond
   priceMonthlyThird
   priceQuarterlyFirst
   priceQuarterlySecond
   priceQuarterlyThird
   priceYearlyFirst
   priceYearlySecond
   priceYearlyThird
   titleDisclaimer
   titleFirstPlan
   titleMonthly
   titlePerMonth
   titleQuarterly
   titleSecondPlan
   titleThirdPlan
   titleWhenPaying
   titleYearly
  }
  ... on FeatureList {
   _key
   _type
   blockContentRaw
   firstOptionTitle
   heading
   headingSize
   hideUnchecked
   items {
    _key
    firstOption
    secondOption
     textRight
    thirdOption
    title
   }
   padding {...SanityPadding}
   secondOptionTitle
   tableSize
   thirdOptionTitle
  }
  ... on ZettleBox {
   _key
   _type
  }
  ... on Reviews {
   _key
   _type
   info {
    ...SanityInfoText
   }
   padding {
    ...SanityPadding
   }
   reviewsText
  }
  ... on IntegrationsBasic {
   _key
   _type
   blockContentRaw
   button1Text
   button1Url
   button2Text
   button2Url
   heroColors {
    ...SanityHeroColors
   }
   integrationPicker {
    _id
    logo {
     ...SanityImage
    }
    logoAlt
    title
   }
   reverse
   title
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
