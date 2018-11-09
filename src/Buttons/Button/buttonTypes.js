import { css } from 'styled-components'
import theme from '../../theme'

const primary = css`
  background-color: ${theme.green};
  color: ${theme.white};
  border: none;
  box-shadow: ${theme.boxShadow};

  &:hover {
    background-color: ${theme.greenDark};
    box-shadow: none;
  }

  &:active {
    background-color: ${theme.greenDark};
    box-shadow: none;
  }

  &:focus {
    background-color: ${theme.greyLight};
    box-shadow: none;
    color: ${theme.green};
  }
`
const secondary = css`
  background-color: ${theme.white};
  color: ${theme.black};
  border: 1px solid ${theme.greyMedium};
  box-shadow: none;
  ${props => props.selected && css`
    color: ${theme.white};
    background-color: ${theme.greenDark};
    border: 1px solid ${theme.greenDark};
  `}

  &:hover {
    color: ${theme.black};
    background-color: ${theme.grey};
    border: 1px solid ${theme.grey};
  }

  &:active {
    background-color: ${theme.greenDark};
    border: 1px solid ${theme.greenDark};
  }

  &:focus {
    background-color: ${theme.grey};
    border: 1px solid ${theme.grey};
  }
`

const outlinePrimary = css`
  background-color: ${theme.white};
  color: ${theme.green};
  border: 1px solid ${theme.green};
  box-shadow: none;

  &:hover {
    background-color: ${theme.greenDark};
    border: 1px solid ${theme.greenDark};
    color: ${theme.white};
  }

  &:active {
    background-color: ${theme.greenDark};
    border: 1px solid ${theme.greenDark};
    color: ${theme.white};
  }

  &:focus {
    background-color: ${theme.greyLight};
    border: 1px solid ${theme.greyLight};
    color: ${theme.green};
  }
`

const cta = css`
  background-color: ${theme.yellow};
  color: ${theme.black};
  border: none;
  box-shadow: ${theme.boxShadow};

  &:hover {
    background-color: ${theme.yellowDark};
    border: none;
  }

  &:active {
    background-color: ${theme.yellowDark};
    border: none;
  }

  &:focus {
    background-color: ${theme.greyLight};
    border: none;
    color: ${theme.yellowDark};
  }
`

const outlineCta = css`
  background-color: ${theme.white};
  color: ${theme.yellow};
  border: 1px solid ${theme.yellow};
  box-shadow: none;

  &:hover {
    background-color: ${theme.yellowDark};
    border: 1px solid ${theme.yellowDark};
    color: ${theme.black};
  }

  &:active {
    background-color: ${theme.yellowDark};
    border: 1px solid ${theme.yellowDark};
    color: ${theme.black};
  }

  &:focus {
    background-color: ${theme.greyLight};
    border: 1px solid ${theme.greyLight};
    color: ${theme.yellowDark};
  }
`

const interfaceButton = css`
  background-color: transparent;
  color: ${theme.green};
  border: 1px solid ${theme.grey};
  box-shadow: none;

  &:hover {
    background-color: ${theme.greenDark};
    border: 1px solid ${theme.greenDark};
    color: ${theme.white};
  }

  &:active {
    background-color: ${theme.greenDark};
    border: 1px solid ${theme.greenDark};
    color: ${theme.white};
  }

  &:focus {
    background-color: ${theme.greyLight};
    border: 1px solid ${theme.greyLight};
    color: ${theme.white};
  }
`

export { primary, secondary, outlinePrimary, cta, outlineCta, interfaceButton }
