import styled, { css } from 'styled-components'

const after = (props) => {
  switch (props.placement) {
    case 'right':
      return css`
        top: 50%;
        left: -10px;
        margin-top: -11px;
        border-right-color: ${props.theme[`${props.tag}Light`]};
        border-left-width: 0;
      `
    case 'left':
      return css`
        top: 50%;
        right: -10px;
        margin-top: -11px;
        border-left-color: ${props.theme[`${props.tag}Light`]};
        border-right-width: 0;
      `
    case 'top':
      return css`
        left: 50%;
        bottom: -10px;
        margin-left: -11px;
        border-top-color: ${props.theme[`${props.tag}Light`]};
        border-bottom-width: 0;
      `
    case 'bottom':
      return css`
        left: 50%;
        top: 0;
        margin-top: -11px;
        border-bottom-color: ${props.theme[`${props.tag}Light`]};
        border-top-width: 0;
      `
    default:
      return null
  }
}

const before = (props) => {
  switch (props.placement) {
    case 'right':
      return css`
        top: calc(50% - 12px);
        left: -24px;
        border-color: transparent;
        border-right-color: ${props.theme[`${props.tag}`]};
      `
    case 'left':
      return css`
        top: calc(50% - 12px);
        right: -24px;
        border-color: transparent;
        border-left-color: ${props.theme[`${props.tag}`]};
      `
    case 'top':
      return css`
        bottom: 0;
        margin-bottom: -24px;
        margin-left: calc(50% - 24px);
        border-color: transparent;
        border-top-color: ${props.theme[`${props.tag}`]};
      `
    case 'bottom':
      return css`
        top: 0;
        left: calc(50% - 1px);
        margin-top: -24px;
        border-color: transparent;
        border-bottom-color: ${props.theme[`${props.tag}`]};
      `
    default:
      return null
  }
}

const StyledPopOver = styled.div`
  left: 2px;
  border: 1px solid ${props => props.theme[`${props.tag}`]};
  border-radius: ${props => props.theme.borderRadius};
  top: -${props => props.theme.whitespaceM};
  background-color: ${props => props.theme[`${props.tag}Light`]};
  color: ${props => props.theme[`${props.tag}Medium`]};
  box-shadow: none;
  width: 100%;
  position: absolute;
  padding: ${props => props.theme.whitespaceS};
  max-width: 316px;

  > p {
    padding-bottom: 0;
    color: ${props => props.theme[`${props.tag}Medium`]};
    display: block;
    line-height: 2.8rem;
  }

  > svg {
    float: left;
    margin-right: 4px;
  }

  @media (max-width: 990px): {
    max-width: 290px;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 11px;
    ${props => after(props)}
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    z-index: -1;
    ${props => before(props)}
  }
`
export default StyledPopOver
