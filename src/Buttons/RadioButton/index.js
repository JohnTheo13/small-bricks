import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../../index'

const StyledIcon = styled.img`
  height: 30px;
  margin-left: -15px;
`

const RadioButton = props => (
  <Button
    tag="secondary"
    onClick={props.disabled ? () => { /* no-ops */ } : props.onClick}
    disabled={props.disabled}
    selected={props.selected}
    size={props.size}
  >
    {props.icon &&
      <StyledIcon
        alt="button icon"
        src={props.icon}
      />
    }
    {props.children}
  </Button>
)

RadioButton.defaultProps = {
  disabled: false,
  selected: false,
  icon: undefined,
  size: 'small',
}

RadioButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  icon: PropTypes.string,
  size: PropTypes.string,
}


export default RadioButton
