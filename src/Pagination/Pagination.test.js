import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import Pagination from './index'

const test = () => (
  describe('Pagination', () => {
    let wrapper
    let onSelect
    beforeEach(() => {
      onSelect = sinon.spy()
      wrapper = shallow(<Pagination
        prev="prev"
        next="next"
        items={7}
        activePage={2}
        onSelect={onSelect} />) // eslint-disable-line
    })
    it('should render the component', () => {
      expect(wrapper).to.exist
    })
    it('should contain a pagination class', () => {
      expect(wrapper.dive().props().bsClass).to.equal('pagination')
    })
    it('should contain a onSelect prop function', () => {
      expect(wrapper.prop('onSelect')).to.exist
    })
    it('should call the onSelect func when clicked', () => {
      wrapper.simulate('select')
      expect(onSelect.callCount).to.equal(1)
    })
    it('the prop activePage should be equal to 2', () => {
      expect(wrapper.prop('activePage')).to.equal(2)
    })
    it('the prop items should be equal to 7', () => {
      expect(wrapper.prop('items')).to.equal(7)
    })
    it('the prop prev should be equal to prev', () => {
      expect(wrapper.prop('prev')).to.equal('prev')
    })
    it('the prop next should be equal to next', () => {
      expect(wrapper.prop('next')).to.equal('next')
    })
  })
)

export default test
