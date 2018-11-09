import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'react-bootstrap'
import styled from 'styled-components'

const StyledPagination = styled(Pagination)`
  li > a {
    border: none;
    color: #00c7b1;
  }

  li > a:hover {
    color: #009681;
    background-color: #fdfdfd;
  }

  li > a:visited {
    color: #009681;
    background-color: #fdfdfd;
  }

  li > a:focus {
    color: #009681;
    background-color: #fdfdfd;
  }

  & .active a {
    background-color: #00c7b1;
    border-radius: 3px;
    border-color: #00c7b1;
  }

  & .active a:hover {
    background-color: #009681;
    border-color: #009681;
  }

  & .active a:focus {
    background-color: #009681;
    border-color: #009681;
  }

  & .active a:visited {
    background-color: #009681;
    border-color: #009681;
  }

  & .disabled a {
    color: #f2f2f2;
    outline: none;
  }

  & .disabled a:focus {
    color: #f2f2f2;
  }
`


const PaginationComponent = props => (
  <StyledPagination
    prev={props.prev}
    next={props.next}
    ellipsis
    boundaryLinks
    maxButtons={5}
    items={props.items}
    activePage={props.activePage}
    onSelect={e => props.onSelect(props, e)}
  />
)

PaginationComponent.propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default PaginationComponent
