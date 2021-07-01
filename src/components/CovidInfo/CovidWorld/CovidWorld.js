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
  SingleContinentChartInformation,
  SingleCountryInformation,
} from "./CovidWorldContents";

const CovidWorld = ({ value, index }) => {
  const [allWorldData, setAllWorldData] = useState([]);
  const [continentsData, setContinentsData] = useState({});
  const [countryNames, setCountryNames] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [selectOptions, setSelectOptions] = useState("");
  const [loading, setLoading] = useState(true);
  // TODOs
  // 1. make a select field to filter out the slection
  //    - get whole world (done)
  //    - get Data by specific continent (done)
  //    - get Data by country (done)

  const SelectOptions = [
    "Get COVID19 World Information",
    "Get COVID19 Data by a specific Continent",
    "Get COVID19 Data by country",
  ];

  const getAllWorldCovidData = async () => {
    await fetch(`https://disease.sh/v3/covid-19/all`)
      .then((response) => response.json())
      .then((data) => {
        setAllWorldData(data);
        setLoading(false);
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
        setCountryNames(data.countries);
      });
  };

  const getCovidDataOfSingleCountry = async (countryValue) => {
    await fetch(
      `https://disease.sh/v3/covid-19/countries/${countryValue}?yesterday=yesterday&strict=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setCountryData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    getAllWorldCovidData();
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
              {selectOptions === "Get COVID19 Data by a specific Continent" && (
                <>
                  <SingleContinentChartInformation
                    loading={loading}
                    getCovidDataOfSingleContinent={
                      getCovidDataOfSingleContinent
                    }
                    continentsData={continentsData}
                  />
                </>
              )}
              {selectOptions === "Get COVID19 Data by country" && (
                <>
                  <SingleCountryInformation
                    loading={loading}
                    countryNames={countryNames}
                    getCovidDataOfSingleContinent={
                      getCovidDataOfSingleContinent
                    }
                    getCovidDataOfSingleCountry={getCovidDataOfSingleCountry}
                    countryData={countryData}
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
