import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'storybook-addon-specifications'
import Paragraph from './index'

const defaultTest = () => (
  describe('Paragraph', () => {
    const wrapper = shallow(<Paragraph>Test</Paragraph>)
    it('should render the component', () => {
      expect(wrapper).to.exist
    })
    it('should contain a <p> element', () => {
      expect(wrapper.dive().find('p')).to.have.length(1)
    })
  })
)

export default defaultTest
