import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled, { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { withKnobs, text } from '@storybook/addon-knobs'
import { specs } from 'storybook-addon-specifications'
import RatingTag from './index'
import readme from './readme.md'
import test from './RatingTag.test'
import { theme } from '../../index'

const StyledCol = styled(Col)`
  margin-top: 80px;
`

storiesOf('Atoms/Tags', module).addDecorator(withKnobs)
  .add(
    'RatingTag',
    withReadme(readme, () => {
      specs(test)
      return (
        <ThemeProvider theme={theme}>
          <Row>
            <StyledCol xs={6} xsPush={5}>
              <RatingTag rating={text('rating', '9.0')} text={text('text', 'Perfect')} />
            </StyledCol>
          </Row>
        </ThemeProvider>
      )
    }),
  )
