import {Link} from 'gatsby'

import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import {GatsbyImage} from "gatsby-plugin-image";
import EditorWrap from './editorWrap'

import InfoText from './infoText'


import {jsx, Flex, Box, Button, Image} from 'theme-ui'
import Container from './container'

import styled from '@emotion/styled'
import {client} from "@/sanity-client";

const Info = styled.div`
  .infoImg {
    box-shadow: ${p =>
  p.shadowImage ? '0px 32px 32px 0px rgba(0,0,0,.05)' : ''};
  }
`

const maybeImage = image => {
  let img = null
  if (image && image.disabled !== true && image.image && image.image.asset) {
    const fluidProps = getFluidGatsbyImage(
      image.image.asset._ref,
      {maxWidth: 960},
      client
    )

    img = (
      <Flex sx={{width: ['100%', null, '50%']}}>
        <Image
          src={fluidProps.src}
          alt={image.image.alt}
          sx={{p: 4}}
          className="infoImg"
        />
      </Flex>
    )
  }
  return img
}

export default function InfoSection(props) {
  if (props?.colorBg?.hex == "#1d3549" && props?.colorBg?.hex == "#2d3947") {
    props.colorBg.hex = "#302b40"
  }

  const img = maybeImage(props.image)
  return (
    <Info shadowImage={props.shadowImage}>
      <Box sx={{bg: modifiedBg ? modifiedBg : '', py: 4}}>
        <Container>
          <Flex
            sx={{
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: props.imageFirst ? 'row-reverse' : 'row',
            }}
          >
            {img}

            {props.illustration && (
              <Flex sx={{width: ['100%', null, '50%']}}>
                <Image
                  sx={{width: '100%'}}
                  src={props.illustration}
                  className="infoImg"
                ></Image>
              </Flex>
            )}

            {props.illustrationEditor && (
              <Flex sx={{width: ['100%', null, '50%'], p: 4}}>
                <div className="infoImg" css={{width: '100%'}}>
                  <EditorWrap
                    css={{width: '100%'}}
                    windowText={props.windowText}
                  >
                    <Image
                      sx={{width: '100%'}}
                      src={props.illustrationEditor}
                    ></Image>
                  </EditorWrap>
                </div>
              </Flex>
            )}

            {props.gatsbyImage && (
              <Flex sx={{width: ['100%', null, '50%']}}>
                <GatsbyImage
                  image={props.gatsbyImage}
                  css={{width: '100%'}}
                  className="infoImg"
                  alt={props.gasbyImageAlt}/>
              </Flex>
            )}

            <Flex sx={{width: ['100%', null, '50%'], p: 4}}>
              <InfoText {...props}>
                {props.buttonText && (
                  <Link to={props.buttonUrl ? props.buttonUrl : '/'}>
                    <Button
                      my="2"
                      bg={
                        props.colorButtonBg
                          ? props.colorButtonBg.hex
                          : 'primary'
                      }
                      color={
                        props.colorButtonText
                          ? props.colorButtonText.hex
                          : 'White'
                      }
                    >
                      {props.buttonText}
                    </Button>
                  </Link>
                )}
                {props.children}
              </InfoText>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Info>
  );
}
