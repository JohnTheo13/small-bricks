import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import Link from './index'

const test = () => (
  describe('Link', () => {
    let wrapper
    let onClick
    beforeEach(() => {
      onClick = sinon.spy()
      wrapper = shallow(<Link onClick={onClick}>Test</Link>) // eslint-disable-line
    })
    it('should render the component', () => {
      expect(wrapper).to.exist
    })
    it('should contain a <a> element', () => {
      expect(wrapper.render()[0].name).to.equal('a')
    })
    it('should contain a onClick prop function', () => {
      expect(wrapper.prop('onClick')).to.exist
    })
    it('should call the onClick func when clicked', () => {
      wrapper.simulate('click')
      expect(onClick.callCount).to.equal(1)
    })
    it('should contain children text', () => {
      expect(wrapper.render()[0].children[0].data).to.equal('Test')
    })
  })
)

export default test
