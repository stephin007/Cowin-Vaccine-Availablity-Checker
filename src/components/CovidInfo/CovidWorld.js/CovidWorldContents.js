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

const continentNames = [
  "North America",
  "South America",
  "Europe",
  "Africa",
  "Asia",
  "Australia-Oceania",
];

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
  const [continentValue, setContinentValue] = useState("");
  const classes = useStyles();
  const continentData = {
    labels: [
      "Active",
      "Cases",
      "Critical",
      "Recovered",
      "Tests",
      "Today's Cases",
      "Today's Deaths",
      "Today's Recoveries",
    ],
    datasets: [
      {
        fill: true,
        data: [
          continentsData.active,
          continentsData.cases,
          continentsData.critical,
          continentsData.recovered,
          continentsData.tests,
          continentsData.todayCases,
          continentsData.todayDeaths,
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
              {continentValue !== "" && (
                <Line
                  data={continentData}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              )}
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

export const SingleCountryInformation = ({
  loading,
  countryNames,
  getCovidDataOfSingleContinent,
  getCovidDataOfSingleCountry,
  countryData,
}) => {
  const classes = useStyles();
  const [continentValueforCountry, setContinentValueforCountry] = useState("");
  const [valueOfCountry, setValueOfCountry] = useState("");

  return (
    <>
      {!loading ? (
        <>
          <div className="single_country_head">
            <div className="single_country_dropdowns">
              <FormControl variant="filled">
                <InputLabel id="demo-simple-select-filled-label">
                  Select a Continent
                </InputLabel>
                <Select
                  labelId="continent_select_options"
                  id="continent_select_options"
                  value={continentValueforCountry}
                  fullWidth
                  onChange={(e) => {
                    setContinentValueforCountry(e.target.value);
                    getCovidDataOfSingleContinent(e.target.value);
                  }}
                  error={continentValueforCountry === ""}
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
                  {continentValueforCountry === ""
                    ? "Please Select a continent"
                    : " "}
                </FormHelperText>
                <FormControl variant="filled">
                  <InputLabel id="demo-simple-select-filled-label">
                    Select a Country
                  </InputLabel>
                  <Select
                    labelId="country_select_options"
                    id="country_select_options"
                    value={valueOfCountry}
                    fullWidth
                    onChange={(e) => {
                      setValueOfCountry(e.target.value);
                      getCovidDataOfSingleCountry(e.target.value);
                    }}
                    error={valueOfCountry === ""}
                  >
                    {continentValueforCountry === "" ? (
                      <MenuItem value="" disabled>
                        Select a Continent First
                      </MenuItem>
                    ) : null}
                    {continentValueforCountry !== "" &&
                      countryNames.map((option, index) => {
                        return (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        );
                      })}
                  </Select>
                  <FormHelperText style={{ color: "red" }}>
                    {valueOfCountry === "" ? "Please Select a country" : " "}
                  </FormHelperText>
                </FormControl>
              </FormControl>
            </div>
            {countryData.countryInfo && (
              <img src={countryData.countryInfo.flag} alt="Country Flag" />
            )}
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
