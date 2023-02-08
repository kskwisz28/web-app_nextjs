import {useState} from 'react'

import {Heading, Box, Button, Flex, Text} from 'theme-ui'

import {Tooltip as ReactTooltip} from 'react-tooltip';
import Container from '../components/container'
import Pricing from '../components/boxPricing'
import Item from '../components/boxListItem'

import BlockContent from '@sanity/block-content-to-react'
import serializer from '../helpers/serializers'

import styled from '@emotion/styled'

const PricingBoxes = styled.div`
  .pricing-item {
    &:hover {
      .deco-layer--1 {
        -webkit-transform: translate3d(15px, 0, 0);
        transform: translate3d(15px, 0, 0);
      }
      .deco-layer--2 {
        -webkit-transform: translate3d(-15px, 0, 0);
        transform: translate3d(-15px, 0, 0);
      }
    }
  }
  .deco-layer {
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
  }
  .pricing-deco {
    position: relative;
  }
  .pricing-deco-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`

export default function PricingPlans(props) {
  const [period, setPeriod] = useState({
    per: 'yearly',
    startup: props.priceYearlyFirst,
    startupBefore: props.priceBeforeYearlyFirst,
    standard: props.priceYearlySecond,
    standardBefore: props.priceBeforeYearlySecond,
    pro: props.priceYearlyThird,
    proBefore: props.priceBeforeYearlyThird,
  })

  return (
    <Box
      sx={{
        py: [5, null, null, null, 5],
        bg: props.colorBg ? props.colorBg.hex : 'prima',
        pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
        pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
        color: props?.heroColors?.theme?.text,
        backgroundColor: props?.heroColors?.theme?.background,
      }}
    >
      <Container>
        <Flex sx={{alignItems: 'center', flexDirection: 'column', pb: 4}}>
          <Heading
            variant={props?.headingSize ?? 'h2'}
            as={props?.headingSize ?? 'h2'}
            sx={{pb: 2}}
          >
            {props?.heading}
          </Heading>

          <BlockContent
            blocks={props?.blockContent}
            serializers={serializer}
            hardBreak
          />
        </Flex>
        <Flex
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>{props.titleWhenPaying}</Text>
          <Flex
            sx={{
              boxShadow: 'medium',
              borderRadius: '2px',
              overflow: 'hidden',
              flexWrap: ['wrap', null, 'nowrap'],
            }}
          >
            <Button
              onClick={() =>
                setPeriod({
                  per: 'monthly',
                  startup: props.priceMonthlyFirst,
                  startupBefore: props.priceBeforeMonthlyFirst,
                  standard: props.priceMonthlySecond,
                  standardBefore: props.priceBeforeMonthlySecond,
                  pro: props.priceMonthlyThird,
                  proBefore: props.priceBeforeMonthlyThird,
                })
              }
              px={4}
              bg={period.per === 'monthly' ? 'primary' : 'white'}
              color={period.per === 'monthly' ? 'white' : 'dark'}
              css={{
                borderRadius: 0,
                border: 'none',
                outline: 'none',
                width: '100%',
              }}
            >
              {props.titleMonthly}
            </Button>

            <Button
              onClick={() =>
                setPeriod({
                  per: 'quarterly',
                  startup: props.priceQuarterlyFirst,
                  startupBefore: props.priceBeforeQuarterlyFirst,
                  standard: props.priceQuarterlySecond,
                  standardBefore: props.priceBeforeQuarterlySecond,
                  pro: props.priceQuarterlyThird,
                  proBefore: props.priceBeforeQuarterlyThird,
                })
              }
              px={4}
              bg={period.per === 'quarterly' ? 'primary' : 'white'}
              color={period.per === 'quarterly' ? 'white' : 'dark'}
              css={{
                position: 'relative',
                borderRadius: 0,
                border: 'none',
                outline: 'none',
                width: '100%',
              }}
            >
              {props.titleQuarterly}
            </Button>
            <Button
              onClick={() =>
                setPeriod({
                  per: 'yearly',
                  startup: props.priceYearlyFirst,
                  startupBefore: props.priceBeforeYearlyFirst,
                  standard: props.priceYearlySecond,
                  standardBefore: props.priceBeforeYearlySecond,
                  pro: props.priceYearlyThird,
                  proBefore: props.priceBeforeYearlyThird,
                })
              }
              bg={period.per === 'yearly' ? 'primary' : 'white'}
              color={period.per === 'yearly' ? 'white' : 'dark'}
              px={4}
              css={{
                borderRadius: 0,
                border: 'none',
                outline: 'none',
                width: '100%',
              }}
            >
              {props.titleYearly}
            </Button>
          </Flex>
        </Flex>
        <Text
          color="dark300"
          py={3}
          sx={{
            textAlign: 'center',
            mx: 'auto',
            display: 'block',
            fontSize: '0.9rem !important',
          }}
        >
          {props.titleDisclaimer}
        </Text>
        <PricingBoxes>
          <Flex
            py={4}
            sx={{
              textAlign: 'center',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <Pricing
              color="raspberry"
              name={props.titleFirstPlan}
              price={period.startup}
              priceBefore={period.startupBefore}
              month={period.per === 'monthly' ? '' : props.titlePerMonth}
              infoFirst={props.infoPaymentFirst}
              infoFirstTooltip={props.infoPaymentFirstTooltip}
              infoSecond={props.infoPaymentSecond}
              infoSecondTooltip={props.infoPaymentSecondTooltip}
            >
              {props?.introFirstPlan &&
                <Text variant="smaller" css={{fontWeight: '600'}}>
                  {props?.introFirstPlan}
                </Text>
              }
              <Text variant="smaller">
                <ul sx={{px: 2, pb: 4}}>
                  {props.itemsFirstPlan &&
                    props.itemsFirstPlan.map(item => (
                      <Item key={item._key}>{item.title}</Item>
                    ))}
                </ul>
              </Text>
            </Pricing>

            <Pricing
              color="kiwi"
              name={props.titleSecondPlan}
              price={period.standard}
              priceBefore={period.standardBefore}
              month={props.titlePerMonth}
              infoFirst={props.infoPaymentFirst}
              infoFirstTooltip={props.infoPaymentFirstTooltip}
              infoSecond={props.infoPaymentSecond}
              infoSecondTooltip={props.infoPaymentSecondTooltip}
            >
              {props?.introSecondPlan &&
                <Text variant="smaller" css={{fontWeight: '600'}}>
                  {props?.introSecondPlan}
                </Text>
              }
              <Text variant="smaller">
                <ul sx={{px: 4, pb: 4}}>
                  {props.itemsSecondPlan &&
                    props.itemsSecondPlan.map(item => (
                      <Item key={item._key}>{item.title}</Item>
                    ))}
                </ul>
              </Text>
            </Pricing>

            <Pricing
              color="primary"
              name={props.titleThirdPlan}
              price={period.pro}
              priceBefore={period.proBefore}
              month={props.titlePerMonth}
              infoFirst={props.infoPaymentFirst}
              infoFirstTooltip={props.infoPaymentFirstTooltip}
              infoSecond={props.infoPaymentSecond}
              infoSecondTooltip={props.infoPaymentSecondTooltip}
            >
              {/* <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                <Flex sx={{ borderBottomLeftRadius: '2px', fontWeight: '600' }} bg="primary" px={4} py={2} color="white">-20%</Flex>
              </Box> */}
              {props?.introThirdPlan &&
                <Text variant="smaller" css={{fontWeight: '600'}}>
                  {props?.introThirdPlan}
                </Text>
              }
              <Text variant="smaller">
                <ul sx={{px: 4, pb: 4}}>
                  {props.itemsThirdPlan &&
                    props.itemsThirdPlan.map(item => (
                      <Item key={item._key}>{item.title}</Item>
                    ))}
                </ul>
              </Text>
            </Pricing>
          </Flex>
          <ReactTooltip backgroundColor="#362F4A"/>
        </PricingBoxes>
      </Container>
    </Box>
  )
}
