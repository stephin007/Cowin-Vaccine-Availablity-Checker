import { useState } from "react";
import {
  Paper,
  CircularProgress,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import "./CovidWorld.css";

export const WorldPaperInformation = ({ WorldPaperContents, loading }) => {
  return (
    <>
      {!loading ? (
        <>
          {WorldPaperContents.map((WorldPaperContent, index) => {
            const { paperTitle, paperAnswer } = WorldPaperContent;
            return (
              <>
                <Paper className="world_head_paper" key={index}>
                  <h3 className="paper_title">{paperTitle}</h3>
                  <p className="count">{paperAnswer}</p>
                </Paper>
              </>
            );
          })}
        </>
      ) : (
        <>
          <div
            style={{
              textAlign: "center",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress />
          </div>
        </>
      )}
    </>
  );
};

export const ContinentPaperInformation = ({ dataByAllContinents, loading }) => {
  return (
    <>
      {!loading ? (
        <>
          <div className="continents_head">
            {dataByAllContinents.map((data, index) => {
              const { continent, active, critical, cases, deaths, recovered } =
                data;
              return (
                <>
                  <Paper className="world_head_paper" key={index}>
                    <h3 className="paper_title">{continent}</h3>
                    <p className="count">
                      <span className="count_heading">Active</span>
                      {active}
                    </p>
                    <p className="count">
                      <span className="count_heading">Cases</span>
                      {cases}
                    </p>
                    <p className="count">
                      <span className="count_heading">critical</span>
                      {critical}
                    </p>
                    <p className="count">
                      <span className="count_heading">deaths</span>
                      {deaths}
                    </p>
                    <p className="count">
                      <span className="count_heading">recovered</span>
                      {recovered}
                    </p>
                  </Paper>
                </>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              textAlign: "center",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress />
          </div>
        </>
      )}
    </>
  );
};

export const SingleContinentPaperInformation = ({
  loading,
  getCovidDataOfSingleContinent,
  continentsData,
}) => {
  const [continentNames] = useState([
    "North America",
    "Asia",
    "South America",
    "Europe",
    "Africa",
    "Australia-Oceania",
  ]);
  const [continentValue, setContinentValue] = useState("");
  return (
    <>
      {!loading ? (
        <>
          <div className="single_continent_head">
            <div className="continent_select_options">
              <FormControl variant="filled">
                <InputLabel id="demo-simple-select-filled-label">
                  Select a Continent
                </InputLabel>
                <Select
                  labelId="world_select_options"
                  id="world_select_options"
                  value={continentValue}
                  fullWidth
                  onChange={(e) => {
                    setContinentValue(e.target.value);
                    getCovidDataOfSingleContinent(e.target.value);
                  }}
                  error={continentValue === ""}
                >
                  {continentNames.map((option, index) => {
                    return (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText style={{ color: "red" }}>
                  {continentValue === "" ? "Please Select a value" : " "}
                </FormHelperText>
              </FormControl>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              textAlign: "center",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress />
          </div>
        </>
      )}
    </>
  );
};
