import React from 'react';
import { Link } from 'react-router-dom';
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  //do not show paginator if all items fit within one page
  if (!totalItems || totalPages === 1) return null;

  return (
    <nav className='pagination'>
      <ul>
        {pageNumbers.map(number => {
          const is_active = currentPage === number ? 'active' : null;
          return (
            <li key={number} className={`page-item ${is_active}`}>
              <Link
                to='#'
                onClick={() => paginate(number)}
                className='page-link'
              >
                {number}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
