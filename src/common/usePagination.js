import { useState } from 'react'

function usePagination(items, numberPerPage) {
  const [ currentPage, setCurrentPage ] = useState(1);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const lastIndex = numberPerPage * currentPage;
  const firstIndex = lastIndex - numberPerPage;
  const currentItems = items ? items.slice(firstIndex, lastIndex) : null;

  return [ currentItems, numberPerPage, paginate ];
}

export default usePagination;
