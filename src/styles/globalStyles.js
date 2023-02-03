import React from 'react'
import emotionNormalize from 'emotion-normalize'
import {Global, css} from '@emotion/react'
import {useThemeUI} from 'theme-ui'

const Globals = props => {
  const context = useThemeUI()
  const {theme} = context
  return (
    <Global
      styles={css`
        ${emotionNormalize}

        @keyframes slideLeftOut {
          to {
            transform: translateX(-100vw) translateZ(0);
          }
        }

        @keyframes slideLeftIn {
          from {
            transform: translateX(100vw) translateZ(0);
          }
          to {
            transform: translateX(0) translateZ(0);
          }
        }

        @keyframes slideRightOut {
          to {
            transform: translateX(100vw) translateZ(0);
          }
        }

        @keyframes slideRightIn {
          from {
            transform: translateX(-100vw) translateZ(0);
          }
          to {
            transform: translateX(0) translateZ(0);
          }
        }

        @keyframes slideUpOut {
          to {
            margin-top: -100%;
          }
        }

        @keyframes slideUpIn {
          from {
            margin-top: 100vh;
          }
          to {
            margin-top: 0;
          }
        }

        @keyframes slideDownOut {
          to {
            margin-top: 100%;
          }
        }

        @keyframes slideDownIn {
          from {
            margin-top: -100vh;
          }
          to {
            margin-top: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes Gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        html {
          line-height: initial;
        }

        body {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        :root {
          --nav-size: 6rem;
          --speed: 500ms;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizelegibility;
          line-height: 1.5;
        }

        *,
        ::before,
        ::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }

        a {
          text-decoration: none !important;
          /* color: ${theme.colors.primary700}; */
        }

        .headroom {
          z-index: 999 !important;
        }

        ul {
          margin: 0;
          padding: 0;
        }

        li {
          list-style: none;
        }

        .headroom--pinned {
          box-shadow: ${theme.shadows.shadow48};
        }

        .youtubeContainer {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%;
          overflow: hidden;
        }

        canvas {
          max-width: 100%;
        }

        .youtubeContainer iframe {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        .accordion {
          border-radius: 8px;
          display: block;
          word-break: break-all;
          box-sizing: border-box;
        }

        .accordion__item + .accordion__item {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .accordion__button {
          cursor: pointer;
          padding: 18px;
          width: 100%;
          text-align: left;
          border: none;
        }

        .es-collect-btn {
          background-color: ${theme.colors.primary} !important;
        }

        .awssld {
          --content-background-color: transparent;
          --loader-bar-height: 0px;
        }

        .accordion__button:hover {
          background-color: ${theme.colors.primary};
          color: #ffffff;
        }

        .accordion__button:before {
          display: inline-block;
          content: '';
          height: 10px;
          width: 10px;
          margin-right: 12px;
          border-bottom: 2px solid currentColor;
          border-right: 2px solid currentColor;
          transform: rotate(-45deg);
        }

        .accordion__button[aria-expanded='true']::before,
        .accordion__button[aria-selected='true']::before {
          transform: rotate(45deg);
        }

        [hidden] {
          display: none;
        }

        .accordion__panel {
          word-break: break-all;
          background-color: #ffffff;
          padding: 20px;
          box-sizing: border-box;
          animation: fadein 0.2s ease-in;
        }

        @keyframes fadein {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }
        .tl-edges {
          overflow-x: unset;
        }
          
        .keen-slider {
          display: flex;
          overflow: hidden;
          position: relative;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          touch-action: pan-y;
          -webkit-tap-highlight-color: transparent;
        }
        .keen-slider__slide {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 100%;
        }
        .keen-slider[data-keen-slider-v] {
          flex-wrap: wrap;
        }
        .keen-slider[data-keen-slider-v] .keen-slider__slide {
          width: 100%;
        }
        .keen-slider[data-keen-slider-moves] * {
          pointer-events: none;
        }
      `}
    />
  )
}

export default Globals
