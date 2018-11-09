import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { Icon, P } from '../../index'

const colors = {
  premium: {
    font: props => props.theme.black,
    fontHover: props => props.theme.yellow,
    backgroundHover: props => props.theme.black,
    border: props => props.theme.yellow,
  },
  red: {
    font: props => props.theme.errorMedium,
    fontHover: props => props.theme.white,
    backgroundHover: props => props.theme.errorMedium,
    border: props => props.theme.errorMedium,
  },
  blue: {
    font: props => props.theme.infoMedium,
    fontHover: props => props.theme.white,
    backgroundHover: props => props.theme.infoMedium,
    border: props => props.theme.infoMedium,
  },
  green: {
    font: props => props.theme.successMedium,
    fontHover: props => props.theme.white,
    backgroundHover: props => props.theme.successMedium,
    border: props => props.theme.successMedium,
  },
  yellow: {
    font: props => props.theme.warningMedium,
    fontHover: props => props.theme.white,
    backgroundHover: props => props.theme.warningMedium,
    border: props => props.theme.warningMedium,
  },
  custom: props => (
    {
      font: props.fontColor,
      fontHover: props.fontHover,
      backgroundHover: props.fontColor,
      border: props.fontColor,
    }
  ),
}

const StyledIcon = styled(Icon)`
  width: 12px;
  height: 12px;
  float: left;
  margin-right: 6px;
`

const TagStyle = styled.div`
  display: inline-block;
  white-space: nowrap;
  border-radius: ${props => props.theme.borderRadius};
  padding: 4px 8px;
  margin-right: 6px;
  margin-top: 6px;
  padding-right: 8px;
  ${props => css` border: 1px solid ${props.color.border}; `};
  background-color: ${props => props.theme.white};

  & > p {
    color: ${props => props.color.font};
    font-size: ${props => props.theme.fontSizeXxs};
    float: left;
  }

  &:hover {
    background-color: ${props => props.color.backgroundHover};

    & > p {
      color: ${props => props.theme.white};
    }

    & > svg {
      fill: ${props => props.theme.white};
    }
  }
`

class OverlayTag extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    trigger: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
    placement: PropTypes.string,
    icon: PropTypes.string,
    theme: PropTypes.string,
    fontColor: PropTypes.string,
  }

  static defaultProps = {
    trigger: ['focus', 'hover', 'click'],
    placement: 'bottom',
    theme: 'green',
    icon: undefined,
    fontColor: undefined,
  }

  renderIcon(props, color) {
    return <StyledIcon viewBox={props.viewBox} color={color.font} name={`${props.icon}_icon`} />
  }

  renderTooltip(description) {
    return <Tooltip id="tooltip">{description}</Tooltip>
  }

  render() {
    const color = this.props.fontColor ? colors.custom(this.props) : colors[this.props.theme]
    return (
      <OverlayTrigger
        trigger={this.props.trigger}
        rootClose
        placement={this.props.placement}
        overlay={this.renderTooltip(this.props.description)}
      >
        <TagStyle color={color}>
          {this.props.icon &&
            this.renderIcon(this.props, color)
          }
          <P
            bold
            noMargin
          >{this.props.name}
          </P>
        </TagStyle>
      </OverlayTrigger>
    )
  }
}

export default OverlayTag
