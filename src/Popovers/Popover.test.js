import { expect } from 'chai'
import { describe, it } from 'storybook-addon-specifications'
import { mount } from 'enzyme'
import React from 'react'
import Popover from './index'

const test = () => (
  describe('Popovers tests', () => {
    const wrapper = mount(<Popover placement="top" heading="TopTop" tag="info" >Content</Popover>)
    it('should render the right Heading', () =>
      expect(wrapper.find('Popover').find('div').find('Paragraph').find('p')
        .text()).to.equal('TopTop'))
    it('should render the right content', () =>
      expect(wrapper.find('Popover').get(0).props.children).to.equal('Content'))
    it('should render the right arrow', () => {
      wrapper.setProps({ placement: 'left' })
      expect(wrapper.find('Popover').prop('placement')).to.equal('left')
    })
    it('should render the right popOver', () => {
      wrapper.setProps({ tag: 'info' })
      expect(wrapper.find('Popover').prop('tag')).to.equal('info')
    })
  })
)

export default test
