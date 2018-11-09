import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { withKnobs, boolean, color, text } from '@storybook/addon-knobs'
import { specs } from 'storybook-addon-specifications'
import Tag from './index'
import readme from './readme.md'
import { theme } from '../../index'
import test from './Tag.test'

storiesOf('Atoms/Tags', module).addDecorator(withKnobs)
  .add(
    'Simple Tag',
    withReadme(readme, () => {
      specs(test)
      return (
        <Row>
          <Col
            style={{
              marginTop: '80px',
              backgroundColor: theme.grey,
              padding: '50px',
              borderRadius: theme.borderRadius,
            }}
            xs={2}
            xsPush={4}
          >
            <Tag
              fontColor={color('font color', theme.successMedium)}
              fontActive={color('active color', theme.white)}
              active={boolean('active', false)}
              icon={boolean('with icon', true)}
            >
              {text('text1', '9.0')}
            </Tag>
          </Col>
        </Row>
      )
    }),
  )
