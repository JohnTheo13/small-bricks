import React from 'react'
import { storiesOf } from '@storybook/react'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import { withKnobs, select } from '@storybook/addon-knobs'
import test from './Pagination.test'
import Pagination from './index'
import readme from './readme.md'

storiesOf('Atoms/Pagination', module).addDecorator(withKnobs)
  .add(
    'Pagination',
    withReadme(readme, () => {
      const activePage = Number(select('current page', ['1', '2', '3', '4', '5', '6', '7'], '2'))
      specs(test)
      return (
        <Col xs={8}>
          <Pagination
            prev="prev"
            next="next"
            items={7}
            activePage={activePage}
            onSelect={() => { /* no-op */ }}
          />
        </Col>
      )
    }),
  )
