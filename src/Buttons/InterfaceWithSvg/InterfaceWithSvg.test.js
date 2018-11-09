import { expect } from 'chai'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import React from 'react'
import InterfaceWithSvg from './index'

const test = () => (
  describe('InterfaceWithSvg default', () => {
    let wrapper
    let onClick = () => { /* no-op */ }
    beforeEach(() => {
      onClick = sinon.spy()
      wrapper = shallow(<InterfaceWithSvg icon="filter_icon" size="medium" onClick={onClick} >Hello</InterfaceWithSvg>)
    })
    it('renders the component', () => {
      expect(wrapper).to.exist
    })
    it('should contain an onClick props', () => (
      expect(wrapper.find('Button').prop('onClick')).to.exist
    ))
    it('should contain the right text', () => (
      expect(wrapper.find('Button').childAt(1).text()).to.be.equal('Hello')
    ))
    it('the onClick props should be a function', () => {
      expect(wrapper.find('Button').prop('onClick')).to.be.a('function')
    })
    it('when clicked it should call the onClick function', () => {
      wrapper.find('Button').simulate('click')
      expect(onClick.callCount).to.equal(1)
    })
    it('should contain Icon element', () => {
      wrapper.setProps({ icon: 'filter_icon' })
      expect(wrapper.find('Button').find('Icon').prop('name')).to.be.equal('filter_icon')
    })
    it('when disabled should contain the prop disabled', () => {
      wrapper.setProps({ disabled: true })
      expect(wrapper.find('Button').prop('disabled')).to.exist
    })
    // it('should not be able to click the Button', () => {
    //   wrapper.setProps({ disabled: true })
    //   wrapper.find('Button').simulate('click')
    //   expect(onClick.callCount).to.equal(0)
    // })
  })
)

export default test
