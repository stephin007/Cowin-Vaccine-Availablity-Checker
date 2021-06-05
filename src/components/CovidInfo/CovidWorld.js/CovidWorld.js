import { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";

import "./CovidWorld.css";

const CovidWorld = ({ value, index }) => {
  const [allWorldData, setAllWorldData] = useState([]);

  const getAllWorldCovidData = async () => {
    await fetch(`https://disease.sh/v3/covid-19/all`)
      .then((response) => response.json())
      .then((data) => {
        setAllWorldData(data);
      });
  };

  useEffect(() => {
    getAllWorldCovidData();
  }, []);
  return (
    <>
      {value === index && (
        <>
          <div class="world_wrapper">
            <div class="world_head">
              <Paper className="world_head_paper">
                <h3 className="active">Total Active Cases</h3>
                {allWorldData.active}
              </Paper>
              <Paper className="world_head_paper">
                <h3 className="recovered">Total Recovered</h3>
              </Paper>
              <Paper className="world_head_paper">
                <h3 className="vaccinated">Total Vaccinated</h3>
              </Paper>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CovidWorld;
