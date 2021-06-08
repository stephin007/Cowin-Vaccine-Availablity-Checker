import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <div className="paginations">
      <ReactPaginate
        previousLabel="prev"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        breakClassName={"break-me"}
        breakLabel={"..."}
      />
    </div>
  );
};

export default Pagination;
