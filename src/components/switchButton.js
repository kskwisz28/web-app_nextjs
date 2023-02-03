import React from 'react'
import styled from '@emotion/styled'

const BaseSwitch = styled.div`
  position: relative;
  width: 210px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  input {
    display: none;
  }
`

const SwitchLabel = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  /*     border: none;   */
`

const SwitchInner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  :before,
  :after {
    display: block;
    float: left;
    width: 50%;
    height: 30px;
    padding: 0;
    line-height: 30px;
    font-size: 15px;
    color: white;
    font-family: 'Open Sans', Trebuchet, Arial, sans-serif;
    font-weight: 600;
    box-sizing: border-box;
  }
  :before {
    content: 'Marketing';
    padding-left: 10px;
    background-color: #ff8415;
    color: #ffffff;
  }
  :after {
    content: 'Marketing';
    padding-right: 10px;
    background-color: #eeeeee;
    color: #777777;
    text-align: right;
  }
`

const OnSwitch = styled.span`
  display: block;
  width: 25px;
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 4px;
  margin-right: 4px;
  background: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 176px;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
`

// .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
//   margin-left: 0;
// }
// .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
//   right: 0px;
// }

// const Switch = props => {
//   return (
//     <BaseSwitch className="onoffswitch">
//       <input
//         type="checkbox"
//         name="onoffswitch"
//         className="onoffswitch-checkbox"
//         id="myonoffswitch1"
//       />
//       <SwitchLabel className="onoffswitch-label" for="myonoffswitch1">
//         <span className="onoffswitch-inner"></span>
//         <OnSwitch className="onoffswitch-switch"></OnSwitch>
//       </SwitchLabel>
//     </BaseSwitch>
//   )
// }

export default function Switch(props) {
  return (
    <BaseSwitch className="onoffswitch">
      <input type="checkbox" />
      <SwitchLabel>
        <SwitchInner />
        <OnSwitch />
      </SwitchLabel>
    </BaseSwitch>
  )
}
