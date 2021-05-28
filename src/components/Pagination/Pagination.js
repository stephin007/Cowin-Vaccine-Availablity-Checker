import "./Pagination.css";

import React from "react";

const Pagination = ({totalVaccine, vaccinePerPage, paginate}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalVaccine / vaccinePerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="pagination">
      {/* eslint-disable */}
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
    </div>
  );
};

export default Pagination;
