import { expect } from 'chai'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import React from 'react'
import TransparentButton from './index'

const test = () => (
  describe('TransparentButton default', () => {
    let wrapper
    let onClick
    beforeEach(() => {
      onClick = sinon.spy()
      wrapper = shallow(<TransparentButton onClick={onClick}>Hello</TransparentButton>)
    })
    it('renders the component', () => expect(wrapper).to.exist)
    it('should contain an onClick props', () => expect(wrapper.dive().find('button').prop('onClick')).to.exist)
    it('the onClick props should be a function', () => expect(wrapper.dive().find('button').prop('onClick')).to.be.a('function'))
    it('when clicked it should call the onClick function', () => {
      wrapper.dive().find('button').simulate('click')
      expect(onClick.callCount).to.equal(1)
    })
    it('should contain svg element', () => expect(wrapper.dive().find('button').childAt(1).find('Icon')
      .dive()
      .dive()
      .dive()
      .find('svg')).to.have.length(1))
    it('when disabled should contain the prop disabled', () => {
      wrapper.setProps({ disabled: true })
      expect(wrapper.dive().find('button').prop('disabled')).to.exist
    })
    it('should not be able to click the button', () => {
      wrapper.setProps({ disabled: true })
      wrapper.dive().find('button').simulate('click')
      expect(onClick.callCount).to.equal(0)
    })
  })
)

export default test
