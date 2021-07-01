import React from "react";

const CovidIndia = ({ value, index }) => {
  return (
    <>
      {value === index && (
        <h1 style={{ marginTop: "10px" }}>Content Coming Soon...</h1>
      )}
    </>
  );
};

export default CovidIndia;
