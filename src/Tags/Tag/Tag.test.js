import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import React from 'react'
import { theme } from '../../index'
import Tag from './index'

const test = () => (
  describe('Tag', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<Tag active={false}>Tag</Tag>)
    })
    it('renders the component', () => {
      expect(wrapper).to.exist
    })
    it('should render a <p>', () => {
      expect(wrapper.render()[0].children[0].name).to.equal('p')
    })
    it('header tag should be H6', () => {
      expect(wrapper.childAt(0).props().tag).to.equal('H6')
    })
    it('header should contain text Tag', () => {
      expect(wrapper.render()[0].children[0].children[0].data).to.equal('Tag')
    })
    it('when receiving icon props should render the icon', () => {
      wrapper.setProps({ icon: true })
      expect(wrapper.dive().childAt(0).dive().find('Icon').length).to.equal(1)
    })
    it('when not receiving icon props should not render the icon', () => {
      wrapper.setProps({ icon: false })
      expect(wrapper.find('Icon').length).to.equal(0)
    })
    it('icon should have color white when prop active is true', () => {
      wrapper.setProps({ icon: true, active: true })
      expect(wrapper.dive().childAt(0).props().color).to.equal(theme.white)
    })
    it('text should have successMedium when prop active is false', () => {
      expect(wrapper.childAt(0).props().color).to.equal(theme.successMedium)
    })
    it('text should have color white when prop active is true', () => {
      wrapper.setProps({ active: true })
      expect(wrapper.childAt(0).props().color).to.equal(theme.white)
    })
    it('icon should have color green when prop active is true', () => {
      wrapper.setProps({ icon: true, active: false })
      expect(wrapper.dive().childAt(0).props().color).to.equal(theme.successMedium)
    })
    it('icon should have custom color theme.error when props {fontColor: theme.error}', () => {
      wrapper.setProps({ icon: true, fontColor: theme.error })
      expect(wrapper.dive().childAt(0).props().color).to.equal(theme.error)
    })
  })
)

export default test
