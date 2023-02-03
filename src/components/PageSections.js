// import React, { useState } from 'react'
// import { graphql } from 'gatsby'

// import getYouTubeId from 'get-youtube-id'
// import YouTube from 'react-youtube'
// import InfoSection from '../components/infoWithImage'
// import InfoWithIcon from '../components/infoWithIcon'
// import SingleImage from '../components/singleImage'
// import { CarouselLogos } from '../components/carouselLogos'
// import DivUpper from '../components/divTop'
// import DivBottom from '../components/divBottom'
// import SliderThemes from '../components/sliderThemes'
// import ApiBg from '../components/apiBg'
// import Container from '../components/container'
// import TestZone from '../components/testZone'
// import SyntaxHighlighter from 'react-syntax-highlighter'

// import BlockContent from '@sanity/block-content-to-react'
// import serializer from '../helpers/serializers'

// 
// import { jsx, Box, Styled } from 'theme-ui'

// import LinkCheck from '../components/linkCheck'
// import IframeGeneral from '../components/iframeGeneral'
// import InfoText from '../components/infoText'
// import Button from '../components/button'
// import CustomerStories from '../components/customerStories'
// import GridReference from '../components/gridReference'
// import Reviews from '../components/reviews'
// import CTABoxButtons from '../components/ctaBoxButtons'
// import PricingPlans from '../components/pricingPlans'
// import FeatureList from '../components/featureList'
// import MigratePicker from '../components/migratePicker'
// import GridTeam from '../components/gridTeam'
// import GridTeamFull from '../components/gridTeamFull'
// import ShowcaseTemplate from '../components/showcaseTemplate'
// import LandingIntro from '../components/landingIntro'
// import GradientSection from '../components/gradientSection'
// import IntroDevice from '../components/introDevice'
// import ShowcaseIntegrations from '../components/showcaseIntegrations'
// import QBSteps from '../components/qbSteps'
// import LinkWithArrow from '../components/linkWithArrow'
// import MigrateOptions from '../components/migrateOptions'
// import BoxInfo from '../components/boxInfo'
// import FacebookPage from '../components/facebookPage'
// import FormContact from '../components/formContact'
// import ContainedSize from '../components/containedSize'
// import GraphQLErrorList from '../components/graphql-error-list'

// export const query = graphql`
//   query PageSections($page: String, $language: String) {
//     sanityPage(id: { eq: $page }) {
//       containerSize
//       title
//       _rawBody(resolveReferences: { maxDepth: 10 })
//       openGraph {
//         title {
//           translate(language: $language)
//         }
//         description {
//           translate(language: $language)
//         }
//         image {
//           translate(language: $language)
//         }
//       }
//     }
//     allSanityNavigationMenu {
//       edges {
//         node {
//           menuName {
//             translate(language: $language)
//           }
//           menuPlacement
//           menuItems {
//             _key
//             translate(language: $language)
//           }
//         }
//       }
//     }
//     allSanitySiteSettings {
//       edges {
//         node {
//           headerButtonText {
//             translate(language: $language)
//           }
//           headerButtonUrl {
//             translate(language: $language)
//           }
//           headerSecondButtonText {
//             translate(language: $language)
//           }
//           headerSecondButtonUrl {
//             translate(language: $language)
//           }
//           footerLanguageTitle {
//             translate(language: $language)
//           }
//           headerBreakpoint {
//             translate(language: $language)
//           }
//           footerCopyright {
//             translate(language: $language)
//           }
//           openGraph {
//             title {
//               translate(language: $language)
//             }
//             description {
//               translate(language: $language)
//             }
//             image {
//               translate(language: $language)
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const Page = props => {
//   const { data, errors } = props

//   if (errors) {
//     return (
//       <Layout>
//         <GraphQLErrorList errors={errors} />
//       </Layout>
//     )
//   }

//   const site = (data || {}).site

//   if (!site) {
//     throw new Error('Missing "Site settings"')
//   }

//   const page = data.page || data.route.page

//   const content = (page._rawContent || [])
//     .filter(c => !c.disabled)
//     .map((c, i) => {
//       let el = null
//       switch (c._type) {
//         case 'infoText':
//           el = <InfoText key={c._key} {...c} />
//           break
//         case 'infoSection':
//           el = <InfoSection key={c._key} {...c} />
//           break
//         default:
//           el = null
//       }
//       return el
//     })

//   return <div>{content}</div>
// }

// export default Page
