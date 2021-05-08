import React, { useState } from "react";
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
              <Select variant="outlined">
                <MenuItem value="States">States</MenuItem>
                <MenuItem value="1">Delhi</MenuItem>
              </Select>
            </FormControl>
            {pincodeMenu === true ? (
              <FormControl>
                <Select variant="outlined">
                  <MenuItem value="States">States</MenuItem>
                  <MenuItem value="1">Delhi</MenuItem>
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
              defaultValue="2017-05-24"
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
