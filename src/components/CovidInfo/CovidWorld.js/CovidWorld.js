import { useState, useEffect } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import "./CovidWorld.css";
import {
  WorldPaperInformation,
  ContinentPaperInformation,
} from "./PaperContents";

const CovidWorld = ({ value, index }) => {
  const [allWorldData, setAllWorldData] = useState([]);
  const [dataByContinent, setDataByContinent] = useState([]);
  const [selectOptions, setSelectOptions] = useState("");
  // TODOs
  // 1. make a select field to filter out the slection
  //    - get whole world (done)
  //    - get Data by continents
  //    - get Data by specific continent
  //    - get Data by countries
  //    - get Data by country

  const SelectOptions = [
    "Get COVID19 World Information",
    "Get COVID19 Data by continents",
    "Get COVID19 Data by specific continent",
    "Get COVID19 Data by countries",
    "Get COVID19 Data by country",
  ];

  const WorldPaperContents = [
    {
      paperTitle: "Total Active Cases",
      paperAnswer: allWorldData.active,
    },
    {
      paperTitle: "Active per one million",
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

  const ContinentsPaperContent = [
    {
      paperTitle: "Total Active Cases",
      paperAnswer: dataByContinent.active,
    },
    {
      paperTitle: "Active per one million",
      paperAnswer: dataByContinent.activePerOneMillion,
    },
    {
      paperTitle: "Affected Countries",
      paperAnswer: dataByContinent.affectedCountries,
    },
    {
      paperTitle: "Total Cases",
      paperAnswer: dataByContinent.cases,
    },
    {
      paperTitle: "Active Cases per million",
      paperAnswer: dataByContinent.casesPerOneMillion,
    },
    {
      paperTitle: "critical",
      paperAnswer: dataByContinent.critical,
    },
    {
      paperTitle: "critical per million",
      paperAnswer: dataByContinent.criticalPerOneMillion,
    },
    {
      paperTitle: "deaths",
      paperAnswer: dataByContinent.deaths,
    },
    {
      paperTitle: "deaths Per OneMillion",
      paperAnswer: dataByContinent.deathsPerOneMillion,
    },
    {
      paperTitle: "one Case Per People",
      paperAnswer: dataByContinent.oneCasePerPeople,
    },
    {
      paperTitle: "one Death Per People",
      paperAnswer: dataByContinent.oneDeathPerPeople,
    },
    {
      paperTitle: "one Test Per People",
      paperAnswer: dataByContinent.oneTestPerPeople,
    },
    {
      paperTitle: "population",
      paperAnswer: dataByContinent.population,
    },
    {
      paperTitle: "recovered",
      paperAnswer: dataByContinent.recovered,
    },
    {
      paperTitle: "recovered Per One Million",
      paperAnswer: dataByContinent.recoveredPerOneMillion,
    },
    {
      paperTitle: "tests",
      paperAnswer: dataByContinent.tests,
    },
    {
      paperTitle: "tests Per One Million",
      paperAnswer: dataByContinent.testsPerOneMillion,
    },
    {
      paperTitle: "today's Cases",
      paperAnswer: dataByContinent.todayCases,
    },
    {
      paperTitle: "today's Deaths",
      paperAnswer: dataByContinent.todayDeaths,
    },
    {
      paperTitle: "today's Recoveries",
      paperAnswer: dataByContinent.todayRecovered,
    },
  ];

  const getAllWorldCovidData = async () => {
    await fetch(`https://disease.sh/v3/covid-19/all`)
      .then((response) => response.json())
      .then((data) => {
        setAllWorldData(data);
      });
  };

  const getCovidDataByContinent = async () => {
    await fetch(`https://disease.sh/v3/covid-19/continents`)
      .then((response) => response.json())
      .then((data) => {
        setDataByContinent(data);
        console.log(data);
      });
  };

  useEffect(() => {
    getAllWorldCovidData();
    getCovidDataByContinent();
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
                  {SelectOptions.map((option, index) => {
                    return (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText style={{ color: "red" }}>
                  {selectOptions === "" ? "Please Select a value" : " "}
                </FormHelperText>
              </FormControl>
            </div>
            <div class="world_head">
              {selectOptions === "Get COVID19 World Information" && (
                <>
                  <WorldPaperInformation
                    WorldPaperContents={WorldPaperContents}
                  />
                </>
              )}

              {selectOptions === "Get COVID19 Data by continents" && (
                <>
                  <ContinentPaperInformation
                    ContinentsPaperContent={ContinentsPaperContent}
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CovidWorld;
