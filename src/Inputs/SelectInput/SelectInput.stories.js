import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Col } from 'react-bootstrap'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import readme from './readme.md'
import SelectInput from './index'
import test from './SelectInput.test'
import { theme } from '../../index'

const options = [{ value: 'option1' }, { value: 'option2' }, { value: 'option3' }]
storiesOf('Atoms/Inputs', module).addDecorator(withKnobs)
  .add(
    'SelectInput',
    withReadme(readme, () => (
      specs(test), // eslint-disable-line
        <ThemeProvider theme={theme}>
          <Col xs={6}>
            <SelectInput
              options={options}
              disabled={boolean('disable', false)}
              placeholder={text('placeholder', 'select input')}
              status={select('status', [undefined, 'success', 'error', 'warning'])}
            />
          </Col>
        </ThemeProvider>
    )),
  )
