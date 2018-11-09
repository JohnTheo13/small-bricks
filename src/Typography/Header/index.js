import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const H1 = css`
  font-size: ${props => props.theme.fontSizeXxxl};
  line-height: 58px;
`
const H2 = css`
  font-size: ${props => props.theme.fontSizeXxl};
  line-height: ${props => props.theme.fontSizeXxl};
`
const H3 = css`
  font-size: ${props => props.theme.fontSizeXl};
  line-height: 32px;
`
const H4 = css`
  font-size: ${props => props.theme.fontSizeL};
  line-height: ${props => props.theme.whitespaceM};
`
const H5 = css`
  font-size: ${props => props.theme.fontSizeM};
  line-height: 20px;
`
const H6 = css`
  font-size: ${props => props.theme.fontSizeS};
  line-height: 18px;
`

const headerSize = (tag) => {
  switch (tag) {
    case 'H1':
      return H1
    case 'H2':
      return H2
    case 'H3':
      return H3
    case 'H4':
      return H4
    case 'H5':
      return H5
    case 'H6':
      return H6
    default:
      return null
  }
}

const StyledHeader = styled.p`
  margin-bottom: ${props => (props.noMargin ? '0px' : props.theme.whitespaceM)};
  font-family: ${props => props.theme.fontHeading};
  line-height: 1.3em;
  margin-top: 0;
  font-weight: ${props => props.theme.fontWeightBold};
  color: ${props => props.theme.black};
  letter-spacing: 0;
  ${props => headerSize(props.tag)}
`

const Header = props => (
  <StyledHeader
    tag={props.tag}
    noMargin={props.noMargin}
    style={props.style}
    className={props.className}
  >
    {props.children}
  </StyledHeader>
)

Header.defaultProps = {
  children: undefined,
  noMargin: false,
  style: null,
  className: undefined,
}

Header.propTypes = {
  children: PropTypes.any,
  tag: PropTypes.string.isRequired,
  noMargin: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
}

export default Header
