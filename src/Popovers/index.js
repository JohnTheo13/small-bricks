import React from 'react'
import PropTypes from 'prop-types'
import StyledPopOver from './styles'
import { P } from '../index'

const Popover = props => (
  <StyledPopOver tag={props.tag} placement={props.placement} >
    <span>
      <img alt="info icon" src={`https://website-assets.imgix.net/icon/circle_${props.tag}.svg`} />
    </span>
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
