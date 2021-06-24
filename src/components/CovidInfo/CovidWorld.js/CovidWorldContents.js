import { useState } from "react";
import {
  CircularProgress,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  Container,
  makeStyles,
} from "@material-ui/core";

import { Line, Doughnut } from "react-chartjs-2";
import "./CovidWorld.css";

const useStyles = makeStyles({
  progress: {
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  chart: {
    marginTop: "2rem",
  },
});

export const WorldChart = ({ allWorldData, loading }) => {
  const classes = useStyles();
  const initialData = {
    labels: [
      "Active per one million",
      "Affected Countries",
      "critical per million",
      "deaths Per OneMillion",
      "one Case Per People",
      "one Death Per People",
      "one Test Per People",
      "today's Deaths",
    ],
    datasets: [
      {
        label: "DataSet #1",
        fill: true,
        data: [
          allWorldData.activePerOneMillion,
          allWorldData.affectedCountries,
          allWorldData.criticalPerOneMillion,
          allWorldData.deathsPerOneMillion,
          allWorldData.oneCasePerPeople,
          allWorldData.oneDeathPerPeople,
          allWorldData.oneTestPerPeople,
          allWorldData.todayDeaths,
        ],
        backgroundColor: [
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const additionalData1 = {
    labels: [
      "Active Cases per million",
      "critical",
      "recovered Per One Million",
      "tests Per One Million",
      "today's Cases",
      "today's Recoveries",
    ],
    datasets: [
      {
        label: "DataSet #2",
        fill: true,
        data: [
          allWorldData.casesPerOneMillion,
          allWorldData.critical,
          allWorldData.recoveredPerOneMillion,
          allWorldData.testsPerOneMillion,
          allWorldData.todayCases,
          allWorldData.todayRecovered,
        ],
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 159, 64, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const additionalData2 = {
    labels: [
      "Total Active Cases",
      "Total Cases",
      "deaths",
      "population",
      "recovered",
      "tests",
    ],
    datasets: [
      {
        label: "DataSet #3",
        fill: true,
        data: [
          allWorldData.active,
          allWorldData.cases,
          allWorldData.deaths,
          allWorldData.population,
          allWorldData.recovered,
          allWorldData.tests,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container maxWidth="lg">
      {!loading ? (
        <>
          <p>Swipe left to see more details...</p>
          <div className="world_head__WorldChart">
            <Doughnut
              data={initialData}
              className="world_head__WorldChart_doughnut"
            />
            <Doughnut
              data={additionalData1}
              className="world_head__WorldChart_doughnut"
            />
            <Doughnut
              data={additionalData2}
              className="world_head__WorldChart_doughnut"
            />
          </div>
        </>
      ) : (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )}
    </Container>
  );
};

export const SingleContinentChartInformation = ({
  loading,
  getCovidDataOfSingleContinent,
  continentsData,
}) => {
  const [continentNames] = useState([
    "North America",
    "South America",
    "Europe",
    "Africa",
    "Asia",
    "Australia-Oceania",
  ]);
  const [continentValue, setContinentValue] = useState("");
  const classes = useStyles();
  const continentData = {
    labels: [
      "Active Cases per million",
      "Critical",
      "Recovered Per One Million",
      "Tests Per One Million",
      "Today's Cases",
      "Today's Recoveries",
    ],
    datasets: [
      {
        label: "Continent Covid19 data",
        fill: true,
        data: [
          continentsData.casesPerOneMillion,
          continentsData.critical,
          continentsData.recoveredPerOneMillion,
          continentsData.testsPerOneMillion,
          continentsData.todayCases,
          continentsData.todayRecovered,
        ],
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 159, 64, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
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
                  labelId="continent_select_options"
                  id="continent_select_options"
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
              <br />
              {continentValue !== "" && <Line data={continentData} />}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.progress}>
            <CircularProgress />
          </div>
        </>
      )}
    </>
  );
};