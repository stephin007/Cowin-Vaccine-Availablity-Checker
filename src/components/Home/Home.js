import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField,
  Container,
  CircularProgress,
  useScrollTrigger,
  Fab,
  Zoom,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Search, KeyboardArrowUp } from "@material-ui/icons";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import "./Home.css";
import NullState from "../NullState";
import VaccineDataMain from "../VaccineData/VaccineDataMain";

// Scroll to Top Fucntion(START)
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fdb82f",
    },
  },
});

const ScrollTop = (props) => {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
// Scroll to Top Function(END)

const Home = (props) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stateCode, setStateCode] = useState("States");
  const [districts, setDistricts] = useState([]);
  const [districtCode, setDistrictCode] = useState(
    "PLEASE SELECT A STATE FIRST"
  );
  const [pin, setPin] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [filterValue, setfilterValue] = useState("ALL");
  const [filtervalueAge, setfiltervalueAge] = useState("ALL");
  const [filtervalueFare, setfiltervalueFare] = useState("ALL");
  const [filtervalueVaccine, setfiltervalueVaccine] = useState("ALL");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [vaccineData, setVaccineData] = useState([]);
  const [pinCodeSearch, setPinCodeSearch] = useState(false);
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
    setDistrictCode("");
  };

  const onStateChange = async (e) => {
    const stateCode = e.target.value;

    setDistricts([]);
    setVaccineData([]);

    setPinCodeSearch(false);

    const url =
      stateCode === "States"
        ? null
        : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateCode}`;
    setLoading(true);
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
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
    setLoading(true);
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setDistrictCode(districtCode);
        setVaccineData(data.sessions);
        setPinCodeSearch(true);
      });
  };

  const fetchDataUsingCalendarByPin = async () => {
    if (pin.length !== 6) {
      alert("A Pincode must be of 6 digits");
    } else {
      setLoading(true);
      await fetch(
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
          setLoading(false);
          setVaccineData(pincodeData);
          setPinCodeSearch(true);
        });
    }
  };

  const fetchDataUsingByPin = async () => {
    if (pin.length !== 6) {
      alert("A Pincode must be of 6 digits");
    } else {
      setLoading(true);
      await fetch(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${formattedDate}`
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          console.log(data);
          setVaccineData(data.sessions);
          setPinCodeSearch(true);
        });
    }
  };
  const filterValuechange = (e) => {
    setfilterValue(e.target.value);
  };
  const filterValueVaccineChange = (e) => {
    setfiltervalueVaccine(e.target.value);
  };
  const filterValueAgeChange = (e) => {
    setfiltervalueAge(e.target.value);
  };
  const filterValueFareChange = (e) => {
    setfiltervalueFare(e.target.value);
  };
  return (
    <>
      <Container maxWidth="md">
        <div className="home">
          <div className="home__intro">
            <h2 id="back-to-top-anchor">Vaccine Availablity</h2>
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
                  setPinCodeSearch(false);
                  setLoading(false);
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
                  {state?.map((stateData) => (
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
                  {state?.map((stateData) => (
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
                  onChange={(e) => {
                    setPinCodeSearch(false);
                    setPin(e.target.value);
                  }}
                />
                <Search
                  onClick={fetchDataUsingCalendarByPin}
                  data-testId="home-fetch-calender-by-pin"
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
                  onChange={(e) => {
                    setPinCodeSearch(false);
                    setPin(e.target.value);
                  }}
                />
                <Search
                  onClick={fetchDataUsingByPin}
                  data-testId="home-fetch-by-pin"
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
          {vaccineData.length > 0 ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FormControl style={{ width: "150px" }}>
                <InputLabel value="ALL">FILTER</InputLabel>
                <Select onChange={filterValuechange}>
                  <MenuItem value="ALL">ALL</MenuItem>
                  <MenuItem value="VACCINE_TYPE">VACCINE TYPE</MenuItem>
                  <MenuItem value="AGE_GROUP">AGE GROUP</MenuItem>
                  <MenuItem value="FARE_TYPE">FARE TYPE</MenuItem>
                </Select>
              </FormControl>
              {filterValue === "AGE_GROUP" ? (
                <FormControl style={{ width: "150px", marginLeft: "20px" }}>
                  <InputLabel value="ALL">AGE</InputLabel>
                  <Select onChange={filterValueAgeChange}>
                    <MenuItem value="18">18-45</MenuItem>
                    <MenuItem value="45">ABOVE 45</MenuItem>
                  </Select>
                </FormControl>
              ) : filterValue === "FARE_TYPE" ? (
                <FormControl style={{ width: "150px", marginLeft: "20px" }}>
                  <InputLabel value="ALL">MINIMUM FARE</InputLabel>
                  <Select onChange={filterValueFareChange}>
                    <MenuItem value="Free">FREE</MenuItem>
                    <MenuItem value="Paid">PAID</MenuItem>
                  </Select>
                </FormControl>
              ) : filterValue === "VACCINE_TYPE" ? (
                <FormControl style={{ width: "150px", marginLeft: "20px" }}>
                  <InputLabel value="ALL">VACCINE</InputLabel>
                  <Select onChange={filterValueVaccineChange}>
                    <MenuItem value="COVISHIELD">COVISHEILD</MenuItem>
                    <MenuItem value="COVAXIN">COVAXIN</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <></>
              )}
            </div>
          ) : null}
          {vaccineData.length === 0 && loading === true ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2rem 0",
              }}
            >
              <CircularProgress />
            </div>
          ) : (
            <VaccineDataMain
              vaccineData={vaccineData}
              filterValue={filterValue}
              filtervalueAge={filtervalueAge}
              filtervalueFare={filtervalueFare}
              filtervalueVaccine={filtervalueVaccine}
            />
          )}
          <NullState
            toSearchValue={toSearchValue}
            vaccineData={vaccineData}
            districtCode={districtCode}
            VaccineDataMain={VaccineDataMain}
            pin={pin}
            pinCodeSearch={pinCodeSearch}
          />
        </div>
      </Container>
      <ThemeProvider theme={theme}>
        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </>
  );
};

export default Home;
