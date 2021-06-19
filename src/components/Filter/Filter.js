import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";

const Filter = () => {
  const [filterValue, setFilterValue] = useState("");

  const onFilterChange = (e) => {
    const filterValue = e.target.value;
    setFilterValue(filterValue);
  };

  const onFilterValueChange = (e) => {};

  return (
    <div style={{ display: "flex" }}>
      <Select
        variant="outlined"
        style={{ width: "60%", margin: 10 }}
        onChange={onFilterChange}
      >
        <MenuItem value="Vaccine Type">Vaccine Type</MenuItem>
        <MenuItem value="Age Group">Age Group</MenuItem>
        <MenuItem value="Fare">Fare</MenuItem>
      </Select>
      {filterValue === "" ? (
        <>
          <Select variant="outlined" style={{ width: "60%", margin: 10 }}>
            <MenuItem disabled={true}>SELECT A VALID FILTER OPTION</MenuItem>
          </Select>
        </>
      ) : null}

      {filterValue === "Vaccine Type" ? (
        <>
          <Select variant="outlined" style={{ width: "60%", margin: 10 }}>
            <MenuItem value="COVAXIN">COVAXIN</MenuItem>
            <MenuItem value="COVISHEILD">COVISHEILD</MenuItem>
          </Select>
        </>
      ) : null}
      {filterValue === "Age Group" ? (
        <>
          <Select variant="outlined" style={{ width: "60%", margin: 10 }}>
            <MenuItem value="18+">18+</MenuItem>
            <MenuItem value="45+">45+</MenuItem>
          </Select>
        </>
      ) : null}
      {filterValue === "Fare" ? (
        <>
          <Select variant="outlined" style={{ width: "60%", margin: 10 }}>
            <MenuItem value="Free">Free</MenuItem>
            <MenuItem value="Paid">Paid</MenuItem>
          </Select>
        </>
      ) : null}
    </div>
  );
};

export default Filter;
