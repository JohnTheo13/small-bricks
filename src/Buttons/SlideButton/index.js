import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { P } from '../../Typography'
import theme from '../../theme'

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 49px;
  margin: 12px 0;

  > input[type="checkbox"] {
    display: none;
  }

  > div {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => (props.on ? `${theme.successMedium}` : `${theme.grey}`)};
    transition: '.4s';
    width: 90px;
    height: 48px;
    border-radius: 34px;

    &::before {
      position: absolute;
      content: '';
      border-radius: 50%;
      height: 44px;
      width: 44px;
      right: 43px;
      bottom: 3px;
      background-color: ${theme.white};
      transition: 0.4s;
      z-index: 2;
      top: 2px;
      box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.17);
      transform: ${props => (props.on ? 'translateX(41px)' : 'translateX(-1px)')};
    }

    > p {
      position: relative;
      top: 13px;
      font-family: ${theme.fontHeading};
      font-weight: 500;
      color: ${theme.white};
      left: ${props => (props.on ? '10px' : '58px')};
    }
  }
`
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const SlideButton = props => (
  <Label {...props} >
    <input type="checkbox" onClick={props.onClick} />
    <div>
      <P noMargin>
        {props.on ? capitalize(props.textOn) : capitalize(props.textOff)}
      </P>
    </div>
  </Label>
)

SlideButton.defaultProps = {
  on: true,
  style: {},
}

SlideButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  on: PropTypes.bool,
  style: PropTypes.object,
  textOn: PropTypes.string.isRequired,
  textOff: PropTypes.string.isRequired,
}

export default SlideButton
