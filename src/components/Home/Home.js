import "date-fns";
import "./Home.css";

import DateFnsUtils from "@date-io/date-fns";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React, { useEffect, useState } from "react";

import VaccineDataMain from "../VaccineData/VaccineDataMain";

const Home = () => {
  const [state, setState] = useState([]);
  const [stateCode, setStateCode] = useState("States");
  const [districts, setDistricts] = useState([]);
  const [districtCode, setDistrictCode] = useState(
    "PLEASE SELECT A STATE FIRST"
  );
  const [pin, setPin] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [vaccineData, setVaccineData] = useState([]);
  const [toSearchValue, setToSearchValue] = useState("");
  const [toSearch] = useState([
    "Find By District",
    "Find By PinCode & Date",
    "Find By Pincode & Date(Slots for next 7 days)",
    "Find By District & Date(Slots for next 7 days)",
  ]);

  const GetFormattedDate = () => {
    var month = selectedDate.getMonth() + 1;
    var day = selectedDate.getDate();
    var year = selectedDate.getFullYear();
    var finalDate = day + "-" + month + "-" + year;

    setFormattedDate(finalDate);
  };

  console.log(formattedDate);

  useEffect(() => {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => res.json())
      .then((data) => {
        setState(data.states);
      });
    GetFormattedDate();
    // eslint-disable-next-line
  }, [selectedDate, formattedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setVaccineData([]);
    setDistricts([]);
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

  const findByDistrict = async (e) => {
    const districtCode = e.target.value;

    const url =
      districtCode === "PLEASE SELECT A STATE FIRST"
        ? null
        : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtCode}&date=${formattedDate}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDistrictCode(districtCode);
        setVaccineData(data.sessions);
        console.log(data);
      });
  };

  const fetchDataUsingCalendarByPin = () => {
    if (pin.length !== 6) {
      alert("A Pincode must be of 6 digits");
    } else {
      fetch(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${formattedDate}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  const fetchDataUsingByPin = () => {
    if (pin.length !== 6) {
      alert("A Pincode must be of 6 digits");
    } else {
      fetch(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${formattedDate}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <>
      <Container maxWidth="md">
        <div className="home">
          <div className="home__intro">
            <h2>Vaccine Availablity</h2>
            <hr />
          </div>
          <div className="home_selectionHeader">
            <h4>Select a method to search for slots</h4>
            <FormControl>
              <InputLabel id="select-outlined-label">
                Search Criteria
              </InputLabel>
              <Select
                variant="filled"
                value={toSearchValue}
                onChange={(e) => {
                  setToSearchValue(e.target.value);
                  setVaccineData([]);
                }}
              >
                {toSearch.map((functionName, index) => {
                  return (
                    <MenuItem key={index} value={functionName}>
                      {functionName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>

          {toSearchValue === "" && (
            <h3 className="empty_error">Please Select an Option</h3>
          )}

          {toSearchValue === "Find By District" ? (
            <div className="home_selectedHeaders">
              <FormControl className="form-control">
                <Select
                  variant="outlined"
                  value={stateCode}
                  onChange={onStateChange}
                >
                  <MenuItem value="States">Select a State</MenuItem>
                  {state?.map((stateData) => (
                    <MenuItem value={stateData?.state_id}>
                      {stateData?.state_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className="form-control">
                {/* <Select
                  variant="outlined"
                  value={districtCode}
                  onChange={findByDistrict}
                > */}
                {districts?.length !== 0 ? (
                  <>
                    <Select
                      variant="outlined"
                      value={districtCode}
                      onChange={findByDistrict}
                    >
                      {districts?.map((districtData) => (
                        <MenuItem value={districtData?.district_id}>
                          {districtData?.district_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </>
                ) : (
                  <>
                    <Select
                      variant="outlined"
                      value={districtCode}
                      onChange={findByDistrict}
                    >
                      <MenuItem disabled={true}>Select a State First</MenuItem>
                    </Select>
                  </>
                )}
              </FormControl>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  format="dd-MM-yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="districtDateInput"
                />
              </MuiPickersUtilsProvider>
            </div>
          ) : null}

          {toSearchValue === "Find By Pincode & Date(Slots for next 7 days)" ? (
            <div className="home_selectedPin">
              <div className="home_selectedpincontainer">
                <TextField
                  id="outlined-number"
                  margin="normal"
                  label="Pin Code"
                  type="number"
                  variant="outlined"
                  className="textField"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
                <SearchIcon
                  onClick={fetchDataUsingCalendarByPin}
                  style={{
                    background: "#3f51b5",
                    color: "#fff",
                    padding: 5,
                    cursor: "pointer",
                    width: 30,
                    height: 45,
                    marginTop: 16,
                    borderRadius: "0 5px 5px 0",
                  }}
                  fontSize="medium"
                />
              </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  format="dd-MM-yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="input"
                />
              </MuiPickersUtilsProvider>
            </div>
          ) : null}

          {toSearchValue === "Find By PinCode & Date" ? (
            <div className="home_selectedPin">
              <div className="home_selectedpincontainer">
                <TextField
                  id="outlined-number"
                  margin="normal"
                  label="Pin Code"
                  type="number"
                  variant="outlined"
                  className="textField"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
                <SearchIcon
                  onClick={fetchDataUsingByPin}
                  style={{
                    background: "#3f51b5",
                    color: "#fff",
                    padding: 5,
                    cursor: "pointer",
                    width: 30,
                    height: 45,
                    marginTop: 16,
                    borderRadius: "0 5px 5px 0",
                  }}
                  fontSize="medium"
                />
              </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  format="dd-MM-yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="input"
                />
              </MuiPickersUtilsProvider>
            </div>
          ) : null}

          <VaccineDataMain vaccineData={vaccineData} />
        </div>
      </Container>
    </>
  );
};
export default Home;
