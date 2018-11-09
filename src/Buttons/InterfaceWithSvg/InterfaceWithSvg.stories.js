import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import InterfaceWithSvg from './index'
import test from './InterfaceWithSvg.test'
import readme from './readme.md'


storiesOf('Atoms/Buttons', module).addDecorator(withKnobs)
  .add(
    'InterfaceWithSvg',
    withReadme(readme, () => {
      const story = (
        <Col xs={4}>
          <InterfaceWithSvg
            icon="filter_icon"
            disabled={boolean('disabled', false)}
            onClick={() => { /* no-op */ }}
            size={select('size', ['small', 'medium', 'large'], 'medium')}
          >
            button
          </InterfaceWithSvg>
        </Col>
      )
      specs(test)
      return story
    }),
  )
