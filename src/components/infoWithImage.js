import EditorWrap from './editorWrap'
import SingleImage from './singleImage'

import InfoText from './infoText'


import {Flex, Box, Button} from 'theme-ui'
import Container from './container'
import Image from 'next/image'

import styled from '@emotion/styled'
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import {useMemo} from "react";

const Info = styled.div`
  .infoImg {
    box-shadow: ${p =>
  p.shadowImage ? '0px 32px 32px 0px rgba(0,0,0,.05)' : ''};
  }
`

export default function pInfoSection(props) {
  const gatsbyImages = useMemo(() => {
    if (!props.gatsbyImage) {
      return []
    }
    console.log(props.gatsbyImage)
    const builder = imageUrlBuilder({
      projectId: '7hja5omh',
      dataset: 'production',
    })
    return props.gatsbyImage.map(image => builder.image(image.asset).url())
  }, [props.gatsbyImage])

  return (
    <Info shadowImage={props.shadowImage}>
      <Box
        sx={{
          py: 4,
          bg: props.info && props.info.colorBg ? props.info.colorBg.hex : '',
          pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
          pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
        }}
      >
        <Container>
          <Flex
            sx={{
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: props.imageFirst ? 'row' : 'row-reverse',
            }}
          >
            {props.editorWrap && (
              <Box sx={{width: ['100%', null, '50%'], px: 3}}>
                <EditorWrap
                  css={{width: '100%'}}
                  windowText={props.windowText}
                >
                  <SingleImage
                    image={props.image && props.image.image}
                    noLazyLoad={props.image && props.image.noLazyLoad}
                    shadowImage={props.shadowImage}
                  />
                </EditorWrap>
              </Box>
            )}

            {!props.editorWrap && (
              <Box
                sx={{
                  width: ['100%', null, '50%'],
                  px: 2,
                }}
              >
                <SingleImage
                  image={props.image && props.image.image}
                  noLazyLoad={props.image && props.image.noLazyLoad}
                  shadowImage={props.shadowImage}
                  rounded={props.image && props.image.rounded ? '8px' : 0}
                />
              </Box>
            )}

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
              <Flex
                sx={{
                  width: ['100%', null, '50%'],
                  px: props.noPadding ? 0 : 3,
                }}
              >
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
            {gatsbyImages.length > 0 && (
              <Flex sx={{width: ['100%', null, '50%']}}>
                <Image
                  src={gatsbyImages}
                  css={{width: '100%'}}
                  className="infoImg"
                  alt={props.gasbyImageAlt}/>
              </Flex>
            )}
            <Flex
              sx={{
                width: ['100%', null, '50%'],
                py: 4,
                px: props.noPadding ? 0 : 3,
              }}
            >
              <InfoText {...props.info}>
                {props.buttonText && (
                  <Link href={props.buttonUrl ? props.buttonUrl : '/'}>
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
