import React from "react";
import _ from "lodash";
import PropType from "prop-types";

function pagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  if (pagesCount === 1) {
    return null;
  }
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          className={page === currentPage ? "page-item active" : "page-item"}
          key={page}
        >
          <div className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </div>
        </li>
      ))}
    </ul>
  );
}

pagination.propType = {
  itemsCount: PropType.number.isRequired,
  pageSize: PropType.number.isRequired,
  currentPage: PropType.number.isRequired,
  onPageChange: PropType.func.isRequired,
};
export default pagination;
