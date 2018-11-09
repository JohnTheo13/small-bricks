import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'storybook-addon-specifications'
import React from 'react'
import Header from './index'

const test = () => (
  describe('Headers', () => {
    const wrapper = shallow(<Header tag="H1">Main H1</Header>)
    it('should render the right text', () =>
      expect(wrapper.dive().find('p').text()).to.equal('Main H1'))
    it('shoul accept style', () => {
      wrapper.setProps({ style: { color: 'red' } })
      expect(wrapper.dive().find('p').props().style).to.have.deep.property('color', 'red')
    })
  })
)

export default test
