import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './StyledButton'

const Button = props => (
  <StyledButton
    tag={props.tag}
    size={props.size}
    noMargin={props.noMargin}
    onClick={props.disabled ? null : props.onClick}
    disabled={props.disabled}
    selected={props.selected}
  >
    {props.children}
  </StyledButton>
)

Button.defaultProps = { disabled: false, noMargin: false, selected: false }

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  tag: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  noMargin: PropTypes.bool,
  selected: PropTypes.bool,
}

export default Button
