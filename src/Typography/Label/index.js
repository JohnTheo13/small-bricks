import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLabel = styled.label`
  font-family: ${props => props.theme.fontHeading};
  color: ${props => props.theme.black};
  font-weight: ${props => props.theme.fontWeightBold};
  font-size: ${props => props.theme.fontSizeXs};
  ${props => props.styled};
`

const Label = props => (
  <StyledLabel {...props} >
    {props.children}
  </StyledLabel>
)

Label.defaultProps = {
  styled: undefined,
}

Label.propTypes = {
  styled: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default Label
