import React from 'react'
import { storiesOf } from '@storybook/react'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import Button from './index'
import test from './Button.test'
import readme from './readme.md'

storiesOf('Atoms/Buttons', module).addDecorator(withKnobs)
  .add(
    'Main Button',
    withReadme(readme, () => {
      const stories = (
        <div>
          <Col xs={6} >
            <Button size="medium" tag="primary" onClick={() => null} >
              Primary Button
            </Button>
          </Col>
          <Col xs={6} >
            <Button size="medium" tag="secondary" onClick={() => null} >
              Secondary Button
            </Button>
          </Col>
          <Col xs={6} >
            <Button size="medium" tag="outlinePrimary" onClick={() => null} >
              Outline Button
            </Button>
          </Col>
          <Col xs={6} >
            <Button size="medium" tag="cta" onClick={() => null} >
              CTA Button
            </Button>
          </Col>
          <Col xs={6} >
            <Button size="medium" tag="outlineCta" onClick={() => null} >
              Outline CTA Button
            </Button>
          </Col>
          <Col xs={6} >
            <Button size="medium" tag="interfaceButton" onClick={() => null} >
              Interface Button
            </Button>
          </Col>
          <Col xs={8} >
            <Button
              onClick={() => null}
              noMargin={boolean('noMargin', true)}
              disabled={boolean('disabled', false)}
              size={select('size', ['small', 'medium', 'large'], 'medium')}
              tag={select('tag', ['primary', 'secondary', 'outlinePrimary', 'cta', 'outlineCta', 'interfaceButton'], 'primary')}
            >
              {text('text', 'Interactive Button')}
            </Button>
          </Col>
        </div>
      )
      specs(test)
      return stories
    }),
  )
