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

  useEffect(() => {
    getAllWorldCovidData();
  }, []);
  return (
    <>
      {value === index && (
        <>
          <div class="world_wrapper">
            <div class="world_head">
              {paperContents.map((paperContent) => {
                return (
                  <>
                    <Paper className="world_head_paper">
                      <h3 className="paper_title">{paperContent.paperTitle}</h3>
                      <p className="count">{paperContent.paperAnswer}</p>
                    </Paper>
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CovidWorld;
