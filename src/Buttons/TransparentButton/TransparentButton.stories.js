import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import withReadme from 'storybook-readme/with-readme'
import { Col } from 'react-bootstrap'
import { specs } from 'storybook-addon-specifications'
import TransparentButton from './index'
import test from './TransparentButton.test'
import readme from './readme.md'

storiesOf('Atoms/Buttons', module).addDecorator(withKnobs)
  .add(
    'Transparent',
    withReadme(readme, () => {
      const story = (
        <Col xs={6}>
          <TransparentButton
            disabled={boolean('disabled', false)}
            onClick={() => { /* no-op */ }}
          >
            {text('text', 'Hello')}
          </TransparentButton>
        </Col>
      )
      specs(test)
      return story
    }),
  )
