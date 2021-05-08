import React, { useState, useEffect } from "react";
import "./Home.css";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import SearchIcon from "@material-ui/icons/Search";

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
  const [pin, setPin] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const GetFormattedDate = () => {
    var month = selectedDate.getMonth() + 1;
    var day = selectedDate.getDate();
    var year = selectedDate.getFullYear();
    var finalDate = day + "-" + month + "-" + year;

    setFormattedDate(finalDate);
  };

  console.log(formattedDate);

  console.log(pin);

  useEffect(() => {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => res.json())
      .then((data) => {
        setState(data.states);
      });

    GetFormattedDate();
    // eslint-disable-next-line
  }, [setState, selectedDate, formattedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onStateChange = async (e) => {
    const stateCode = e.target.value;

    setDistricts([]);

    console.log(stateCode);

    const url =
      stateCode === "States"
        ? null
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
        : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtCode}&date=${formattedDate}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDistrictCode(districtCode);
        console.log(data);
      });
  };

  const fetchDataUsingPincode = () => {
    if (pin.length >= 6) {
      alert("Please enter correct pincode");
    } else {
      fetch(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${formattedDate}`
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
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

          <h4>Pincode</h4>
          {pincodeMenu === true ? (
            <ToggleOffIcon
              fontSize="large"
              onClick={() => setPincodeMenu(false)}
              style={{ marginLeft: -70 }}
            />
          ) : (
            <ToggleOnIcon
              onClick={() => setPincodeMenu(true)}
              fontSize="large"
              style={{ color: "red", marginLeft: -70 }}
            />
          )}
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
                  {districts?.length === 0 ? (
                    <MenuItem disabled={true}>Select a State First</MenuItem>
                  ) : null}
                  {districts?.map((districtData) => (
                    <MenuItem value={districtData?.district_id}>
                      {districtData?.district_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <TextField
                  id="outlined-number"
                  margin="normal"
                  label="Pin Code"
                  type="number"
                  variant="outlined"
                  InputProps={{
                    className: classes.text,
                  }}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
                <SearchIcon
                  onClick={fetchDataUsingPincode}
                  style={{
                    margin: 10,
                    background: "#347edd",
                    color: "white",
                    padding: 5,
                    cursor: "pointer",
                    width: 30,
                    height: 43,
                    marginBottom: 12,
                    borderRadius: "2px",
                  }}
                  fontSize="medium"
                />
              </div>
            )}

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                format="dd-MM-yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                InputProps={{ className: classes.input }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
