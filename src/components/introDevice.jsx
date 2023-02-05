import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styled from '@emotion/styled'
import EditorWrap from '../components/editorWrap'
import { Image, Box } from 'theme-ui'
import Container from '../components/container'

import Dashboard from '../images/rebranding-dashboard-before.svg'
import DashboardDone from '../images/rebranding-dashboard-after-updated.svg'

import mediaqueries from '../styles/media'


import { jsx } from 'theme-ui'

gsap.registerPlugin(ScrollTrigger)

const IntroTransform = styled.div`
  transition: all ease 1600ms;
  transform: perspective(2000px) rotateX(30deg) scale3d(0.8615, 0.746, 1);
  transform-style: preserve-3d;
  ${mediaqueries.tablet`
  transform: perspective(2000px) rotateX(30deg)
  transform-style: preserve-3d;
  `}
  ${mediaqueries.desktop`
  transform: perspective(2000px) rotateX(30deg)
  transform-style: preserve-3d;
  `}
  ${mediaqueries.desktop_up`
  margin: -50px auto 0 auto;
  display: block;
`}
${mediaqueries.desktop_medium_up`
  margin: -70px auto 0 auto;
  display: block;
`}
${mediaqueries.desktop_large_up`
  margin: -120px auto 0 auto;
  display: block;
`}
  img {
    box-shadow: rgba(22, 31, 39, 0.42) 0px 60px 123px -25px,
      rgba(19, 26, 32, 0.08) 0px 35px 75px -35px;
  }
`

export default function IntroDevice(props) {
    let mainImageRef = useRef(null)
    let mainImageDoneRef = useRef(null)
    let aboveMain = useRef(null)

    useEffect(() => {
        ScrollTrigger.matchMedia({
            // desktop
            '(min-width: 1070px)': function () {
                gsap.to(mainImageRef.current, {
                    ease: 'none',
                    rotationX: -25,
                    autoAlpha: 0,
                    scale: 0.9,
                    z: 0,
                    y: 150,
                    scrollTrigger: {
                        trigger: aboveMain.current,
                        start: '-200 center',
                        end: 'top +=100',
                        markers: false,
                        scrub: 1,
                    },
                })
                gsap.to(mainImageDoneRef.current, {
                    ease: 'none',
                    rotationX: -25,
                    autoAlpha: 1,
                    scale: 0.9,
                    z: 0,
                    y: 150,
                    scrollTrigger: {
                        trigger: aboveMain.current,
                        start: '-200 center',
                        end: 'top +=100',
                        markers: false,
                        scrub: 1,
                    },
                })
            },
        })

        ScrollTrigger.matchMedia({
            // desktop
            '(max-width: 1070px)': function () {
                gsap.to(mainImageRef.current, {
                    ease: 'none',
                    rotationX: -20,
                    autoAlpha: 0,
                    z: 0,
                    scrollTrigger: {
                        trigger: aboveMain.current,
                        start: '-200 center',
                        end: 'top +=100',
                        markers: false,
                        scrub: 1,
                    },
                })
                gsap.to(mainImageDoneRef.current, {
                    ease: 'none',
                    rotationX: -20,
                    autoAlpha: 1,
                    z: 0,
                    scrollTrigger: {
                        trigger: aboveMain.current,
                        start: '-200 center',
                        end: 'top +=100',
                        markers: false,
                        scrub: 1,
                    },
                })
            },
        })
    }, [])

    return (
        <Box
            sx={{
                py: [5, null, null, null, 6],
                bg: props.colorBg ? props.colorBg.hex : '',
                pt: props.padding && props.padding.newBottom ? props?.padding?.newTop : props?.padding?.top,
                pb: props.padding && props.padding.newBottom ? props?.padding?.newBottom : props?.padding?.bottom,
            }}
        >
            <Container>
                <IntroTransform>
                    <div ref={aboveMain}></div>
                    <div ref={mainImageRef}>
                        <EditorWrap windowText="www.your-store.com/admin">
                            <Image
                                className="mainImage"
                                bg="white"
                                sx={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto',
                                    borderBottomLeftRadius: '8px',
                                    mx: 'auto',
                                }}
                                src={Dashboard}
                                alt="Quickbutik Dashboard before animation"
                            />
                        </EditorWrap>
                    </div>
                    <div
                        ref={mainImageDoneRef}
                        css={{
                            position: 'absolute',
                            top: '0',
                            width: '100%',
                            opacity: 0,
                            zIndex: -1,
                        }}
                    >
                        <EditorWrap windowText="www.your-store.com/admin">
                            <Image
                                className="mainImage"
                                bg="white"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderBottomLeftRadius: '8px',
                                    mx: 'auto',
                                }}
                                src={DashboardDone}
                                alt="Quickbutik Dashboard after animation"
                            />
                        </EditorWrap>
                    </div>
                </IntroTransform>
            </Container>
        </Box>
    )
}
