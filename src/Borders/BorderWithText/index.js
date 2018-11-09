import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../theme'
import { P } from '../../Typography'

const Border = styled.div`
  border-top: 1px solid ${theme.grey};
  margin-bottom: 0;
  margin-top: ${props => (props.marginTopM ? theme.whitespaceM : theme.whitespaceS)};
`

const BorderWithText = props => (
  <Border>
    <P extraSmall noMargin greyMedium>
      {props.children}
    </P>
  </Border>
)

BorderWithText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BorderWithText
