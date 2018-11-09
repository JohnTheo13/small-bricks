import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const P = styled.p`
    margin-bottom: '14px';
    font-family: ${props => props.theme.font};
    line-height: '1.7em';
    color: ${props => props.theme.black};
    font-size: ${props => props.theme.fontSizeM};
    ${props => props.noMargin && css` margin-bottom: 0; `}
    ${props => props.bold && css` font-weight: ${props.theme.fontWeightBold}; `}
    ${props => props.grey && css` color: ${props.theme.greyDark}; `}
    ${props => props.greyMedium && css` color: ${props.theme.greyMedium}; `}
    ${props => props.small && css` font-size: ${props.theme.fontSizeS}; `}
    ${props => props.extraSmall && css` font-size: ${props.theme.fontSizeXs}; `}
  `

const Paragraph = props => (
  <P {...props}>
    {props.children}
  </P>
)

Paragraph.defaultProps = {
  className: undefined,
  small: false,
  extraSmall: false,
  bold: false,
  greyMedium: false,
  grey: false,
  noMargin: false,
  style: undefined,
  children: undefined,
}

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  small: PropTypes.bool,
  extraSmall: PropTypes.bool,
  bold: PropTypes.bool,
  greyMedium: PropTypes.bool,
  grey: PropTypes.bool,
  noMargin: PropTypes.bool,
  style: PropTypes.object,
}

export default Paragraph
