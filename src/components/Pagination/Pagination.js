import React from "react";
import "./Pagination.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Pagination = (props) => {
  const { pageNumber, paginate, nextPage, prevPage } = props;

  return (
    <div className="pagination">
      {/* eslint-disable */}
      <ChevronLeftIcon onClick={prevPage} />
      {pageNumber.map((number) => (
        <>
          {/* eslint-disable */}
          <a
            key={number}
            style={{ cursor: "pointer" }}
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        </>
      ))}
      <ChevronRightIcon onClick={nextPage} />
    </div>
  );
};

export default Pagination;
