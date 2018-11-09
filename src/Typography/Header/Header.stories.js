import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Col } from 'react-bootstrap'
import { specs } from 'storybook-addon-specifications'
import withReadme from 'storybook-readme/with-readme'
import { withKnobs, select, object } from '@storybook/addon-knobs'
import test from './Header.test'
import Header from './index'
import readme from './readme.md'
import theme from '../../theme'

storiesOf('Quarks/Typography', module).addDecorator(withKnobs)
  .add(
    'Header',
    withReadme(readme, () => {
      specs(test)
      return (
        <ThemeProvider theme={theme}>
          <Col xs={12}>
            <Header tag="H1" >H1</Header>
            <Header tag="H2" >H2</Header>
            <Header tag="H3" >H3</Header>
            <Header tag="H4" >H4</Header>
            <Header tag="H5" >H5</Header>
            <Header tag="H6" >H6</Header>
            <Header
              tag={select('Head', ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'], 'H1')}
              style={object('styles', {})}
            >
              Interact with styles like {'"color":"red"'}
            </Header>
          </Col>
        </ThemeProvider>
      )
    }),
  )
