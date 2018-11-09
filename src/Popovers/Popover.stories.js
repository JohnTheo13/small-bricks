import React from 'react'
import { storiesOf } from '@storybook/react'
import styled, { ThemeProvider } from 'styled-components'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { withKnobs, select } from '@storybook/addon-knobs'
import { specs } from 'storybook-addon-specifications'
import Popover from './index'
import readme from './readme.md'
import test from './Popover.test'
import theme from '../theme'

const ColStyled = styled(Col)`
  margin-top: 100px;
`

const StyledDiv = styled.div`
  margin-top: 40px;
  padding: 30px;
`

storiesOf('Molecules/Popovers', module).addDecorator(withKnobs)
  .add(
    'Popovers',
    withReadme(readme, () => {
      specs(test)
      return (
        <ThemeProvider theme={theme}>
          <StyledDiv>
            <ColStyled xs={12}>
              <Popover
                placement="bottom"
                heading="success"
                tag={select('tag', ['success', 'info', 'warning', 'error'], 'success')}
              >
                Interactive
              </Popover>
            </ColStyled>
            <ColStyled xs={12}>
              <Popover
                placement="bottom"
                heading="success"
                tag="success"
              >
                Carla bottom
              </Popover>
            </ColStyled>
            <ColStyled xs={12}>
              <Popover
                placement="left"
                heading="info"
                tag="info"
              >
                Carla left
              </Popover>
            </ColStyled>
            <ColStyled xs={12}>
              <Popover
                placement="right"
                heading="warning"
                tag="warning"
              >
                Carla right
              </Popover>
            </ColStyled>
            <ColStyled xs={12}>
              <Popover
                placement="top"
                heading="error"
                tag="error"
              >
                Carla top
              </Popover>
            </ColStyled>
          </StyledDiv>
        </ThemeProvider>
      )
    }),
  )
