import React, { useState, useEffect } from "react";
import "./Home.css";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: 10,
    width: 200,
  },

  text: {
    marginTop: -10,
  },
}));

const Home = () => {
  const classes = useStyles();
  const [pincodeMenu, setPincodeMenu] = useState(true);
  const [state, setState] = useState([]);
  const [stateCode, setStateCode] = useState("States");
  const [districts, setDistricts] = useState([]);
  const [districtCode, setDistrictCode] = useState(
    "PLEASE SELECT A STATE FIRST!!!"
  );
  const [formatedDate, setFormatedDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => res.json())
      .then((data) => {
        setState(data.states);
      });
  }, [setState, formatedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onStateChange = async (e) => {
    const stateCode = e.target.value;

    console.log(stateCode);

    const url =
      stateCode === "States"
        ? "https://cdn-api.co-vin.in/api/v2/admin/location/districts/9"
        : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateCode}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStateCode(stateCode);
        setDistricts(data.districts);
      });
  };

  const onDistrictChange = async (e) => {
    const districtCode = e.target.value;

    const url =
      districtCode === "PLEASE SELECT A STATE FIRST!!!"
        ? null
        : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtCode}&date=03-06-2021`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDistrictCode(districtCode);
        console.log(data);
      });
  };

  return (
    <div className="home">
      <div className="home__intro">
        <h2>Vaccine Availablity</h2>
      </div>

      <div className="home__options">
        <div className="home__optionsTop">
          <h4>Select State</h4>
          <h4>Select District</h4>
          {pincodeMenu === true ? (
            <ToggleOffIcon
              fontSize="large"
              onClick={() => setPincodeMenu(false)}
            />
          ) : (
            <ToggleOnIcon
              onClick={() => setPincodeMenu(true)}
              fontSize="large"
              style={{ color: "red" }}
            />
          )}
          <h4>Pincode</h4>
          <div className="home__optionsAlign">
            <h4>Date</h4>
            <DateRangeIcon />
          </div>
        </div>
        <div className="home__optionBottom">
          <div className="home__selects">
            <FormControl>
              <Select
                variant="outlined"
                value={stateCode}
                onChange={onStateChange}
              >
                <MenuItem value="States">States</MenuItem>
                {state?.map((stateData) => (
                  <MenuItem value={stateData?.state_id}>
                    {stateData?.state_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {pincodeMenu === true ? (
              <FormControl>
                <Select
                  variant="outlined"
                  value={districtCode}
                  onChange={onDistrictChange}
                >
                  {districts?.map((districtData) => (
                    <MenuItem value={districtData?.district_id}>
                      {districtData?.district_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <div>
                <TextField
                  id="outlined-number"
                  margin="normal"
                  label="Pin Code"
                  type="number"
                  variant="outlined"
                  InputProps={{
                    className: classes.text,
                  }}
                />
              </div>
            )}

            <TextField
              id="date"
              type="date"
              defaultValue={selectedDate}
              onChange={handleDateChange}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
