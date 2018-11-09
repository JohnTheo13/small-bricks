import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { specs } from 'storybook-addon-specifications'
import Stepper from './index'
import readme from './readme.md'
import test from './Stepper.test'

const StyledCol = styled(Col)`
  margin-top: 80px;
`

storiesOf('Atoms/Stepper', module).addDecorator(withKnobs)
  .add(
    'Stepper',
    withReadme(readme, () => {
      specs(test)
      return (
        <Row>
          <StyledCol xs={6} xsPush={2}>
            <Stepper
              steps={[boolean('step1', true), boolean('step2', true), boolean('step3', false)]}
            />
            <Stepper
              steps={[boolean('step1', true), boolean('step2', true), boolean('step3', false), boolean('step4', false)]}
            />
          </StyledCol>
        </Row>
      )
    }),
  )
