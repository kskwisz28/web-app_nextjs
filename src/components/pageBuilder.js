import React from "react";
import StartHero from "./startHero";
import Hero from './hero'
import Thumbnails from './thumbnails'
import Stepper from './stepper'
import ImageCTA from './imageCTAs'
import ImageGrid from './imageGrid'
import Testimonials from './testimonials'
import StatsGrid from './statsGrid'
import IconGrid from './iconGrid'
import CallToActionBox from './callToActionBox'
import AccordionList from './accordionList'
import TextWithImage from "./textWithImage";
import StartTab from "./startTab";
import Spotlight from "./spotlight";
import SliderGeneral from "./sliderGeneral";
import PricingPlan from './pricingPlans'
import FeatureList from '../components/featureList'
import ZettleBox from '../components/zettleBox'
import Reviews from "./reviews";
import IntegrationsBasic from "./integrationsBasic"
import Editor from "./editor"
import ShowcaseFeatures from './showcaseFeatures'
import SliderThemes from './sliderThemes'
import IntroDevice from './introDevice'
import QBSteps from './qbSteps'
import FormContact from '../components/formContact'
import ShowCountdownTimer from "./countdown/showCountdownTimer";

function PageBuilder(props) {
  const { type, content } = props;

  const Components = {
    startHero: StartHero,
    hero: Hero,
    accordionList: AccordionList,
    callToActionBox: CallToActionBox,
    statsGrid: StatsGrid,
    testimonials: Testimonials,
    imageCTAs: ImageCTA,
    imageGrid: ImageGrid,
    iconGrid: IconGrid,
    stepper: Stepper,
    thumbnails: Thumbnails,
    textWithImage: TextWithImage,
    startTab: StartTab,
    spotlight: Spotlight,
    sliderGeneral: SliderGeneral,
    pricingPlan: PricingPlan,
    featureList: FeatureList,
    zettleBox: ZettleBox,
    reviews: Reviews,
    integrationsBasic: IntegrationsBasic,
    showcaseFeatures: ShowcaseFeatures,
    sliderThemes: SliderThemes,
    editor: Editor,
    infoSteps: QBSteps,
    formContact: FormContact,
    countdown: ShowCountdownTimer
  };

  return content.map((block, index) => {
    if (Components[block?._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        // Future: Instead of rawContent add ...block with only the props you need defined in content helper
        ...content[index],
        type,
      });
    }
  });
}

export default PageBuilder;
