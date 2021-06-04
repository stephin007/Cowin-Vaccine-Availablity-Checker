import * as React from "react";
import {
  Container,
  TextField,
  CircularProgress,
  FormControl,
  Grid,
  Box,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import { useClasses } from "../../lib";
import VaccineDataMain from "../../components/VaccineData/VaccineDataMain";

const BASE_URL = "https://cdn-api.co-vin.in/api/v2";

export const HomePage = () => {
  const classes = useClasses();

  /** ASYNC **/
  const [loadingStates, setLoadingStates] = React.useState(false);
  const [loadingDistricts, setLoadingDistricts] = React.useState(false);

  /** CRITERIA **/
  const [criterias, setCriterias] = React.useState(null);
  const [selectedCriteria, setSelectedCriteria] = React.useState(null);

  /** STATES **/
  const [states, setStates] = React.useState(null);
  const [isStateFieldDirty, setIsStateFieldDirty] = React.useState(false);
  const [selectedState, setSelectedState] = React.useState(null);

  /** DISTRICTS **/
  const [districts, setDistricts] = React.useState(null);
  const [isDistrictFieldDirty, setIsDistrictFieldDirty] = React.useState(false);
  const [selectedDistrict, setSelectedDistrict] = React.useState(null);

  /** PIN **/
  const [selectedPin, setSelectedPin] = React.useState(null);

  /** VACCINES **/
  const [vaccines, setVaccines] = React.useState(null);
  const [loadingVaccines, setLoadingVaccines] = React.useState(false);

  /** MISC **/
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    if (/district/gi.test(selectedCriteria)) {
      console.log(`getting states....`);
      getStates();
    }
  }, [selectedCriteria]);

  React.useEffect(() => {
    getDistricts();
  }, [selectedState]);

  React.useEffect(() => {
    if (
      states &&
      states.length > 0 &&
      districts &&
      districts.length > 0 &&
      (selectedDistrict || selectedPin)
    ) {
      getVaccines();
    }
  }, [selectedDistrict, selectedPin, date]);

  const generateURL = (
    _sub = null,
    _pin = null,
    _district = null,
    _calendar = false
  ) => {
    if (_sub) {
      return `${BASE_URL}${_sub}`;
    }

    let sub;
    const formattedDate = date;

    if (_pin && _calendar) {
      sub = `/appointment/sessions/public/calendarByPin?pincode=${_pin}&date=${formattedDate}`;
    } else if (_pin) {
      sub = `/appointment/sessions/public/findByPin?pincode=${_pin}&date=${formattedDate}`;
    } else if (_district && _calendar) {
      sub = `/appointment/sessions/public/calendarByDistrict?district_id=${_district.district_id}&date=${formattedDate}`;
    } else if (_district) {
      sub = `/appointment/sessions/public/findByDistrict?district_id=${_district.district_id}&date=${formattedDate}`;
    }

    const url = `${BASE_URL}${sub}`;
    console.log({ url });
    return url;
  };

  const getStates = async () => {
    setLoadingStates(true);
    setVaccines(null);
    setSelectedState(null);
    setSelectedDistrict(null);
    const response = await fetch(generateURL("/admin/location/states"));
    const data = await response.json();
    console.log({ data });
    setLoadingStates(false);
    setStates(data.states);
  };

  const getDistricts = async () => {
    setVaccines(null);
    setSelectedDistrict(null);
    if (selectedState && selectedState.state_id) {
      setSelectedDistrict(null);
      setLoadingDistricts(true);
      const response = await fetch(
        generateURL(`/admin/location/districts/${selectedState.state_id}`)
      );
      const data = await response.json();
      setLoadingDistricts(false);
      setDistricts(data.districts);
    }
  };

  const formatDate = (_date, format = "in") => {
    const month = _date.getMonth() + 1;
    const day = _date.getDate();
    const year = _date.getFullYear();
    console.log({ month, day, year });
    if (format === "us") {
      const formatted = `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`;
      console.log({ formatted });
      return formatted;
    }
    return `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;
  };

  const refactor = (_vaccine) => {
    let refactored = {
      ..._vaccine,
      ..._vaccine.sessions[0],
    };
    refactored["fee"] = refactored.vaccine_fees[0].fee;
    delete refactored.vaccine_fees;
    delete refactored.sessions;
    return refactored;
  };

  const getVaccines = async () => {
    setLoadingVaccines(true);
    console.log({
      selectedPin,
      selectedDistrict,
      calendar: /7/gi.test(selectedCriteria),
    });
    const url = generateURL(
      null,
      selectedPin,
      selectedDistrict,
      /7/gi.test(selectedCriteria)
    );
    console.log({ vaccinesURL: url });
    const response = await fetch(url);
    const data = await response.json();
    let _vaccines;
    console.log({ before: _vaccines });
    if (data.hasOwnProperty("centers")) {
      // response has calendar data
      _vaccines = data.centers.map(refactor);
    } else {
      _vaccines = data.sessions;
    }
    console.log({ after: _vaccines });
    setVaccines(_vaccines);
    setLoadingVaccines(false);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      component={Container}
      style={{ paddingTop: ".5rem" }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} className={[classes.gutterBottom]}>
          <FormControl variant={"outlined"} fullWidth>
            <InputLabel id={"criteria-select-label"}>
              Select criteria
            </InputLabel>
            <Select
              labelId={"criteria-select-label"}
              label={"Select criteria"}
              id={"criteria-select"}
              value={selectedCriteria}
              onChange={(e) => {
                setSelectedCriteria(e.target.value);
              }}
            >
              {[
                "Find By District",
                "Find By PinCode & Date",
                "Find By Pincode & Date(Slots for next 7 days)",
                "Find By District & Date(Slots for next 7 days)",
              ].map((value, index) => (
                <MenuItem fullWidth key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/district/gi.test(selectedCriteria) && (
          <>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              className={[classes.gutterBottom]}
            >
              <FormControl variant={"outlined"} fullWidth>
                <InputLabel id={"state-select-label"}>
                  {loadingStates ? (
                    <CircularProgress
                      style={{ color: "rgba(0, 0, 0, 0.5)" }}
                      size={20}
                    />
                  ) : (
                    "Select State"
                  )}
                </InputLabel>
                <Select
                  disabled={loadingStates}
                  labelId={"state-select-label"}
                  label={loadingStates ? "Loading" : "Select State"}
                  id={"state-select"}
                  value={selectedState ? selectedState.state_name : ""}
                  onChange={(e) => {
                    setSelectedState(
                      states.filter(
                        (state) =>
                          state.state_name.toLowerCase() ===
                          e.target.value.toLowerCase()
                      )[0]
                    );
                  }}
                >
                  {states &&
                    states.length > 0 &&
                    states.map((state, index) => (
                      <MenuItem fullWidth key={index} value={state.state_name}>
                        {state.state_name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            {selectedState && (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                className={[classes.gutterBottom]}
              >
                <FormControl variant={"outlined"} fullWidth>
                  <InputLabel id={"district-select-label"}>
                    {loadingDistricts || !districts || districts.length <= 0 ? (
                      <CircularProgress
                        style={{ color: "rgba(0, 0, 0, 0.5)" }}
                        size={20}
                      />
                    ) : (
                      "Select District"
                    )}
                  </InputLabel>
                  <Select
                    disabled={loadingDistricts}
                    labelId={"district-select-label"}
                    label={loadingDistricts ? "Loading" : "Select Districts"}
                    id={"state-select"}
                    value={
                      selectedDistrict ? selectedDistrict.district_name : ""
                    }
                    onChange={(e) => {
                      setSelectedDistrict(
                        districts.filter(
                          (district) =>
                            district.district_name.toLowerCase() ===
                            e.target.value.toLowerCase()
                        )[0]
                      );
                    }}
                  >
                    {(districts || []).map((district, index) => (
                      <MenuItem
                        fullWidth
                        key={index}
                        value={district.district_name}
                      >
                        {district.district_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            )}
            {selectedState && selectedDistrict && (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                className={[classes.gutterBottom]}
              >
                <FormControl fullWidth>
                  <TextField
                    variant={"outlined"}
                    fullWidth
                    id="date"
                    label="Date"
                    type="date"
                    format={"dd-mm-YYYY"}
                    defaultValue={formatDate(new Date(), "us")}
                    onChange={(e) => {
                      const raw = e.target.value.split("-");
                      const day = raw[2];
                      const month = raw[1];
                      const year = raw[0];
                      setDate(`${day}-${month}-${year}`);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>
            )}
          </>
        )}
        {loadingVaccines ? (
          <Box
            className={[classes.widthFull, classes.heightFull]}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CircularProgress size={25} />
          </Box>
        ) : (
          vaccines &&
          vaccines.length > 0 && <VaccineDataMain vaccineData={vaccines} />
        )}
      </Grid>
    </Box>
  );
};
