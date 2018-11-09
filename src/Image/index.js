import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../theme'

const ImageStyled = styled.img`
  ${props => props.tag === 'small' &&
    css`
      width: 30px;
      height: 30px;
      position: relative;
    `}
  ${props => props.tag === 'medium' &&
    css`
      width: 50px;
      height: 50px;
      position: relative;
    `}
  ${props => props.tag === 'round' &&
    css`
      width: 55px;
      height: 55px;
      position: relative;
      border: 2px solid ${theme.black};
      border-radius: 50%;
      vertical-align: middle;
    `}
`

const Image = props => (
  <ImageStyled src={props.src} {...props} onClick={props.onClick} alt={props.alt} />
)

Image.defaultProps = {
  onClick: null,
  alt: 'UX icon',
}

Image.propTypes = {
  onClick: PropTypes.func,
  tag: PropTypes.string.isRequired,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Image
