import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import Pagination from "@material-ui/lab/Pagination";

const Paginations = ({ pageCount, onPageChange, pageNumber }) => {
  return (
    <div className="">
      {/* <ReactPaginate
        previousLabel="prev"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName="MuiPagination-ul"
        nextClassName="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-textPrimary"
        previousClassName="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-textPrimary"
      /> */}
      <Pagination
        count={pageCount}
        variant="outlined"
        shape="rounded"
        onChange={() => 3}
      />
    </div>
  );
};

export default Paginations;
