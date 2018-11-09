import React from 'react'
import { Col } from 'react-bootstrap'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Alert from './index'
import test from './Alert.test'
import readme from './readme.md'

storiesOf('Atoms/Alert', module).addDecorator(withKnobs)
  .add(
    'Alert',
    withReadme(readme, () => {
      specs(test)
      return (
        <Col xs={8}>
          <Alert
            header={text('header', 'This is bold!')}
            body={text('body', 'This is a notification message')}
            status={select('status', ['success', 'info', 'error'], 'success')}
          />
        </Col>
      )
    }),
  )
