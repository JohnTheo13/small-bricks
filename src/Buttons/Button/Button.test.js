import { expect } from 'chai'
import sinon from 'sinon'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import { shallow } from 'enzyme'
import React from 'react'
import Button from './index'

const test = () => (
  describe('Buttons tests', () => {
    let wrapper
    let onClick
    beforeEach(() => {
      onClick = sinon.spy()
      wrapper = shallow(<Button onClick={onClick} size="small" tag="primary" >Button</Button>)
    })
    it('should render button', () =>
      expect(wrapper.dive().find('button')).to.have.length(1))
    it('checks Button click event', () => {
      wrapper.dive().find('button').simulate('click')
      expect(onClick.callCount).to.equal(1)
    })
    it('checks Button click event when disabled', () => {
      wrapper.setProps({ disabled: true })
      wrapper.dive().find('button').simulate('click')
      expect(onClick.callCount).to.equal(0)
    })
    it('should render the correct children', () => {
      expect(wrapper.dive().find('button').props().children).to.equal('Button')
    })
  })
)

export default test
