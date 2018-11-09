import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import { withKnobs, text } from '@storybook/addon-knobs'
import test from './Link.test'
import A from './index'
import readme from './readme.md'
import theme from '../theme'

storiesOf('Atoms/Link', module).addDecorator(withKnobs)
  .add(
    'Link',
    withReadme(readme, () => {
      specs(test)
      return (
        <ThemeProvider theme={theme}>
          <Col xs={8}>
            <A
              href={text('href', 'mailto:info@fixico.nl')}
              onClick={() => 'link'}
              style={{ backgroundColor: 'red' }}
            >
              {text('text', 'Cool Link')}
            </A>
          </Col>
        </ThemeProvider>
      )
    }),
  )
