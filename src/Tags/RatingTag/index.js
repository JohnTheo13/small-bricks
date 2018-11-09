import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, Header } from '../../index'

const TagStyled = styled.div`
  background-color: ${props => props.theme.successMedium};
  position: absolute;
  left: ${props => props.theme.whitespaceS};
  bottom: ${props => props.theme.whitespaceS};
  height: 23px;
  border-radius: 4px;
  width: fit-content;
  padding: 0 ${props => props.theme.whitespaceXs};
`

const StyledNumber = styled(Header)`
  float: left;
  color: ${props => props.theme.white};
  margin: 3px 6px 3px 3px;
`

const StyledText = styled(Header)`
  float: left;
  color: ${props => props.theme.white};
  padding-top: 3px;
`

const StyledIcon = styled(Icon)`
  fill: ${props => props.theme.white};
  float: left;
  width: 15px;
  height: 15px;
  margin-top: 4px;
`


const RatingTag = props => (
  <TagStyled>
    <StyledIcon viewBox="0 0 50 50" name="star_icon" />
    <StyledNumber tag="H6" noMargin>
      {`${props.rating}`}
    </StyledNumber>
    <StyledText tag="H6" noMargin>
      {props.text}
    </StyledText>
  </TagStyled>
)

RatingTag.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  text: PropTypes.string.isRequired,
}

export default RatingTag
