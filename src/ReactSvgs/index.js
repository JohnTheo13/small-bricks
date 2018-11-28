import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import HamburgerIcon from './Icons/HamburgerIcon'
import ExitIcon from './Icons/ExitIcon'
import FlagIcon from './Icons/Flag'
import StarIcon from './Icons/StarIcon'
import StopwatchIcon from './Icons/StopwatchIcon'
import FilterIcon from './Icons/FilterIcon'
import ArrowOpen from './Icons/ArrowOpen'
import { Info, Error, Success, Warning } from './OutLined'
import {
  ARROW_OPEN,
  HAMBURGER_ICON,
  EXIT_ICON,
  FLAG_ICON,
  STAR_ICON,
  STOPWATCH_ICON,
  FILTER_ICON,
  SUCCESS,
  WARNING,
  INFO,
  ERROR,
} from './IconNames'

const path = (name) => {
  switch (name) {
    case HAMBURGER_ICON:
      return <HamburgerIcon />
    case EXIT_ICON:
      return <ExitIcon />
    case FLAG_ICON:
      return <FlagIcon />
    case STAR_ICON:
      return <StarIcon />
    case STOPWATCH_ICON:
      return <StopwatchIcon />
    case 'filter_icon':
      return <FilterIcon />
    case ARROW_OPEN:
      return <ArrowOpen />
    case ERROR:
      return <Error />
    case INFO:
      return <Info />
    case WARNING:
      return <Warning />
    case SUCCESS:
      return <Success />
    default:
      return null
  }
}

const StyledSvg = styled.svg`
  fill: ${props => props.color};
`

const SimpleSvg = props => (
  <StyledSvg version="1.1" x="0px" y="0px" // eslint-disable-line
    viewBox={props.viewBox} style={props.style} // eslint-disable-line
    color={props.color}
    className={props.className}
    onClick={props.onClick} onMouseOver={props.onMouseOver} // eslint-disable-line
    onMouseOut={props.onMouseOut} // eslint-disable-line
    height={props.viewBox.split(' ')[3]} // eslint-disable-line
  >
    {path(props.name)}
  </StyledSvg>
)

SimpleSvg.defaultProps = {
  viewBox: undefined,
  style: undefined,
  onClick: undefined,
  name: undefined,
  onMouseOver: undefined,
  onMouseOut: undefined,
  className: undefined,
  color: undefined,
}

SimpleSvg.propTypes = {
  viewBox: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  name: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  color: PropTypes.string,
  className: PropTypes.string,
}

const Icon = props => (
  <SimpleSvg className={props.className} // eslint-disable-line
    onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} // eslint-disable-line
    name={props.name} style={props.style} color={props.color} viewBox={props.viewBox} // eslint-disable-line
  />
)

Icon.defaultProps = {
  onClick: undefined,
  style: undefined,
  viewBox: '0 0 50 50',
  onMouseOver: undefined,
  onMouseOut: undefined,
  className: undefined,
  color: undefined,
}

Icon.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  /** function NOT an object that controls the hover animation of the svg */
  style: PropTypes.func,
  color: PropTypes.string,
  viewBox: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
}

export default Icon
