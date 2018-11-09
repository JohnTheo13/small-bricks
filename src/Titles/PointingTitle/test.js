import { expect } from 'chai'
import { describe, it } from 'storybook-addon-specifications'
import { shallow } from 'enzyme'
import React from 'react'
import PointingTitle from './index'

const test = () => (
  describe('Pointing Component', () => {
    const wrapper = shallow(<PointingTitle backColor="red" color="white" >Hello</PointingTitle>)
    it('Should contain Header', () =>
      expect(wrapper.dive().find('div').childAt(0).find('Header')).to.have.length(1)) // eslint-disable-line
    it('Should render the right back color', () =>
      expect(wrapper.props()).to.include({ backColor: 'red' }))
    it('Should render the right text color', () =>
      expect(wrapper.prop('color')).to.equal('white'))
    it('Should render an contains the right title', () =>
      expect(wrapper.dive().find('div').childAt(0).find('Header').props().children).to.equal('Hello')) // eslint-disable-line
  })
)

export default test
