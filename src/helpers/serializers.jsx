import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import InfoSection from '../components/infoWithImage'
import InfoWithIcon from '../components/infoWithIcon'
import SingleImage from '../components/singleImage'
import CarouselLogos from '../components/carouselLogos'
import DivUpper from '../components/divTop'
import DivBottom from '../components/divBottom'
import SliderThemes from '../components/sliderThemes'
import ApiBg from '../components/apiBg'
import Container from '../components/container'
import ShowcaseFeatures from '../components/showcaseFeatures'
import TestZone from '../components/testZone'
import SyntaxHighlighter from 'react-syntax-highlighter'
import DeveloperTesting from '../components/developerTesting'

import BlockContent from '@sanity/block-content-to-react'
import serializer from '../helpers/serializers'

import {Box} from 'theme-ui'
import {Themed} from '@theme-ui/mdx'

import LinkCheck from '../components/linkCheck'
import IframeGeneral from '../components/iframeGeneral'
import InfoText from '../components/infoText'
import Button from '../components/button'
import CustomerStories from '../components/customerStories'
import GridReference from '../components/gridReference'
import Reviews from '../components/reviews'
import CTABoxButtons from '../components/ctaBoxButtons'
import PricingPlans from '../components/pricingPlans'
import FeatureList from '../components/featureList'
import MigratePicker from '../components/migratePicker'
import GridTeam from '../components/gridTeam'
import GridTeamFull from '../components/gridTeamFull'
import ShowcaseTemplate from '../components/showcaseTemplate'
import LandingIntro from '../components/landingIntro'
import GradientSection from '../components/gradientSection'
import IntroDevice from '../components/introDevice'
import ShowcaseIntegrations from '../components/showcaseIntegrations'
import QBSteps from '../components/qbSteps'
import LinkWithArrow from '../components/linkWithArrow'
import MigrateOptions from '../components/migrateOptions'
import BoxInfo from '../components/boxInfo'
import FacebookPage from '../components/facebookPage'
import FormContact from '../components/formContact'
import ContainedSize from '../components/containedSize'
import Accordion from '../components/accordion'
import SocialIcons from '../components/socialIcons'
import Hero from '../components/hero'
import Thumbnails from '../components/thumbnails'
import Stepper from '../components/stepper'
import ImageCTAs from '../components/imageCTAs'
import ImageGrid from '../components/imageGrid'
import Testimonials from '../components/testimonials'
import StatsGrid from '../components/statsGrid'
import IconGrid from '../components/iconGrid'
import Divider from '../components/divider'
import CallToActionBox from '../components/callToActionBox'
import AccordionList from '../components/accordionList'

// import IntroInfo from '../components/introInfo'
import CarouselShops from '../components/carouselShops'

import Grid from '../components/grid'
import Flex from '../components/flex'
import ResponsiveRow from '../layouts/responsiveRow'
import FormReseller from '../components/formReseller'
import BoxedArea from '../components/boxedArea'

import StartHero from '../components/startHero'
import OptimizedImage from '../components/optimizedImage'
import StartTab from "@/components/startTab";
import IntegrationsBasic from "@/components/integrationsBasic";
import SliderGeneral from "@/components/sliderGeneral";
import Editor from "@/components/editor";

