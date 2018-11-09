import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, Header } from '../../index'
import theme from '../../theme'

const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
  border: none;
  height: 40px;
  box-shadow: none;
  border-radius: 0;
  outline: none;
  display: inline-block;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  padding-left: ${theme.whitespaceS};
  padding-right: 0;

  > svg {
    margin-left: ${theme.whitespaceS};
    height: 100%;
    fill: ${theme.white};
  }

  > p {
    position: relative;
    color: ${theme.white};
    float: left;
    top: 8px;
    font-weight: 500;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }

  &:hover {
    background-color: ${theme.greenDark};
  }
`

const TransparentButton = props => (
  <StyledButton
    onClick={props.disabled ? null : props.onClick}
    disabled={props.disabled}
  >
    <Header
      noMargin
      tag="H5"
    >
      {props.children}
    </Header>
    <Icon name="arrow_open" />
  </StyledButton>
)

TransparentButton.defaultProps = { disabled: false }

TransparentButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default TransparentButton
