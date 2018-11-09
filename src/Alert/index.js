import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { P, Image, theme } from '../index'

const AlertContainer = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius};
  padding: ${theme.whitespaceS};
  font-size: ${theme.fontSizesS};
  margin-bottom: ${theme.whitespaceS};
  ${props => `border: ${theme[props.status]} 1px solid;`}
  ${props => `background-color: ${theme[`${props.status}Light`]};`}
  ${props => `color: ${theme[`${props.status}Medium`]};`}

  > span > img {
    margin-right: ${theme.whitespaceXs};
    display: inline;
  }

  > p {
    display: inline;
    ${props => `color: ${theme[`${props.status}Medium`]};`}
    border: none;
    margin-right: 5px;
    margin-bottom: 0;
  }
`

const Alert = (props) => {
  const { status } = props
  return (
    <AlertContainer {...props}>
      <span>
        <Image tag="small" alt="small feedback icon" src={`https://website-assets.imgix.net/icon/circle_${status}.svg`} />
      </span>
      {props.header && <P small bold status={props.status} >{props.header}</P>}
      {props.body && <P small status={props.status} >{props.body}</P>}
    </AlertContainer>
  )
}

Alert.defaultProps = {
  body: undefined,
  header: undefined,
  children: undefined,
}

Alert.propTypes = {
  body: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.node,
  status: PropTypes.string.isRequired,
}
export default Alert