const serializers = {
  listItem: props => (
    <li css={{listStyleType: 'disc', listStylePosition: 'inside'}}>
      {props.children}
    </li>
  ),
  marks: {
    link: ({children, mark}) =>
      mark.blank ? (
        <Themed.a href={mark.href} target="_blank" rel="noopener noreferrer">
          {children}
        </Themed.a>
      ) : (
        <LinkCheck to={mark.href}>{children}</LinkCheck>
      ),
    highlight: ({children}) => (
      <Box p={2} bg="light300" css={{borderRadius: '8px'}}>
        {children}
      </Box>
    ),
  },
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <Themed.h1>{props.children}</Themed.h1>
        case 'h2':
          return <Themed.h2>{props.children}</Themed.h2>
        case 'h3':
          return <Themed.h3>{props.children}</Themed.h3>
        case 'h4':
          return <Themed.h4>{props.children}</Themed.h4>
        case 'h5':
          return <Themed.h5>{props.children}</Themed.h5>
        case 'h6':
          return <Themed.h6>{props.children}</Themed.h6>
        case 'blockquote':
          return <Themed.blockquote>{props.children}</Themed.blockquote>
        case 'image':
          return <p>Works</p>
        default:
          return <Themed.p>{props.children}</Themed.p>
      }
    },
    image: ({node}) => {
      return <OptimizedImage image={node}/>
    },
    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return <YouTube videoId={id} containerClassName={'youtubeContainer'}/>
    },
    accordion: ({node}) => {
      return <Accordion {...node} />
    },
    infoSection: ({node}) => {
      return <InfoSection {...node} />
    },
    infoWithIcon: ({node}) => {
      return <InfoWithIcon {...node} />
    },
    integrationsBasic: ({node}) => <IntegrationsBasic {...node}/>,
    boxedArea: ({node}) => {
      return <BoxedArea {...node} />
    },
    logoList: ({node}) => {
      return <CarouselLogos {...node} />
    },
    // introInfo: ({ node }) => {
    //   return <IntroInfo {...node} />
    // },
    button: ({node}) => {
      return <Button {...node} />
    },
    editor: ({node}) => <Editor {...node}/>,
    code: ({node = {}}) => {
      const {code, language} = node
      if (!code) {
        return null
      }
      return (
        <SyntaxHighlighter language={language || 'text'}>
          {code}
        </SyntaxHighlighter>
      )
    },
    testZone: ({node}) => {
      return <TestZone {...node} />
    },
    containedSize: ({node}) => {
      return <ContainedSize {...node} />
    },
    developerTesting: ({node}) => {
      return <DeveloperTesting {...node} />
    },
    sliderShops: ({node}) => {
      return <CarouselShops {...node} />
    },
    sliderGeneral: ({node}) => <SliderGeneral {...node}/>,
    infoText: ({node}) => {
      return (
        <InfoText
          textVariant={node.textVariant}
          centered={node.centered}
          {...node}
        />
      )
    },
    singleImage: ({node}) => {
      return node.containedWidth ? (
        <Box
          sx={{
            bg: node.colorBg ? node.colorBg.hex : '',
            pt: node.padding && node.padding.top,
            pb: node.padding && node.padding.bottom,
          }}
        >
          <Container>
            <SingleImage {...node} />
          </Container>
        </Box>
      ) : (
        <Box
          sx={{
            bg: node.colorBg ? node.colorBg.hex : '',
            pt: node.padding && node.padding.top,
            pb: node.padding && node.padding.bottom,
          }}
        >
          <SingleImage {...node} />
        </Box>
      )
    },
    illustration: ({node}) => {
      return node.containedWidth ? (
        <Box
          sx={{
            bg: node.colorBg ? node.colorBg.hex : '',
            pt: node.padding && node.padding.top,
            pb: node.padding && node.padding.bottom,
            maxWidth: node.maxWidth ? node.maxWidth : '',
            mx: node.centered ? 'auto' : '',
          }}
        >
          <Container>
            <OptimizedImage image={node.image ? node.image : node} />
          </Container>
        </Box>
      ) : (
        <Box
          sx={{
            bg: node.colorBg ? node.colorBg.hex : '',
            pt: node.padding && node.padding.top,
            pb: node.padding && node.padding.bottom,
            maxWidth: node.maxWidth ? node.maxWidth : '',
            mx: node.centered ? 'auto' : '',
          }}
        >
          <OptimizedImage image={node.image ? node.image : node} />
        </Box>
      )
    },
    backgroundApi: ({node}) => {
      return <ApiBg {...node} />
    },
    customerStories: ({node}) => {
      return <CustomerStories {...node} />
    },
    gridReference: ({node}) => {
      return <GridReference {...node} />
    },
    reviews: ({node}) => {
      return <Reviews {...node} />
    },
    iframeGeneral: ({node}) => {
      return <IframeGeneral {...node} />
    },
    ctaBoxButtons: ({node}) => {
      return <CTABoxButtons {...node} />
    },
    socialIcons: ({node}) => {
      return <SocialIcons {...node} />
    },
    pricingPlan: ({node}) => {
      return <PricingPlans {...node} />
    },
    featureList: ({node}) => {
      return <FeatureList {...node} />
    },
    migratePicker: ({node}) => {
      return <MigratePicker {...node} />
    },
    gridTeam: ({node}) => {
      return <GridTeam {...node} />
    },
    gridTeamFull: ({node}) => {
      return <GridTeamFull {...node} />
    },
    showcaseTemplate: ({node}) => {
      return <ShowcaseTemplate {...node} />
    },
    landingIntro: ({node}) => {
      return <LandingIntro {...node} />
    },
    gradientSection: ({node}) => {
      return <GradientSection {...node} />
    },
    uiAdmin: ({node}) => {
      return <IntroDevice {...node} />
    },
    showcaseIntegrations: ({node}) => {
      return <ShowcaseIntegrations {...node} />
    },
    infoSteps: ({node}) => {
      return <QBSteps {...node} />
    },
    formContact: ({node}) => {
      return <FormContact {...node} />
    },
    formReseller: ({node}) => {
      return <FormReseller {...node} />
    },
    // a: ({ node }) => {
    //   return <CarouselShops {...node} />
    // },
    linkWithArrow: ({node}) => {
      return <LinkWithArrow {...node} />
    },
    migrateOptions: ({node}) => {
      return <MigrateOptions {...node} />
    },
    showcaseFeatures: ({node}) => {
      return <ShowcaseFeatures {...node} />
    },
    sliderThemes: ({node}) => {
      return <SliderThemes {...node} />
    },
    boxInfo: ({node}) => {
      return <BoxInfo {...node} />
    },
    facebookPage: ({node}) => {
      return <FacebookPage {...node} />
    },
    grid: ({node}) => {
      return <Grid {...node} />
    },
    flex: ({node}) => {
      return <Flex {...node} />
    },
    gridBlockContent: ({node}) => {
      return (
        <BlockContent blocks={node.body} serializers={serializer} hardBreak/>
      )
    },
    flexBlockContent: ({node}) => {
      return (
        <BlockContent blocks={node.body} serializers={serializer} hardBreak/>
      )
    },
    divTop: ({node}) => {
      return <DivUpper {...node} />
    },
    divBottom: ({node}) => {
      return <DivBottom {...node} />
    },
    hero: ({node}) => {
      return <Hero {...node} />
    },
    startHero: ({node}) => {
      return <StartHero {...node} />
    },
    startTab: ({node}) => <StartTab {...node}/>,
    // Layouts
    responsiveRow: ({node}) => {
      return <ResponsiveRow {...node} />
    },
    responsiveRowContent: ({node}) => {
      return (
        <BlockContent blocks={node.body} serializers={serializer} hardBreak/>
      )
    },
    thumbnails: ({node}) => {
      return <Thumbnails {...node} />
    },
    stepper: ({node}) => {
      return <Stepper {...node} />
    },
    imageCTAs: ({node}) => {
      return <ImageCTAs {...node} />
    },
    imageGrid: ({node}) => {
      return <ImageGrid {...node} />
    },
    testimonials: ({node}) => {
      return <Testimonials {...node} />
    },
    statsGrid: ({node}) => {
      return <StatsGrid {...node} />
    },
    iconGrid: ({node}) => {
      return <IconGrid {...node} />
    },
    divider: ({node}) => {
      return <Divider {...node} />
    },
    callToActionBox: ({node}) => {
      return <CallToActionBox {...node} />
    },
    accordionList: ({node}) => {
      return <AccordionList {...node} />
    },
  },
}

export default serializers
