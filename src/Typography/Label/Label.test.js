import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'storybook-addon-specifications'
import Label from './index'

const test = () => (
  describe('Label', () => {
    const wrapper = shallow(<Label>Test</Label>)
    it('should render the component', () => {
      expect(wrapper).to.exist
    })
    it('should contain a <label> element', () => {
      expect(wrapper.dive().find('label')).to.have.length(1)
    })
  })
)

export default test
