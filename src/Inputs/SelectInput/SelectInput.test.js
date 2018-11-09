import { expect } from 'chai'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import { mount } from 'enzyme'
import React from 'react'
import SelectInput from './index'

const options = [{ value: 'option1' }, { value: 'option2' }, { value: 'option3' }]
const test = () => (
  describe('SelectInputs', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<SelectInput placeholder="stories" options={options} />)
    })
    it('should render an input', () =>
      expect(wrapper.find('FormControl').childAt(0).type()).to.equal('select'))
    it('should have the first item as stories', () => {
      expect(wrapper.find('select').childAt(0).props().children).to.equal('stories')
    })
    it('should be disabled if props disabled', () => {
      wrapper.setProps({ disabled: true })
      expect(wrapper.find('FormControl').childAt(0).props().disabled).to.equal(true)
    })
    it('should contain props options', () => {
      expect(wrapper.find('FormControl').childAt(0).children().length).to.equal(4)
    })
  })
)

export default test
