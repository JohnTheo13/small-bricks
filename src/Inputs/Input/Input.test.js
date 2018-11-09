import { expect } from 'chai'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import { mount } from 'enzyme'
import React from 'react'
import Input from './index'

const test = () => (
  describe('Inputs', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<Input placeholder="stories" />)
    })
    it('should render an input', () =>
      expect(wrapper.find('FormControl').childAt(0).type()).to.equal('input'))
    it('should have placeholder=stories', () =>
      expect(wrapper.find('FormControl').childAt(0).prop('placeholder')).to.equal('stories'))
    it('should be disabled', () => {
      wrapper.setProps({ disabled: true })
      expect(wrapper.props().disabled).to.equal(true)
    })
    it('should have props be success', () => {
      wrapper.setProps({ status: 'success' })
      expect(wrapper.props().status).to.equal('success')
    })
    it('should be error', () => {
      wrapper.setProps({ status: 'error' })
      expect(wrapper.props().status).to.equal('error')
    })
  })
)

export default test
