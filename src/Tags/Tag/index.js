import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Icon, Header, theme } from '../../index'

const StyledTag = styled.div`
  position: absolute;
  background: transparent;
  height: 20px;
  text-align: center;
  border-radius: 2px;
  padding: 0 6px;
  ${props => css` border: 1px solid ${props.color}; `};
`

const StyledHeader = styled(Header)`
  float: left;
  color: ${props => props.color};
`

const StyledIcon = styled(Icon)`
  fill: ${props => props.color};
  float: left;
  width: 15px;
  height: 15px;
  margin-top: 1px;
  margin-right: 3px;
`

const Tag = (props) => {
  const color = props.fontColor || theme.successMedium
  const active = props.fontActive || theme.white
  return (
    <StyledTag color={props.active ? active : color}>
      {props.icon &&
        <StyledIcon viewBox="0 0 48 48" color={props.active ? active : color} name="star_icon" />
      }
      <StyledHeader tag="H6" noMargin color={props.active ? active : color}>
        {props.children}
      </StyledHeader>
    </StyledTag>
  )
}

Tag.defaultProps = {
  active: false,
  fontActive: theme.white,
  fontColor: theme.successMedium,
  icon: undefined,
}

Tag.propTypes = {
  active: PropTypes.bool,
  fontActive: PropTypes.string,
  fontColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.bool,
}

export default Tag
