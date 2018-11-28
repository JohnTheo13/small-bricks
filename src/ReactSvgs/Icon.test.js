import { expect } from 'chai'
import { describe, it } from 'storybook-addon-specifications'
import { mount } from 'enzyme'
import React from 'react'
import Icon from './index'

const test = () => (
  describe('Inputs', () => {
    const wrapper = mount(<Icon name="hamburger_icon" />)
    it('should render phone svg', () => {
      expect(wrapper.find('SimpleSvg').props().name).to.equal('hamburger_icon')
    })
    it('should render exit svg', () => {
      wrapper.setProps({ name: 'exit_icon' })
      expect(wrapper.find('SimpleSvg').props().name).to.equal('exit_icon')
    })
    it('should render flag svg', () => {
      wrapper.setProps({ name: 'flag_icon' })
      expect(wrapper.find('SimpleSvg').props().name).to.equal('flag_icon')
    })
    it('should render star svg', () => {
      wrapper.setProps({ name: 'star_icon' })
      expect(wrapper.find('SimpleSvg').props().name).to.equal('star_icon')
    })
    it('should render stopwatch svg', () => {
      wrapper.setProps({ name: 'stopwatch_icon' })
      expect(wrapper.find('SimpleSvg').props().name).to.equal('stopwatch_icon')
    })
    it('should render stopwatch svg color red', () => {
      wrapper.setProps({ name: 'stopwatch_icon', color: 'red' })
      expect(wrapper.find('SimpleSvg').props().color).to.equal('red')
    })
  })
)

export default test
