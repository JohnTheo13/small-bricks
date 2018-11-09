import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LinkStyled = styled.a`
  color: ${props => props.theme.green};
  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.fontSizeM};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.greenDark};
    text-decoration: underline;
  }
`

const Link = props => (
  <LinkStyled
    href={props.href}
    onClick={props.onClick}
    className={props.className}
  >
    {props.children}
  </LinkStyled>
)

Link.defaultProps = {
  href: undefined,
  onClick: undefined,
  className: undefined,
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
}

export default Link
