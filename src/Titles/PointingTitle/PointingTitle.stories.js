import React from 'react'
import { storiesOf } from '@storybook/react'
import { Col } from 'react-bootstrap'
import styled, { ThemeProvider } from 'styled-components'
import withReadme from 'storybook-readme/with-readme'
import { withKnobs, color, text } from '@storybook/addon-knobs'
import { specs } from 'storybook-addon-specifications'
import PointingTitle from './index'
import readme from './readme.md'
import test from './test'
import theme from '../../theme'

const StyledCol = styled(Col)`
  margin-top: 30px;
`

storiesOf('Atoms/Titles', module).addDecorator(withKnobs)
  .add(
    'Pointing Title',
    withReadme(readme, () => {
      specs(test)
      return (
        <ThemeProvider theme={theme}>
          <StyledCol xs={8} >
            <PointingTitle backColor={color('back-color', theme.greyDark)} color={color('color', theme.white)} >
              {text('text', 'Helllloooo')}
            </PointingTitle>
          </StyledCol>
        </ThemeProvider>
      )
    }),
  )
