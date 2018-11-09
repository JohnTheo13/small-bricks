import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormGroup } from 'react-bootstrap'
import FeedbackInput from './../FeedbackInput'
import StyledInput from '../StyledInput'

const StyledFeedback = styled(FeedbackInput)`
  height: 30px;
  position: relative;
  float: right;
  margin: -37px 0;
`

const Input = props => (
  <FormGroup>
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      autoFocus={props.autoFocus}
      maxLength={props.maxLength}
      disabled={props.disabled}
      status={props.status}
      {...props.input}
    />
    {(props.status && !props.active && !props.disabled)
      &&
        <StyledFeedback status={props.status} />
      }
  </FormGroup>
)

Input.defaultProps = {
  type: 'text',
  placeholder: undefined,
  autoFocus: undefined,
  maxLength: undefined,
  disabled: undefined,
  input: undefined,
  active: undefined,
  status: undefined,
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  input: PropTypes.object,
  active: PropTypes.bool,
  status: PropTypes.string,
}

export default Input
