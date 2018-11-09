import { expect } from 'chai'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import InteractiveTab from './index'

const test = () => (
  describe('Pointing Component', () => {
    let wrapper
    let onClick
    beforeEach(() => {
      onClick = sinon.spy()
      wrapper = shallow(<InteractiveTab onClick={onClick} active tag="primary" ><span>Hello</span></InteractiveTab>)
    })
    it('Should render the right content', () => expect(wrapper.find('span').at(0).props().children).to.equal('Hello'))
    it('Should render styled component', () => expect(wrapper.find('StyledComponent')).to.have.length(1))
    it('Should be clickable', () => {
      wrapper.simulate('click')
      expect(onClick.callCount).to.equal(1)
    })
    it('Should pass active prop to children', () => {
      wrapper.setProps({ active: true })
      expect(wrapper.find('span').at(0).props().active).to.equal(true)
    })
  })
)

export default test
