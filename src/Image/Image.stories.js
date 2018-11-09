import React from 'react'
import { storiesOf } from '@storybook/react'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { withKnobs, select, object } from '@storybook/addon-knobs'
import Image from './index'
import readme from './readme.md'

storiesOf('Atoms/Image', module).addDecorator(withKnobs)
  .add(
    'Image',
    withReadme(readme, () => (
      <div>
        <Col xs={2} >
          <Image src="images/eve.png" tag={select('tag', ['small', 'medium', 'large', 'round'], 'small')} style={object('style', {})} />
        </Col>
      </div>
    )),
  )
