import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import React from 'react'
import { theme } from '../index'
import Stepper from './index'

const test = () => (
  describe('Stepper', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<Stepper
        steps={[true, true, false, false]}
      />)
    })
    it('renders the component', () => {
      expect(wrapper).to.exist
    })
    it('has prop steps type of array with length 4', () => {
      expect(wrapper.props().children[1].length).to.equal(4)
    })
    it('step one should be blue', () => {
      expect(wrapper.children().get(1).props.backolor).to.equal(theme.infoMedium)
    })
    it('step two should be true', () => {
      expect(wrapper.children().get(2).props.backolor).to.equal(theme.infoMedium)
    })
    it('step three should be grey', () => {
      expect(wrapper.children().get(3).props.backolor).to.equal(theme.greyMedium)
    })
    it('step four should be grey', () => {
      expect(wrapper.children().get(4).props.backolor).to.equal(theme.greyMedium)
    })
  })
)

export default test
