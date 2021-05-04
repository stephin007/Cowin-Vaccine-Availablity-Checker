import React from "react";
import "./Home.css";
import { Grid, Slider } from "@material-ui/core";

const Home = () => {
  return (
    <div className="home">
      <h2>CoWIN Vaccination Slot Availablity</h2>

      <div className="home__info">
        <p>
          The CoWIN APIs are geo fenced, so sometimes you may not see an output!
          Please try after sometime
        </p>
      </div>

      <div>
        <label></label>
        <Grid container spacing={2}>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
