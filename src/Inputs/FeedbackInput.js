import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../theme'

const StyledSpan = styled.span`
  color: ${theme.errorMedium};
  margin-top: 5px;
`

const FeedbackInput = props => (
  <StyledSpan>
    <img className={props.className} src={`/images/icon/${props.status}.svg`} alt="validation icon" />
  </StyledSpan>
)

FeedbackInput.defaultProps = {
  className: undefined,
}

FeedbackInput.propTypes = {
  status: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default FeedbackInput
