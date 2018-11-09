import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup } from 'react-bootstrap'
import StyledInput from '../StyledInput'

const FormControlStyled = StyledInput.extend`
  -webkit-appearance: none; /* stylelint-disable-line */
  -moz-appearance: none; /* stylelint-disable-line */
  appearance: none;
  background-image: url('https://website-assets.imgix.net/icon/arrow_up_down.svg') !important;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  background-size: 30px;
  ${props => props.status && `border: 1px solid ${props.theme[`${props.status}Medium`]};`}
`

const SelectInput = props => (
  <FormGroup controlId="formControlsSelect">
    <FormControlStyled
      disabled={props.disabled}
      type="text"
      componentClass="select"
      status={props.status}
      {...props.input}
    >
      <option value="">{props.placeholder}</option>
      {props.options.map((option, index) => (
        <option key={index} // eslint-disable-line
          value={option.value}
        >
          {option.value}
        </option>
      ))}
    </FormControlStyled>
  </FormGroup>
)

SelectInput.defaultProps = {
  type: 'text',
  placeholder: undefined,
  disabled: undefined,
  input: undefined,
  active: undefined,
  status: undefined,
}

SelectInput.propTypes = {
  type: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })).isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.object,
  active: PropTypes.bool,
  status: PropTypes.string,
}

export default SelectInput
