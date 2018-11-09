import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import React from 'react'
import RatingTag from './index'

const test = () => (
  describe('RatingTag', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<RatingTag
        rating="9.0"
        text="Good"
      />)
    })
    it('renders the component', () => {
      expect(wrapper).to.exist
    })
    it('has prop rating', () => {
      expect(wrapper.props().children[1].props.children).to.equal('9.0')
    })
    it('has prop text', () => {
      expect(wrapper.props().children[2].props.children).to.equal('Good')
    })
    it('has an star icon', () => {
      expect(wrapper.dive().childAt(0).props().name).to.equal('star_icon')
    })
  })
)

export default test
