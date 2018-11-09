import styled, { css } from 'styled-components'
import { primary, secondary, outlinePrimary, cta, outlineCta, interfaceButton } from './buttonTypes'
import theme from '../../theme'

const buttonType = (tag) => {
  switch (tag) {
    case 'primary':
      return primary
    case 'secondary':
      return secondary
    case 'outlinePrimary':
      return outlinePrimary
    case 'cta':
      return cta
    case 'outlineCta':
      return outlineCta
    case 'interfaceButton':
      return interfaceButton
    default:
      return null
  }
}

const buttonSize = (size) => {
  switch (size) {
    case 'small':
      return css`
        height: 30px;
      `
    case 'medium':
      return css`
        height: 42px;
      `
    case 'large':
      return css`
        height: 50px;
        font-size: 19px;
        line-height: 23px;
      `
    default:
      return css`
        height: 30px;
      `
  }
}

const StyledButton = styled.button`
  font-family: ${theme.fontHeading};
  width: 100%;
  letter-spacing: 0;
  text-align: center;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  border-radius: ${theme.borderRadius};
  display: inline-block;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  font-size: ${theme.fontSizeM};
  line-height: 18px;
  margin-bottom: ${props => (props.noMargin ? 0 : theme.whitespaceM)};

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
    box-shadow: none;
  }

  ${props => buttonSize(props.size)}
  ${props => buttonType(props.tag)}
`

export default StyledButton
