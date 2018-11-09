import { expect } from 'chai'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import React from 'react'
import RadioButton from './index'

const test = () => (
  describe('RadioButton default', () => {
    let wrapper
    let onClick
    beforeEach(() => {
      onClick = sinon.spy()
      wrapper = shallow(<RadioButton onClick={onClick}>Radio</RadioButton>)
    })
    it('renders the component', () => {
      expect(wrapper).to.exist
    })
    it('should contain an onClick function props', () => (
      expect(wrapper.props().onClick).to.exist
    ))
    it('the onClick props should be a function', () => {
      expect(wrapper.props().onClick).to.be.a('function')
    })
    it('when clicked it should call the onClick function', () => {
      wrapper.simulate('click')
      expect(onClick.callCount).to.equal(1)
    })
    it('when disabled should contain the prop disabled', () => {
      wrapper.setProps({ disabled: true })
      expect(wrapper.prop('disabled')).to.exist
    })
    it('when disabled should not be able to click the button', () => {
      wrapper.setProps({ disabled: true })
      wrapper.simulate('click')
      expect(onClick.callCount).to.equal(0)
    })
    it('when selected should contain the prop selected', () => {
      wrapper.setProps({ selected: true })
      expect(wrapper.prop('selected')).to.equal(true)
    })
    it('if icon prop should show icon', () => {
      wrapper.setProps({ icon: 'images/icons/icon_arrow.png' })
      expect(wrapper.props().children[0].props.src).to.equal('images/icons/icon_arrow.png')
    })
  })
)

export default test
