import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '@material-ui/core';

function Pagination({
  totalNumberOfItems,
  numberPerPage = 10,
  paginate,
  isLoading
}) {
  const numberOfPages = Math.ceil(totalNumberOfItems / numberPerPage);
  const pageNumbers = [];

  for (let i = 1; i < numberOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ButtonGroup
      aria-label="outline primary button group"
      color="primary"
      variant="outlined">
      {pageNumbers.map(number => (
        <Button key={number} onClick={() => paginate(number)}>
          {number}
        </Button>
      ))}
    </ButtonGroup>
  );
}

Pagination.propTypes = {
  numberPerPage: PropTypes.number,
  paginate: PropTypes.func.isRequired,
  totalNumberOfItems: PropTypes.number.isRequired
};

export default Pagination;
