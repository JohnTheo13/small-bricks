import React from 'react'
import { Col } from 'react-bootstrap'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import AlertModalContent from './index'
import test from './AlertModalContent.test'
import readme from './readme.md'

const onClick = () => { /* no-op */ }

storiesOf('Molecules/AlertModalContent', module).addDecorator(withKnobs)
  .add(
    'AlertModalContent',
    withReadme(readme, () => {
      specs(test)
      return (
        <Col xs={8} xsPush={2}>
          <AlertModalContent
            onClick={onClick}
            alertHeader={text('bold', 'This is bold, alertHeader!')}
            alert={text('alert', 'This contain the alert message!')}
            title={text('title', 'This is the bold title')}
            body={text('body', 'This is the body, this is the body, this is the body!')}
            buttonText={text('buttonText', 'Close')}
            status={select('status', ['success', 'info', 'error'], 'success')}
          >
            This extra part is optional, and you can add whatever you want.
          </AlertModalContent>
        </Col>
      )
    }),
  )
