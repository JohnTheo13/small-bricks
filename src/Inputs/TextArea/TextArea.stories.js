import React from 'react'
import { storiesOf } from '@storybook/react'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
import TextArea from './index'
import test from './TextArea.test'
import readme from './readme.md'

storiesOf('Atoms/Inputs', module).addDecorator(withKnobs)
  .add(
    'TextArea',
    withReadme(readme, () => (specs(test), //eslint-disable-line
      <Col xs={9}>
        <TextArea
          disabled={boolean('disable', false)}
          placeholder={text('placeholder', 'stories')}
          status={select('status', [undefined, 'success', 'error', 'warning'])}
        />
      </Col>)),
  )
