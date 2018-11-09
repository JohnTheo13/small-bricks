import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled, { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { withKnobs, text, select, color } from '@storybook/addon-knobs'
import { specs } from 'storybook-addon-specifications'
import OverlayTag from './index'
import readme from './readme.md'
import test from './OverlayTag.test'
import { theme } from '../../index'

const StyledCol = styled(Col)`
  margin-top: 80px;
`

storiesOf('Atoms/Tags', module).addDecorator(withKnobs)
  .add(
    'OverlayTag',
    withReadme(readme, () => {
      specs(test)
      return (
        <ThemeProvider theme={theme}>
          <Row>
            <StyledCol xs={6}>
              <OverlayTag
                name={text('name', 'This is a tag with overlay tooltip')}
                placement={select('placement', ['bottom', 'top', 'right', 'left'], 'bottom')}
                viewBox={select('viewBox', ['0 0 11 11', '0 0 50 50'], '0 0 11 11')}
                icon={select('icon', ['stopwatch', 'star', 'email', 'chat'], 'stopwatch')}
                theme={select('theme', ['green', 'blue', 'red', 'premium', 'yellow'], 'red')}
                description={text('description', 'The prop description holds the tooltip content, it can be very long, also can contain images')}
              />
            </StyledCol>
            <StyledCol xs={6}>
              <OverlayTag
                name={text('name custom', 'This is a tag with overlay tooltip custom colors')}
                fontHover={color('fontHover', '#FDFDFD')}
                fontColor={color('fontColor', '#00C7B1')}
                placement={select('placement', ['bottom', 'top', 'right', 'left'], 'bottom')}
                viewBox={select('viewBox', ['0 0 11 11', '0 0 50 50'], '0 0 11 11')}
                icon={select('icon', ['stopwatch', 'star'], 'stopwatch')}
                description={text('description', 'The prop description holds the tooltip content, it can be very long, also can contain images')}
              />
            </StyledCol>
          </Row>
        </ThemeProvider>
      )
    }),
  )
