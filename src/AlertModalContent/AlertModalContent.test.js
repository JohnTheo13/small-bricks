import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import AlertModalContent from './index'

const defaultTest = () => (
  describe('AlertModalContent', () => {
    let wrapper
    let onClick
    beforeEach(() => {
      onClick = sinon.spy()
      wrapper = shallow(<AlertModalContent
        status="success"
        onClick={onClick}
        title="title"
        body="body"
        alert="alert message"
        buttonText="click"
      />)
    })
    it('should render the component', () => {
      expect(wrapper).to.exist
    })
    it('should have an <Alert /> component inside', () => {
      expect(wrapper.find('Alert')).to.exist
    })
    it('should contain a status prop', () => {
      expect(wrapper.find('Alert').prop('status')).to.exist
    })
    it('should show an success alert when status success', () => {
      expect(wrapper.find('Alert').prop('status')).to.equal('success')
    })
    it('should contain an onClick prop', () => {
      expect(wrapper.find('Button').prop('onClick')).to.exist
    })
    it('should call onClick when clicked', () => {
      wrapper.find('Button').simulate('click')
      expect(onClick.callCount).to.equal(1)
    })
    it('should contain a buttonText prop', () => {
      expect(wrapper.find('Button').prop('children')).to.equal('click')
    })
    it('should contain an alert prop message', () => {
      expect(wrapper.find('Alert').prop('body')).to.equal('alert message')
    })
  })
)

export default defaultTest
