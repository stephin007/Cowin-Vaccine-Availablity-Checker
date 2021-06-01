import React, { useState, useEffect } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField,
  Container,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import SearchIcon from "@material-ui/icons/Search";
import "./Home.css";
import VaccineDataMain from "../VaccineData/VaccineDataMain";
import Pagination from "../Pagination/Pagination";
import { useDataLayerValue } from "../../Context/DataLayer";

const Home = () => {
  const [
    {
      states,
      districts,
      vaccineData,
      toSearch,
      toSearchValue,
      stateCode,
      districtCode,
      vaccinePerPage,
      currentPage,
    },
    dispatch,
  ] = useDataLayerValue();

  const [pin, setPin] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const indexOfLastVaccine = currentPage * vaccinePerPage;
  const indexOfFirstVaccine = indexOfLastVaccine - vaccinePerPage;
  const currentVaccine = vaccineData.slice(
    indexOfFirstVaccine,
    indexOfLastVaccine
  );

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(vaccineData.length / vaccinePerPage); i++) {
    pageNumber.push(i);
  }

  const paginate = (pageNumber) => {
    dispatch({
      type: "SET_CURRENTPAGE",
      currentPage: pageNumber,
    });
  };

  const nextPage = () => {
    dispatch({
      type: "SET_CURRENTPAGE",
      currentPage: currentPage + 1,
    });
    if (currentPage + 1 > pageNumber.length) {
      dispatch({
        type: "SET_CURRENTPAGE",
        currentPage: pageNumber.length,
      });
    }
  };

  const prevPage = () => {
    dispatch({
      type: "SET_CURRENTPAGE",
      currentPage: currentPage - 1,
    });
    if (currentPage - 1 <= 0 && pageNumber.length) {
      dispatch({
        type: "SET_CURRENTPAGE",
        currentPage: pageNumber.slice(0, 1),
      });
    }
  };

  const GetFormattedDate = () => {
    var month = selectedDate.getMonth() + 1;
    var day = selectedDate.getDate();
    var year = selectedDate.getFullYear();
    var finalDate = day + "-" + month + "-" + year;
    setFormattedDate(finalDate);
  };

  useEffect(() => {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_STATES",
          states: data.states,
        });
      });
    GetFormattedDate();
    // eslint-disable-next-line
  }, [selectedDate, formattedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    dispatch({
      type: "SET_DISTRICTCODE",
      districtCode: "",
    });
    dispatch({
      type: "SET_CURRENTPAGE",
      currentPage: 1,
    });
  };

  const onStateChange = async (e) => {
    const stateCode = e.target.value;
    dispatch({
      type: "SET_DISTRICTS",
      districts: [],
    });
    dispatch({
      type: "SET_CURRENTPAGE",
      currentPage: 1,
    });
    dispatch({
      type: "SET_VACCINEDATA",
      vaccineData: [],
    });

    const url =
      stateCode === "States"
        ? null
        : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateCode}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_STATECODE",
          stateCode: stateCode,
        });
        dispatch({
          type: "SET_DISTRICTS",
          districts: data.districts,
        });
      });
  };

  const findByDistrict = async (e) => {
    const districtCode = e.target.value;
    dispatch({
      type: "SET_CURRENTPAGE",
      currentPage: 1,
    });
    const url =
      districtCode === "PLEASE SELECT A STATE FIRST"
        ? null
        : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtCode}&date=${formattedDate}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_DISTRICTCODE",
          districtCode: districtCode,
        });

        dispatch({
          type: "SET_VACCINEDATA",
          vaccineData: data.sessions,
        });
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
          const pincodeData = data?.centers?.map((res) => ({
            name: res?.name,
            vaccine: res?.sessions?.slice(0, 1).map((res) => res?.vaccine),
            block_name: res?.block_name,
            district_name: res?.district_name,
            state_name: res?.state_name,
            pincode: res?.pincode,
            from: res?.from,
            to: res?.to,
            available_capacity: res?.sessions
              ?.slice(0, 1)
              .map((res) => res?.available_capacity),
            date: res?.sessions?.slice(0, 1).map((res) => res?.date),
            min_age_limit: res?.sessions
              ?.slice(0, 1)
              .map((res) => res?.min_age_limit),
            fee_type: res?.fee_type,
            slots: res?.sessions?.slice(0, 1).map((res) => res.slots),
          }));
          dispatch({
            type: "SET_VACCINEDATA",
            vaccineData: pincodeData,
          });

          dispatch({
            type: "SET_CURRENTPAGE",
            currentPage: 1,
          });
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
          dispatch({
            type: "SET_VACCINEDATA",
            vaccineData: data.sessions,
          });
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
                  dispatch({
                    type: "SET_TOSEARCHVALUE",
                    toSearchValue: e.target.value,
                  });
                  dispatch({
                    type: "SET_VACCINEDATA",
                    vaccineData: [],
                  });
                }}
              >
                {toSearch.map((functionName, index) => {
                  return (
                    <MenuItem
                      className="search__values"
                      key={index}
                      value={functionName}
                    >
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
                  {states?.map((stateData) => (
                    <MenuItem value={stateData?.state_id}>
                      {stateData?.state_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className="form-control">
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

          {toSearchValue ===
          "Find By District & Date(Slots for next 7 days)" ? (
            <div className="home_selectedHeaders">
              <FormControl className="form-control">
                <Select
                  variant="outlined"
                  value={stateCode}
                  onChange={onStateChange}
                >
                  <MenuItem value="States">Select a State</MenuItem>
                  {states?.map((stateData) => (
                    <MenuItem value={stateData?.state_id}>
                      {stateData?.state_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className="form-control">
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

          {vaccineData.length === 0 ? null : (
            <>
              <VaccineDataMain vaccineData={currentVaccine} />
              {pageNumber.length === 1 ? null : (
                <Pagination
                  pageNumber={pageNumber}
                  paginate={paginate}
                  prevPage={prevPage}
                  currentPageChange={currentPage}
                  nextPage={nextPage}
                  currentPage={currentPage}
                />
              )}
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
