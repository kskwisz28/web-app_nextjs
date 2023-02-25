import React from 'react'

import BlockContent from '@sanity/block-content-to-react'
import Container from '../components/container'

import {Flex, Box, Heading, Grid, Text} from 'theme-ui'

import serializer from '../helpers/serializers'
import OptimizedImage from "@/components/optimizedImage";

const imageHeight = 225
const circleHeight = 36
const stepGapY = [3, null, null, 4, 0]

const Step = ({heading, image, body, heroColors, index}) => {
  return (
    <Flex
      sx={{
        gridRow: [index * 2 + 2, null, null, null, 'auto'],
        gridColumn: [3, null, null, null, 'auto'],
        flexDirection: 'column',
        position: 'relative',
        marginLeft: stepGapY,
        marginBottom: [5, null, null, null, 0],
        marginTop: [0, null, null, null, 4],
      }}
    >
      <Box
        sx={{
          textAlign: [null, null, null, null, 'center'],
        }}
      >
        {heading && (
          <Heading variant="h5" color={heroColors?.theme?.text} sx={{mb: 2}}>
            {heading}
          </Heading>
        )}

        {body && (
          <Box sx={{color: heroColors?.theme?.text}}>
            <BlockContent blocks={body} serializers={serializer} hardBreak/>
          </Box>
        )}
      </Box>
    </Flex>
  )
}

export default function flex({heroColors, heading, steps, headingSize}) {
  const backgroundColor = heroColors?.theme?.background
  const stepsMap = steps || []

  return (
    <Box
      sx={{
        pt: 5,
        pb: [6, null, null, null, 6],
        backgroundColor: backgroundColor,
      }}
    >
      <Container>
        {heading && (
          <Heading
            variant={headingSize ?? 'h1'}
            as={headingSize ?? 'h1'}
            color={heroColors?.theme?.text}
            sx={{mb: 5, textAlign: 'center'}}
          >
            {heading}
          </Heading>
        )}

        <Box
          sx={{
            maxWidth: [null, null, null, null, 372 * stepsMap.length],
            margin: [null, null, null, null, 'auto'],
          }}
        >
          <Box sx={{position: 'relative'}}>
            <Grid
              sx={{
                justifyContent: 'center',
                columnGap: [0, null, null, null, 4],
                rowGap: 0,
                gridTemplateColumns: [
                  `1px ${circleHeight}px auto`,
                  null,
                  null,
                  null,
                  `repeat(${stepsMap.length}, 1fr)`,
                ],
              }}
            >
              {/* Images Start  */}
              {stepsMap &&
                stepsMap.map((step, stepIndex) => {
                  return step.image && step.image.image && step.image.image.asset ? (
                    <Box sx={{
                      paddingLeft: stepGapY,
                      marginBottom: [3, null, null, null, 4],
                    }}>
                      <Box sx={{
                        position: 'relative',
                        aspectRatio: '1.7778',
                        height: [null, null, null, null, imageHeight],
                        width: '100%',
                      }}>
                        <OptimizedImage
                          image={step.image.image}
                          fill
                          style={{
                            objectFit: 'cover',
                            borderRadius: 6,
                            gridColumn: [3, null, null, null, 'auto'],
                            gridRow: [
                              stepIndex * 2 + 1,
                              null,
                              null,
                              null,
                              'auto',
                            ],
                            overflow: 'hidden',
                          }}
                        />
                      </Box>
                    </Box>
                  ) : (
                    <Box/>
                  )
                })}
              {/* Images End  */}

              {/* Line start */}
              <Box
                sx={{
                  background: heroColors?.theme?.lightBorder,
                  height: [null, null, null, null, '1px'],
                  width: ['1px', null, null, null, 'initial'],
                  zIndex: 100,
                  gridColumn: ['1', null, null, null, '1 / -1'],
                  gridRow: [
                    `1 / span ${stepsMap.length * 2}`,
                    null,
                    null,
                    null,
                    'auto',
                  ],
                  transform: [
                    `translateX(${circleHeight / 2}px)`,
                    null,
                    null,
                    null,
                    `translateY(${circleHeight / 2}px)`,
                  ],
                }}
              />
              {/* Line End */}

              {/* Numbers Start */}
              {stepsMap &&
                stepsMap.map((_, stepIndex) => {
                  return (
                    <Flex
                      key={stepIndex}
                      sx={{
                        flexDirection: ['column', null, null, null, 'row'],
                        background: backgroundColor,
                        justifyContent: 'center',
                        alignItems: ['flex-start', null, null, null, 'center'],
                        gridRow: [
                          `${stepIndex * 2 + 1} / span 2`,
                          null,
                          null,
                          null,
                          'auto',
                        ],
                        gridColumn: [2, null, null, null, 'auto'],
                      }}
                    >
                      <Box
                        sx={{
                          background: backgroundColor,
                          height: [null, null, null, null, circleHeight],
                          width: circleHeight,
                          flex: [0.3, null, null, null, 1],
                          //   border: '3px dashed green',
                          zIndex: stepIndex ? 0 : 200,
                        }}
                      />
                      <Flex
                        sx={{
                          background: backgroundColor,
                          height: circleHeight,
                          width: circleHeight,
                          borderRadius: '50%',
                          border: `1px solid`,
                          borderColor: heroColors?.theme?.border,
                          justifyContent: 'center',
                          alignItems: 'center',
                          zIndex: 200,
                        }}
                      >
                        <Text
                          color={heroColors?.theme?.text}
                          sx={{fontWeight: 'bold', fontSize: 20}}
                        >
                          {stepIndex + 1}
                        </Text>
                      </Flex>
                      <Box
                        sx={{
                          background: backgroundColor,
                          height: [null, null, null, null, circleHeight],
                          width: circleHeight,
                          flex: 1,
                          //   border: '3px dashed red',
                          zIndex: stepIndex !== stepsMap.length - 1 ? 0 : 200,
                        }}
                      />
                    </Flex>
                  )
                })}
              {/* Numbers End */}

              {/* Text Start */}
              {stepsMap &&
                stepsMap.map((step, stepIndex) => {
                  return (
                    <Step
                      key={step._id}
                      heading={step.heading}
                      body={step.blockContent}
                      heroColors={heroColors}
                      index={stepIndex}
                    />
                  )
                })}
              {/* Text End */}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
