import React from "react";
import "./Pagination.css";

const Pagination = (props) => {
  // eslint-disable-next-line
  const { pageNumber, paginate, nextPage, prevPage, currentPage } = props;

  console.log(currentPage);

  return (
    <div className="pagination">
      {/* eslint-disable */}
      {pageNumber.map((number) => (
        <>
          {/* eslint-disable */}
          {currentPage === number ? (
            <a
              key={number}
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          ) : (
            <a
              key={number}
              style={{ cursor: "pointer" }}
              onClick={() => paginate(number)}
              id={number}
            >
              {number}
            </a>
          )}
        </>
      ))}
    </div>
  );
};

export default Pagination;
