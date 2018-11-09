import { expect } from 'chai'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import { mount } from 'enzyme'
import React from 'react'
import Field from './index'

const test = () => (
  describe('Fields', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<Field placeholder="stories" label="Label test" size="small" />)
    })
    it('should render a label', () => {
      expect(wrapper.find('Label').length).to.equal(1)
    })
    it('should render a label named "Label test"', () => {
      expect(wrapper.find('Label').props().children).to.equal('Label test')
    })
    it('should render an Icon', () => {
      wrapper.setProps({ icon: '/images/eve.png' })
      expect(wrapper.childAt(0).props().children[0].props.src).to.equal('/images/eve.png')
    })
    it('should render an input', () =>
      expect(wrapper.find('FormControl').childAt(0).type()).to.equal('input'))
    it('should have placeholder=stories', () =>
      expect(wrapper.find('FormControl').childAt(0).prop('placeholder')).to.equal('stories'))
    it('should be disabled', () => {
      wrapper.setProps({ disabled: true })
      expect(wrapper.find('FormControl').childAt(0).props().disabled).to.equal(true)
    })
  })
)

export default test
