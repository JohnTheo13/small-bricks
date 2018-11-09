import React from 'react'
import { Col } from 'react-bootstrap'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import Input from './index'
import test from './Input.test'
import readme from './readme.md'

storiesOf('Atoms/Inputs', module).addDecorator(withKnobs)
  .add(
    'Input',
    withReadme(readme, () => (
      specs(test), // eslint-disable-line
        <Col xs={6} >
          <Input
            disabled={boolean('disabled', false)}
            placeholder={text('placeholder', 'stories')}
            status={select('status', [undefined, 'success', 'error', 'warning'])}
          />
        </Col>
    )),
  )
