import { graphql } from "gatsby";

export const query = graphql`
  fragment Content on SanityPage {
    _rawContent(resolveReferences: { maxDepth: 10 })
    content {
      ... on SanityStartHero {
        _key
        _type
      }
      ... on SanityHero {
        _key
        _type
       heading
       headingSize
       _rawBlockContent(resolveReferences: { maxDepth: 10 })
       image {
        image {
          alt
          asset {
            url
          }
        }
       } 
      }
      ... on SanityTextWithImage {
        _key
        _type
      }
      ... on SanityAccordionList {
        _key
        _type
      }
      ... on SanityCallToActionBox {
        _key
        _type
      }
      ... on SanityStatsGrid {
        _key
        _type
      }
      ... on SanityTestimonials {
        _key
        _type
      }
      ... on SanityImageCTAs {
        _key
        _type
      }
      ... on SanityImageGrid {
        _key
        _type
      }
      ... on SanityIconGrid {
        _key
        _type
      }
      ... on SanityStepper {
        _key
        _type
      }
      ... on SanityThumbnails {
        _key
        _type
      }
      ... on SanityStartTab {
        _key
        _type
      }
      ... on SanitySliderGeneral {
        _key
        _type
      }
      ... on SanityPricingPlan {
        _key
        _type
      }
      ... on SanityFeatureList {
        _key
        _type
      }
      ... on SanityZettleBox {
        _key
        _type
      }
      ... on SanityReviews {
        _key
        _type
      }
      ... on SanityIntegrationsBasic {
        _key
        _type
      }
      ... on SanityEditor {
        _key
        _type
      }
      ... on SanityShowcaseFeatures {
        _key
        _type
      }
      ... on SanitySliderThemes {
        _key
        _type
      }
      ... on SanityInfoSteps {
        _key
        _type
      }
      ... on SanityFormContact {
        _key
        _type
      }
      ... on SanityCountdown {
        _key
        _type
      }
    }
  }
`;
