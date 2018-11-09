import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const activetab = css`
  &::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    transform: translateY(-50%);
    left: 100%;
    top: 50%;
    border: 20px solid transparent;
    border-left-color: ${props => props.theme.green};
    content: '';
  }
`

const Wrapper = styled.div`
  background: ${props => (props.active ? props.theme.green : props.theme.greyLight)};
  padding: ${props => props.theme.whitespaceS};
  border-radius: ${props => props.theme.borderRadius};
  position: relative;
  cursor: pointer;
  height: 79px;
  margin-top: 50px;
  ${props => props.active && activetab}

  &:hover {
    background: ${props => !props.active && props.theme.grey};

    &::after {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      left: 100%;
      top: 50%;
      border: 20px solid transparent;
      border-left-color: ${props => (props.active ? props.theme.green : props.theme.grey)};
      content: '';
    }
  }
`

const InteractiveTab = (props) => {
  const childrenWithprops = React.Children.map(props.children, (child) => {
    if (child.type) {
      return React.cloneElement(child, { active: props.active })
    }
    return child
  })
  return (
    <Wrapper active={props.active} onClick={props.onClick} >
      {childrenWithprops}
    </Wrapper>
  )
}

InteractiveTab.propTypes = {
  children: PropTypes.any.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default InteractiveTab
