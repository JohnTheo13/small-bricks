import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'storybook-addon-specifications'
import Alert from './index'

const defaultTest = () => (
  describe('Alert', () => {
    const wrapper = shallow(<Alert header="header" body="body" status="info" />)
    it('should render the component', () => {
      expect(wrapper).to.exist
    })
    it('should have a success icon', () => {
      wrapper.setProps({ status: 'success' })
      expect(wrapper.find('span').children().props().src).to.include('/icon/circle_success.svg')
    })
    it('should have a error icon', () => {
      wrapper.setProps({ status: 'error' })
      expect(wrapper.find('span').children().props().src).to.include('/icon/circle_error.svg')
    })
    it('should have a info icon', () => {
      wrapper.setProps({ status: 'info' })
      expect(wrapper.find('span').children().props().src).to.include('/icon/circle_info.svg')
    })
    it('icon size should be small', () => {
      expect(wrapper.find('span').children().props().tag).to.equal('small')
    })
    it('should have a props header', () => {
      expect(wrapper.prop('header')).to.equal('header')
    })
    it('should have a props body', () => {
      expect(wrapper.prop('body')).to.equal('body')
    })
  })
)

export default defaultTest
