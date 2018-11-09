import React from 'react'
import { Col } from 'react-bootstrap'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import Field from './index'
import test from './Field.test'
import readme from './readme.md'

storiesOf('Molecules/Field', module).addDecorator(withKnobs)
  .add(
    'Field',
    withReadme(readme, () => (
      specs(test), // eslint-disable-line
        <Col xs={6}>
          <Field
            icon={select('icon', ['images/eve.png', undefined], 'images/eve.png')}
            size="small"
            label="Label"
            disabled={boolean('disabled', false)}
            placeholder={text('placeholder', 'stories')}
            status={select('status', [undefined, 'success', 'error', 'warning'])}
          />
        </Col>
    )),
  )
