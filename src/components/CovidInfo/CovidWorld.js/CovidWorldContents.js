import { Container, makeStyles, CircularProgress } from "@material-ui/core";
import { Line, Doughnut } from "react-chartjs-2";

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

const lineOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const bgColor = [
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(237, 247, 86,0.2)",
  "rgba(255, 168, 182,0.2)",
  "rgba(162, 128, 137,0.2)",
  "rgba(143, 130, 85, 0.2)",
  "rgba(232, 177, 135, 0.2)",
  "rgba(220, 207, 236, 0.2)",
  "rgba(169, 151, 223, 0.2)",
  "rgba(79, 81, 125, 0.2)",
];

const borderColor = [
  "rgba(153, 102, 255, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(255, 159, 64, 1)",
  "#edf756",
  "#ffa8B6",
  "#a28089",
  "#8F8255",
  "#E8B187",
  "#dccfec",
  "#a997df",
  "#4f517d",
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
          <Doughnut data={initialData} className={classes.chart} />
          <Doughnut data={additionalData1} className={classes.chart} />
          <Doughnut data={additionalData2} className={classes.chart} />
        </>
      ) : (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )}
    </Container>
  );
};

export const ContinentChart = ({ dataByContinent, loading }) => {
  const classes = useStyles();
  let count = 0;

  return (
    <Container maxWidth="lg">
      {!loading ? (
        <>
          {dataByContinent.map((data) => {
            count = count + 1;
            return (
              <Line
                data={{
                  labels: [
                    "Active Cases",
                    "Cases",
                    "Critical",
                    "Deaths",
                    "Recovered",
                  ],
                  datasets: [
                    {
                      label: data.continent,
                      fill: true,
                      data: [
                        data.active,
                        data.cases,
                        data.critical,
                        data.deaths,
                        data.recovered,
                      ],
                      backgroundColor: bgColor[count],
                      borderColor: borderColor[count],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={lineOptions}
              />
            );
          })}
        </>
      ) : (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )}
    </Container>
  );
};
