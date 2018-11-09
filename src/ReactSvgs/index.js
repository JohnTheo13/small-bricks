import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PhoneIcon from './Icons/PhoneIcon'
import EmailIcon from './Icons/EmailIcon'
import HelpIcon from './Icons/HelpIcon'
import UserIcon from './Icons/UserIcon'
import ChatIcon from './Icons/ChatIcon'
import HamburgerIcon from './Icons/HamburgerIcon'
import ExitIcon from './Icons/ExitIcon'
import FlagIcon from './Icons/Flag'
import StarIcon from './Icons/StarIcon'
import StopwatchIcon from './Icons/StopwatchIcon'
import FilterIcon from './Icons/FilterIcon'
import ArrowOpen from './Icons/ArrowOpen'

const path = (name) => {
  switch (name) {
    case 'phone_icon':
      return <PhoneIcon />
    case 'email_icon':
      return <EmailIcon />
    case 'help_icon':
      return <HelpIcon />
    case 'user_icon':
      return <UserIcon />
    case 'chat_icon':
      return <ChatIcon />
    case 'hamburger_icon':
      return <HamburgerIcon />
    case 'exit_icon':
      return <ExitIcon />
    case 'flag_icon':
      return <FlagIcon />
    case 'star_icon':
      return <StarIcon />
    case 'stopwatch_icon':
      return <StopwatchIcon />
    case 'filter_icon':
      return <FilterIcon />
    case 'arrow_open':
      return <ArrowOpen />
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
