import { useState, useEffect } from "react";
import {
  Paper,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import "./CovidWorld.css";

const CovidWorld = ({ value, index }) => {
  const [allWorldData, setAllWorldData] = useState([]);
  const [selectOptions, setSelectOptions] = useState("");

  const getAllWorldCovidData = async () => {
    await fetch(`https://disease.sh/v3/covid-19/all`)
      .then((response) => response.json())
      .then((data) => {
        setAllWorldData(data);
      });
  };

  // TODOs
  // 1. make a select field to filter out the slection
  //    - get whole world (done)
  //    - get Data by continents
  //    - get Data by specific continent
  //    - get Data by countries
  //    - get Data by country

  const paperContents = [
    {
      paperTitle: "Total Active Cases",
      paperAnswer: allWorldData.active,
    },
    {
      paperTitle: "Active per million",
      paperAnswer: allWorldData.activePerOneMillion,
    },
    {
      paperTitle: "Affected Countries",
      paperAnswer: allWorldData.affectedCountries,
    },
    {
      paperTitle: "Total Cases",
      paperAnswer: allWorldData.cases,
    },
    {
      paperTitle: "Active Cases per million",
      paperAnswer: allWorldData.casesPerOneMillion,
    },
    {
      paperTitle: "critical",
      paperAnswer: allWorldData.critical,
    },
    {
      paperTitle: "critical per million",
      paperAnswer: allWorldData.criticalPerOneMillion,
    },
    {
      paperTitle: "deaths",
      paperAnswer: allWorldData.deaths,
    },
    {
      paperTitle: "deaths Per OneMillion",
      paperAnswer: allWorldData.deathsPerOneMillion,
    },
    {
      paperTitle: "one Case Per People",
      paperAnswer: allWorldData.oneCasePerPeople,
    },
    {
      paperTitle: "one Death Per People",
      paperAnswer: allWorldData.oneDeathPerPeople,
    },
    {
      paperTitle: "one Test Per People",
      paperAnswer: allWorldData.oneTestPerPeople,
    },
    {
      paperTitle: "population",
      paperAnswer: allWorldData.population,
    },
    {
      paperTitle: "recovered",
      paperAnswer: allWorldData.recovered,
    },
    {
      paperTitle: "recovered Per One Million",
      paperAnswer: allWorldData.recoveredPerOneMillion,
    },
    {
      paperTitle: "tests",
      paperAnswer: allWorldData.tests,
    },
    {
      paperTitle: "tests Per One Million",
      paperAnswer: allWorldData.testsPerOneMillion,
    },
    {
      paperTitle: "today's Cases",
      paperAnswer: allWorldData.todayCases,
    },
    {
      paperTitle: "today's Deaths",
      paperAnswer: allWorldData.todayDeaths,
    },
    {
      paperTitle: "today's Recoveries",
      paperAnswer: allWorldData.todayRecovered,
    },
  ];

  const worldSelectOptions = [
    "Get COVID19 World Information",
    "Get COVID19 Data by continents",
    "Get COVID19 Data by specific continent",
    "Get COVID19 Data by countries",
    "Get COVID19 Data by country",
  ];

  useEffect(() => {
    getAllWorldCovidData();
  }, []);
  return (
    <>
      {value === index && (
        <>
          <div class="world_wrapper">
            <div class="select_options">
              <FormControl variant="filled">
                <InputLabel id="demo-simple-select-filled-label">
                  Search...
                </InputLabel>
                <Select
                  labelId="world_select_options"
                  id="world_select_options"
                  value={selectOptions}
                  fullWidth
                  onChange={(e) => {
                    setSelectOptions(e.target.value);
                  }}
                  error={selectOptions === ""}
                >
                  {worldSelectOptions.map((option, index) => {
                    return (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText>
                  {selectOptions === "" ? "Please Select a value" : " "}
                </FormHelperText>
              </FormControl>
            </div>
            <div class="world_head">
              {selectOptions === "Get COVID19 World Information" && (
                <PaperInformation paperContents={paperContents} />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

const PaperInformation = ({ paperContents }) => {
  return (
    <>
      {paperContents.map((paperContent, index) => {
        return (
          <>
            <Paper className="world_head_paper" key={index}>
              <h3 className="paper_title">{paperContent.paperTitle}</h3>
              <p className="count">{paperContent.paperAnswer}</p>
            </Paper>
          </>
        );
      })}
    </>
  );
};
export default CovidWorld;
