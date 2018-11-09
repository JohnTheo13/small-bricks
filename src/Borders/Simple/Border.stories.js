import React from 'react'
import { Col } from 'react-bootstrap'
import { storiesOf } from '@storybook/react'
import { withKnobs, color } from '@storybook/addon-knobs'
import withReadme from 'storybook-readme/with-readme'
import Border from './index'
import readme from './readme.md'

storiesOf('Atoms/Borders', module).addDecorator(withKnobs)
  .add(
    'Simple Border',
    withReadme(readme, () => (
      <Col style={{ marginTop: '30px' }} xs={6} >
        <Border style={{ borderBottom: `1px solid ${color('Color', '#e6e6e6')}` }} />
      </Col>
    )),
  )
