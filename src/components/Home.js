import React, { useEffect, useState } from "react";
import "./Home.css";
import { Slider, Typography } from "@material-ui/core";
import { MenuItem, FormControl, Select } from "@material-ui/core";

function valuetext(value) {
  return `${value}°C`;
}

const Home = () => {
  const [state, setState] = useState([]);
  const [stateName, setStateName] = useState("State");

  useEffect(() => {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => res.json())
      .then((data) => {
        setState(data.states);
      });
  }, [setState]);

  console.info(state);

  return (
    <div className="home">
      <h2>CoWIN Vaccination Slot Availablity</h2>
      <div className="home__info">
        <p>
          The CoWIN APIs are geo fenced, so sometimes you may not see an output!
          Please try after sometime
        </p>
      </div>

      <div className="home__option">
        <div className="home__optionLeft">
          <Typography>Select Date Range</Typography>
          <Slider
            defaultValue={30}
            valueLabelDisplay="on"
            step={10}
            marks={true}
            min={10}
            max={110}
            getAriaValueText={valuetext}
          />
        </div>
        <div className="home__optionRight">
          <Typography>Select State</Typography>
          <FormControl>
            <Select
              variant="outlined"
              value={"state"}
              onChange={(e) => setStateName(e.target.value)}
            >
              <MenuItem value="state">State</MenuItem>
              {state.map((state) => (
                <MenuItem value={state.state_id}>{state.state_name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Home;
