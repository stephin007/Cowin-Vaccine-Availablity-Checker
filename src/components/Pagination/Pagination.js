import React from "react";
import "./Pagination.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Pagination = (props) => {
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
