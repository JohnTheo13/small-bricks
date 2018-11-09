import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import Label from './index'
import readme from './readme.md'
import test from './Label.test'
import theme from '../../theme'

storiesOf('Quarks/Typography', module).addDecorator(withKnobs)
  .add(
    'Label',
    withReadme(readme, () => {
      specs(test)
      return (
        <ThemeProvider theme={theme}>
          <Col xs={4}>
            <br />
            <Label styled={object('styled', {})} >
              Label with personalized style
            </Label>
          </Col>
        </ThemeProvider>
      )
    }),
  )
