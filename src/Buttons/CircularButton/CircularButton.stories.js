import React from 'react'
import { storiesOf } from '@storybook/react'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import CircularButton from './index'
import test from './CircularButton.test'
import readme from './readme.md'

const onClick = () => { /* no-op */ }

storiesOf('Atoms/Buttons', module)
  .add(
    'Circular Button',
    withReadme(readme, () => {
      const story = (
        <Col xs={4}>
          <CircularButton
            onClick={onClick}
          />
        </Col>
      )
      specs(test)
      return story
    }),
  )
