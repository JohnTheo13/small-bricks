import styled, { css } from 'styled-components'
import { FormControl } from 'react-bootstrap'
import theme from '../theme'

const StyledInput = styled(FormControl)`
  color: ${theme.black};
  height: 100%;
  padding: 12px;
  background-color: ${theme.white};
  border-radius: ${theme.borderRadius};
  border: 1px solid ${theme.greyDark};
  font-family: OpenSans;
  font-size: 16px;
  ${props => props.status === 'success' && css` border: 1px solid ${theme.successMedium}; `}
  ${props => props.status === 'error' && css` border: 1px solid ${theme.errorMedium}; `}
  ${props => props.status === 'warning' && css` border: 1px solid ${theme.warningMedium}; `}

  &:focus {
    border-color: #00c7b1;
    border-width: 2px;
    outline: 0;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.3;
    border: 1px solid ${theme.greyDark};
  }

  .input-group {
    width: 100%;
  }

  input::placeholder {
    color: #bfbfbf;
  }

  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #bfbfbf;
  }

  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #bfbfbf;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #bfbfbf;
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #bfbfbf;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #bfbfbf;
  }
`

export default StyledInput
