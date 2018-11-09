import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Header } from '../../index'

const Wrapper = styled.div`
  position: relative;
  background-color: ${props => props.backColor};
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
  padding: ${props => props.theme.whitespaceS};
  margin-bottom: ${props => props.theme.whitespaceXs};
  height: 46px;
  text-align: center;

  > p {
    color: ${props => props.color};
  }

  &::after {
    position: absolute;
    content: ''; /* =================================> IMPORTANT */
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 11px;
    left: 50%;
    bottom: -10px;
    margin-left: -11px;
    border-color: transparent;
    border-top-color: ${props => props.backColor};
    border-bottom-width: 0;
  }
`

const PointingTitle = props => (
  <Wrapper backColor={props.backColor} color={props.color} >
    <Header tag="H5" noMargin >
      {props.children}
    </Header>
  </Wrapper>
)

PointingTitle.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
}

export default PointingTitle
