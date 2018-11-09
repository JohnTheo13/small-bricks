import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'
import { Icon, theme } from '../../index'

const InterfaceButton = styled.div`
  > button {
    line-height: ${theme.whitespaceM};
    padding-right: ${theme.whitespaceS};

    > svg {
      height: 30px;
      fill: ${props => (props.hover ? theme.white : theme.green)};
      float: left;
    }
  }
`

class InterfaceWithSvg extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    iconStyle: PropTypes.object,
  }

  static defaultProps = { disabled: false, iconStyle: undefined }

  state = { hover: false }

  toggle = (val) => {
    this.setState({ hover: val })
  }

  render() {
    return (
      <InterfaceButton
        hover={!this.props.disabled && this.state.hover}
        onMouseOver={() => this.toggle(true)}
        onMouseOut={() => this.toggle(false)}
        onFocus={() => this.toggle(true)}
        onBlur={() => this.toggle(false)}
        iconStyle={this.props.iconStyle}
      >
        <Button
          noMargin
          size={this.props.size}
          tag="interfaceButton"
          onClick={this.props.disabled ? () => { /* no-ops */ } : this.props.onClick}
          disabled={this.props.disabled}
        >
          <Icon
            name={this.props.icon}
            viewBox="0 2.5 50 50"
          />
          {this.props.children}
        </Button>
      </InterfaceButton>
    )
  }
}

export default InterfaceWithSvg
