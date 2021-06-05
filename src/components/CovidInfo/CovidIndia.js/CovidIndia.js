import React from "react";

const CovidIndia = ({ value, index }) => {
  return <>{value === index && <h1>INDIA</h1>}</>;
};

export default CovidIndia;
