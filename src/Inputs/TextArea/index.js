import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormGroup } from 'react-bootstrap'
import StyledInput from '../StyledInput'
import FeedbackInput from './../FeedbackInput'

const InputExtended = StyledInput.extend`
  min-height: 150px;
  resize: none;
`

const StyledFeedback = styled(FeedbackInput)`
  height: 30px;
  position: relative;
  float: right;
  top: -150px;
  margin: 8px 0 7px;
`

const TextArea = props => (
  <FormGroup controlId="formControlsTextarea" >
    <InputExtended
      componentClass="textarea"
      type="text"
      status={props.status}
      placeholder={props.placeholder}
      disabled={props.disabled}
      {...props.input}
    />
    {props.status && !props.active && !props.disabled
      &&
        <StyledFeedback status={props.status} />
    }
  </FormGroup>
)

TextArea.defaultProps = {
  placeholder: undefined,
  disabled: undefined,
  input: undefined,
  status: undefined,
  active: undefined,
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.object,
  status: PropTypes.string,
  active: PropTypes.bool,
}

export default TextArea
