import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount }) => {
  return (
    <div>
      <ReactPaginate previousLabel="Prev" nextLabel="Next" />
    </div>
  );
};

export default Pagination;
