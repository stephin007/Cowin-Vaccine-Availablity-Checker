import React from "react";

const CovidWorld = ({ value, index }) => {
  return <>{value === index && <h1>World</h1>}</>;
};

export default CovidWorld;
