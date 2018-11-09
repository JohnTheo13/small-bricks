import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import RadioButton from './index'
import test from './RadioButton.test'
import readme from './readme.md'

const onClick = () => { /* no-op */ }

storiesOf('Atoms/Buttons', module).addDecorator(withKnobs)
  .add(
    'RadioButton',
    withReadme(readme, () => {
      const story = (
        <Col xs={4}>
          <RadioButton
            disabled={boolean('disabled', false)}
            selected={boolean('selected', false)}
            size={select('size', ['small', 'medium', 'large'], 'small')}
            onClick={onClick}
          >
            Radio Button
          </RadioButton>
        </Col>
      )
      specs(test)
      return story
    }),
  )
