import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import InteractiveTab from './index'
import test from './test'
import readme from './readme.md'
import { theme } from '../../index'

storiesOf('Atoms/Tabs', module).addDecorator(withKnobs)
  .add(
    'Interactive tab',
    withReadme(readme, () => {
      specs(test)
      return (
        <ThemeProvider theme={theme}>
          <Col xs={7} >
            <InteractiveTab active={boolean('active', false)} onClick={() => { /* no-op */ }} >
              {text('text', 'Hello Sweety')}
            </InteractiveTab>
          </Col>
        </ThemeProvider>
      )
    }),
  )
