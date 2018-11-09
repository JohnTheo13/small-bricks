import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Icon, theme } from '../index'

const StepperStyled = styled.div`
  width: 100%;
  height: ${theme.whitespaceS};
  margin-bottom: ${theme.whitespaceM};
  display: inline-flex;
`
const Circle = styled.div`
  height: ${theme.whitespaceS};
  width: ${theme.whitespaceS};
  border-radius: ${theme.whitespaceS};
  background-color: ${theme.infoMedium};
`
const Line = styled.div`
  height: 5px;
  border-radius: ${theme.borderRadius};
  width: 22%;
  margin: 3px;
  background-color: ${props => props.backolor};
`

const StyledIcon = styled(Icon)`
  margin-top: -3px;
  width: auto;
  height: 16px;
  fill: ${(props) => {
    const last = props.steps.length - 1
    return props.steps[last] ? theme.infoMedium : theme.greyMedium
  }};
`

const Stepper = props => (
  <StepperStyled>
    <Circle />
    {props.steps.map((step, i) => (
      <Line key={i} backolor={step ? theme.infoMedium : theme.greyMedium} />
    ))}
    <StyledIcon viewBox="0 0 48 48" name="flag_icon" steps={props.steps} />
  </StepperStyled>
)


Stepper.propTypes = {
  steps: PropTypes.array.isRequired,
}


export default Stepper
