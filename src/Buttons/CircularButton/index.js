import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../theme'

const ButtonStyled = styled.div`
  box-shadow: ${theme.boxShadow};
  background-color: ${theme.green};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: ${theme.fontSizeL};
  position: relative;
  text-align: center;
  color: ${theme.white};
  line-height: 43px;
  margin-bottom: ${theme.whitespaceM};
  margin-left: ${theme.whitespaceS};
  cursor: pointer;
`

const CircularButton = props => (
  <ButtonStyled
    onClick={props.onClick ? props.onClick : null}
    onKeyDown={props.onClick ? props.onClick : null}
  >
    +
  </ButtonStyled>
)

CircularButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CircularButton
