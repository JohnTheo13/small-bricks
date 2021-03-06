import React from 'react'
import PropTypes from 'prop-types'
import StyledPopOver from './styles'
import { P, Icon } from '../index'

const Popover = props => (
  <StyledPopOver tag={props.tag} placement={props.placement} >
    <Icon name={props.tag} viewBox="0 0 28 28" />
    <P noMargin bold>
      {props.heading}
    </P>
    {props.children}
  </StyledPopOver>
)

Popover.propTypes = {
  placement: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  tag: PropTypes.string.isRequired,
}

export default Popover
