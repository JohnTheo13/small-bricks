import { expect } from 'chai'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import React from 'react'
import { shallow } from 'enzyme'
import TextArea from './index'

const test = () => (
  describe('TextAreas', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<TextArea placeholder="stories" />)
    })
    it('should render an textarea input', () => (
      expect(wrapper.children(0).props().componentClass).to.equal('textarea')
    ))
    it('should have placeholder=stories', () => (
      expect(wrapper.children(0).props().placeholder).to.equal('stories')
    ))
    it('should be disabled', () => {
      wrapper.setProps({ disabled: true })
      expect(wrapper.children(0).props().disabled).to.equal(true)
    })
    it('should be success', () => {
      wrapper.setProps({ status: 'success' })
      expect(wrapper.props().children[0].props.status).to.equal('success')
    })
    it('should be error', () => {
      wrapper.setProps({ status: 'error' })
      expect(wrapper.props().children[0].props.status).to.equal('error')
    })
    it('should be warning', () => {
      wrapper.setProps({ status: 'warning' })
      expect(wrapper.props().children[0].props.status).to.equal('warning')
    })
  })
)

export default test
