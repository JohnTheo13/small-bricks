import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import React from 'react'
import OverlayTag from './index'

const test = () => (
  describe('OverlayTag', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<OverlayTag
        name="cool tag"
        theme="green"
        description="tooltip"
      />)
    })
    it('renders the component', () => {
      expect(wrapper).to.exist
    })
    it('has prop name', () => {
      expect(wrapper.instance().props.name).to.equal('cool tag')
    })
    it('has prop description', () => {
      expect(wrapper.instance().props.description).to.equal('tooltip')
    })
    it('when icon shows icon', () => {
      wrapper.setProps({ icon: 'stopwatch' })
      expect(wrapper.children().children().at(0).props().name).to.equal('stopwatch_icon')
    })
  })
)

export default test
