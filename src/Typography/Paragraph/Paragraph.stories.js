import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, object } from '@storybook/addon-knobs'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import P from './index'
import defaultTest from './Paragraph.test'
import theme from '../../theme'
import readme from './readme.md'


storiesOf('Quarks/Typography', module).addDecorator(withKnobs)
  .add(
    'Paragraph',
    withReadme(readme, () => {
      specs(defaultTest)
      return (
        <ThemeProvider theme={theme}>
          <Col xs={4}>
            <P noMargin={boolean('noMargin', true)}>Paragraph no margin bottom</P>
            <P bold={boolean('bold', true)}>Paragraph bold</P>
            <P grey={boolean('grey', true)}>Paragraph grey</P>
            <P greyMedium={boolean('greyMedium', true)}>Paragraph greyMedium</P>
            <P>Paragraph default (fontSizeM: 16px) </P>
            <P small={boolean('small', true)}>Paragraph small (fontSizeM: 14px)</P>
            <P extraSmall={boolean('extraSmall', true)}>Paragraph extraSmall (fontSizeM: 12px)</P>
            <P
              style={object('style', { color: theme.greenDark })}
            >
              Paragraph with personalized style
            </P>
          </Col>
        </ThemeProvider>
      )
    }),
  )
