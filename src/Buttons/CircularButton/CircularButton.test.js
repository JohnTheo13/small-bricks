import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import CircularButton from './index'

const test = () => (
  describe('Circular Button', () => {
    let wrapper
    let onClick
    beforeEach(() => {
      onClick = sinon.spy()
      wrapper = shallow(<CircularButton onClick={onClick}>Circular</CircularButton>)
    })
    it('should render', () => {
      expect(wrapper).to.exist
    })
    it('if props on onClick and click event should call function', () => {
      wrapper.simulate('click')
      expect(onClick.callCount).to.equal(1)
    })
  })
)

export default test
