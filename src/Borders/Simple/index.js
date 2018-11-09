import styled, { css } from 'styled-components'
import theme from '../../theme'

const Border = styled.div`
  border-bottom: 1px solid ${theme.grey};
  margin-bottom: ${theme.whitespaceS};
  ${props => props.extraMargin
    &&
    css`
    margin-bottom: ${theme.whitespaceM};
    margin-top: ${theme.whitespaceM};
  `}
`

export default Border
