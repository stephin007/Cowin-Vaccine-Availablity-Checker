import React from "react";
import "./Home.css";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { FormControl, MenuItem, Select } from "@material-ui/core";

const Home = () => {
  return (
    <div className="home">
      <div className="home__intro">
        <h2>Vaccine Availablity</h2>
      </div>

      <div className="home__options">
        <div className="home__optionsTop">
          <h4>Select State</h4>
          <h4>Select District</h4>
          <h4>Pincode</h4>
          <div className="home__optionsAlign">
            <h4>Date</h4>
            <DateRangeIcon />
          </div>
        </div>
        <div className="home__optionBottom">
          <FormControl>
            <Select variant="outlined">
              <MenuItem value="States">States</MenuItem>
              <MenuItem value="1">Delhi</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Home;
