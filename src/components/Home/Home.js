import "date-fns";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Container,
  MenuItem,
  FormControl,
  Select,
  Paper,
  TextField,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";

import "./Home.css";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#BB86FC",
  },
  textfield: {
    color: "#BB86FC",
    height: "50px",
    width: "248px",
    padding: "0px 0px 0px 0px",
    margin: "-5px 0px 0px 0px",
  },
  paper: {
    height: 70,
    width: 250,
    backgroundColor: "#31333F",
    padding: "0px 10px 0px 10px",
  },
}));

const Home = () => {
  const [state, setState] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date("2021-04-30"));
  const [stateCode, setStateCode] = useState("States");
  const [district, setDistricts] = useState([]);
  const [districtCode, setDistrictCode] = useState("Districts");
  const [vaccinedData, setVaccinatedData] = useState([]);
  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => res.json())
      .then((data) => {
        setState(data.states);
      });
  }, [setState]);

  console.log(vaccinedData);

  const onStateChange = async (e) => {
    const stateCode = e.target.value;
    const url =
      stateCode === "States"
        ? "https://cdn-api.co-vin.in/api/v2/admin/location/states"
        : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStateCode(stateCode);
        setDistricts(data.districts);
      });
  };

  const onDistrictChange = async (e) => {
    const stateCode = e.target.value;
    const url =
      stateCode === "Districts"
        ? "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021"
        : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${stateCode}&date=31-03-2021
        `;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDistrictCode(stateCode);
        setVaccinatedData(data);
      });
  };

  return (
    <Container>
      <div className="home">
        <h2>CoWIN Vaccination Slot Availablity</h2>
        <div className="home__info">
          <p>
            The CoWIN APIs are geo fenced, so sometimes you may not see an
            output! Please try after sometime
          </p>
        </div>

        <div className="home__option">
          <div className="home__optionRight">
            <div className="text">
              <Typography>Select State</Typography>
              <FormControl>
                <Select
                  variant="outlined"
                  value={stateCode}
                  onChange={onStateChange}
                >
                  <MenuItem value="States">States</MenuItem>
                  {state.map((state) => (
                    <MenuItem value={state?.state_id}>
                      {state?.state_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="text">
              <Typography>Select District</Typography>
              <FormControl>
                <Select
                  variant="outlined"
                  value={districtCode}
                  onChange={onDistrictChange}
                >
                  {district.map((state) => (
                    <MenuItem value={state?.district_id}>
                      {state?.district_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="space-around" spacing={2}>
              <Grid item>
                <Paper className={classes.paper} elevation={3}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Date picker dialog"
                      format="dd-MM-yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      InputProps={{ className: classes.input }}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper} elevation={3}>
                  <TextField
                    id="outlined-number"
                    margin="normal"
                    label="Pin Code"
                    type="number"
                    variant="outlined"
                    InputProps={{
                      className: classes.textfield,
                    }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
