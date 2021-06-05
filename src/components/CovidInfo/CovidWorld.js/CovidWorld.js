import React from "react";
import { Paper } from "@material-ui/core";

import "./CovidWorld.css";

const CovidWorld = ({ value, index }) => {
  return (
    <>
      {value === index && (
        <>
          <div class="world_wrapper">
            <div class="world_head">
              <Paper className="world_head_paper">Total Cases</Paper>
              <Paper className="world_head_paper">Total Recovered</Paper>
              <Paper className="world_head_paper">Total Vaccinated</Paper>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CovidWorld;
