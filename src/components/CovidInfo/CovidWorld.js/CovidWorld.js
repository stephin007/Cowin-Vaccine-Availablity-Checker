import { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";

import "./CovidWorld.css";

const CovidWorld = ({ value, index }) => {
  const [allWorldData, setAllWorldData] = useState([]);

  const getAllWorldCovidData = async () => {
    await fetch(`https://disease.sh/v3/covid-19/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
                <h3 className="paper_title">Total Active Cases</h3>
                <p className="count">{allWorldData.active}</p>
              </Paper>
              <Paper className="world_head_paper">
                <h3 className="paper_title">Active per million</h3>
                <p className="count">{allWorldData.activePerOneMillion}</p>
              </Paper>
              <Paper className="world_head_paper">
                <h3 className="paper_title">Affected Countries</h3>
                <p className="count">{allWorldData.affectedCountries}</p>
              </Paper>
              <Paper className="world_head_paper">
                <h3 className="paper_title">Total Cases</h3>
                <p className="count">{allWorldData.cases}</p>
              </Paper>
              <Paper className="world_head_paper">
                <h3 className="paper_title">Active Cases per million</h3>
                <p className="count">{allWorldData.casesPerOneMillion}</p>
              </Paper>
              <Paper className="world_head_paper">
                <h3 className="paper_title">critical</h3>
                <p className="count">{allWorldData.critical}</p>
              </Paper>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CovidWorld;
