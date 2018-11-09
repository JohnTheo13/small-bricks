import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { withKnobs, text } from '@storybook/addon-knobs'
import withReadme from 'storybook-readme/with-readme'
import { Col } from 'react-bootstrap'
import BorderWithText from './index'
import readme from './readme.md'

const StyledCol = styled(Col)`
  margin-top: 80px;
`

storiesOf('Atoms/Borders', module).addDecorator(withKnobs)
  .add(
    'Border With text',
    withReadme(readme, () => (
      <StyledCol xs={6} >
        <BorderWithText>
          {text('text', 'hello')}
        </BorderWithText>
      </StyledCol>
    )),
  )
