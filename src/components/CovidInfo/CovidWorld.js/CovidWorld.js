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
  WorldChart,
  ContinentChart,
  SingleContinentPaperInformation,
} from "./CovidWorldContents";

const CovidWorld = ({ value, index }) => {
  const [allWorldData, setAllWorldData] = useState([]);
  const [continentsData, setContinentsData] = useState({});
  const [dataByContinent, setDataByContinent] = useState([]);
  const [selectOptions, setSelectOptions] = useState("");
  const [loading, setLoading] = useState(true);
  // TODOs
  // 1. make a select field to filter out the slection
  //    - get whole world (done)
  //    - get Data by continents (done)
  //    - get Data by specific continent (done)
  //    - get Data by countries
  //    - get Data by country

  const SelectOptions = [
    "Get COVID19 World Information",
    "Get COVID19 Data by continents",
    "Get COVID19 Data by specific a Continent",
    // "Get COVID19 Data by countries",
    // "Get COVID19 Data by country",
  ];

  const getAllWorldCovidData = async () => {
    await fetch(`https://disease.sh/v3/covid-19/all`)
      .then((response) => response.json())
      .then((data) => {
        setAllWorldData(data);
        setLoading(false);
        console.log(data);
      });
  };
  const getCovidDataByContinent = async () => {
    await fetch(`https://disease.sh/v3/covid-19/continents`)
      .then((response) => response.json())
      .then((data) => {
        setDataByContinent(data);
        setLoading(false);
        console.log(data);
      });
  };

  const getCovidDataOfSingleContinent = async (continentValue) => {
    await fetch(
      `https://disease.sh/v3/covid-19/continents/${continentValue}?strict=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setContinentsData(data);
        console.log(continentsData);
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
          <div className="world_wrapper">
            <div className="select_options">
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
            <div className="world_head">
              {selectOptions === "Get COVID19 World Information" && (
                <>
                  <WorldChart allWorldData={allWorldData} loading={loading} />
                </>
              )}
              {selectOptions === "Get COVID19 Data by continents" && (
                <>
                  <ContinentChart
                    dataByContinent={dataByContinent}
                    loading={loading}
                  />
                </>
              )}

              {selectOptions === "Get COVID19 Data by specific a Continent" && (
                <>
                  <SingleContinentPaperInformation
                    loading={loading}
                    getCovidDataOfSingleContinent={
                      getCovidDataOfSingleContinent
                    }
                    continentsData={continentsData}
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
