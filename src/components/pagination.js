import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

const Pagination = ({ currentPage, onChange, data }) => {
  if (!data || !Array.isArray(data)) return null;
  return (
    <nav className="pagination">
      <ul className="pagination__list">
        {currentPage > 1 ? (
          <li>
            <button
              onClick={() => {
                onChange(currentPage - 1);
              }}
            >
              Prev
            </button>
          </li>
        ) : null}
        {data.map((item, key) => (
          <li key={key}>
            <button
              className={`pagination__button ${key + 1 === currentPage ? 'is-active' : ''}`}
              onClick={() => {
                onChange(key + 1);
              }}
            >
              {key + 1}
            </button>
          </li>
        ))}
        {currentPage !== data.length ? (
          <li>
            <button
              onClick={() => {
                onChange(currentPage + 1);
              }}
            >
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  currentPage: 1,
  data: null,
  onChange: () => {},
};

export default Pagination;
