import { Container, makeStyles, CircularProgress } from '@material-ui/core';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

// const lineOptions = {
// 	scales: {
// 		yAxes: [
// 			{
// 				ticks: {
// 					beginAtZero: true,
// 				},
// 			},
// 		],
// 	},
// };

const useStyles = makeStyles({
	progress: {
		textAlign: 'center',
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	},
});

const Chart = ({ allWorldData, loading }) => {
	const classes = useStyles();

	const data = {
		labels: [
			'Total Active Cases',
			'Active per one million',
			'Affected Countries',
			'Total Cases',
			'Active Cases per million',
			'critical',
			'critical per million',
			'deaths',
			'deaths Per OneMillion',
			'one Case Per People',
			'one Death Per People',
			'one Test Per People',
			'population',
			'recovered',
			'recovered Per One Million',
			'tests',
			'tests Per One Million',
			"today's Cases",
			"today's Deaths",
			"today's Recoveries",
		],
		datasets: [
			{
				label: 'DataSet',
				data: [
					allWorldData.active,
					allWorldData.activePerOneMillion,
					allWorldData.affectedCountries,
					allWorldData.cases,
					allWorldData.casesPerOneMillion,
					allWorldData.critical,
					allWorldData.criticalPerOneMillion,
					allWorldData.deaths,
					allWorldData.deathsPerOneMillion,
					allWorldData.oneCasePerPeople,
					allWorldData.oneDeathPerPeople,
					allWorldData.oneTestPerPeople,
					allWorldData.population,
					allWorldData.recovered,
					allWorldData.recoveredPerOneMillion,
					allWorldData.tests,
					allWorldData.testsPerOneMillion,
					allWorldData.todayCases,
					allWorldData.todayDeaths,
					allWorldData.todayRecovered,
				],
				backgroundColor: [
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	// const initialData = {
	// 	labels: [
	// 		'Active per one million',
	// 		'Affected Countries',
	// 		'critical per million',
	// 		'deaths Per OneMillion',
	// 		'one Case Per People',
	// 		'one Death Per People',
	// 		'one Test Per People',
	// 		"today's Deaths",
	// 	],
	// 	datasets: [
	// 		{
	// 			label: 'DataSet #1',
	// 			fill: true,
	// 			data: [
	// 				allWorldData.activePerOneMillion,
	// 				allWorldData.affectedCountries,
	// 				allWorldData.criticalPerOneMillion,
	// 				allWorldData.deathsPerOneMillion,
	// 				allWorldData.oneCasePerPeople,
	// 				allWorldData.oneDeathPerPeople,
	// 				allWorldData.oneTestPerPeople,
	// 				allWorldData.todayDeaths,
	// 			],
	// 			backgroundColor: [
	// 				'rgba(153, 102, 255, 0.2)',
	// 				'rgba(255, 99, 132, 0.2)',
	// 				'rgba(54, 162, 235, 0.2)',
	// 				'rgba(255, 206, 86, 0.2)',
	// 				'rgba(75, 192, 192, 0.2)',
	// 				'rgba(255, 159, 64, 0.2)',
	// 			],
	// 			borderColor: [
	// 				'rgba(153, 102, 255, 1)',
	// 				'rgba(255, 99, 132, 1)',
	// 				'rgba(54, 162, 235, 1)',
	// 				'rgba(255, 206, 86, 1)',
	// 				'rgba(75, 192, 192, 1)',
	// 				'rgba(255, 159, 64, 1)',
	// 			],
	// 			borderWidth: 1,
	// 		},
	// 	],
	// };

	// const additionalData1 = {
	// 	labels: [
	// 		'Active Cases per million',
	// 		'critical',
	// 		'recovered Per One Million',
	// 		'tests Per One Million',
	// 		"today's Cases",
	// 		"today's Recoveries",
	// 	],
	// 	datasets: [
	// 		{
	// 			label: 'DataSet #2',
	// 			fill: true,
	// 			data: [
	// 				allWorldData.casesPerOneMillion,
	// 				allWorldData.critical,
	// 				allWorldData.recoveredPerOneMillion,
	// 				allWorldData.testsPerOneMillion,
	// 				allWorldData.todayCases,
	// 				allWorldData.todayRecovered,
	// 			],
	// 			backgroundColor: [
	// 				'rgba(255, 159, 64, 0.2)',
	// 				'rgba(255, 206, 86, 0.2)',
	// 				'rgba(255, 99, 132, 0.2)',
	// 				'rgba(54, 162, 235, 0.2)',
	// 				'rgba(75, 192, 192, 0.2)',
	// 				'rgba(153, 102, 255, 0.2)',
	// 			],
	// 			borderColor: [
	// 				'rgba(255, 159, 64, 1)',
	// 				'rgba(255, 206, 86, 1)',
	// 				'rgba(255, 99, 132, 1)',
	// 				'rgba(54, 162, 235, 1)',
	// 				'rgba(75, 192, 192, 1)',
	// 				'rgba(153, 102, 255, 1)',
	// 			],
	// 			borderWidth: 1,
	// 		},
	// 	],
	// };

	// const additionalData2 = {
	// 	labels: ['Total Active Cases', 'Total Cases', 'deaths', 'population', 'recovered', 'tests'],
	// 	datasets: [
	// 		{
	// 			label: 'DataSet #3',
	// 			fill: true,
	// 			data: [
	// 				allWorldData.active,
	// 				allWorldData.cases,
	// 				allWorldData.deaths,
	// 				allWorldData.population,
	// 				allWorldData.recovered,
	// 				allWorldData.tests,
	// 			],
	// 			backgroundColor: [
	// 				'rgba(54, 162, 235, 0.2)',
	// 				'rgba(255, 99, 132, 0.2)',
	// 				'rgba(255, 206, 86, 0.2)',
	// 				'rgba(75, 192, 192, 0.2)',
	// 				'rgba(153, 102, 255, 0.2)',
	// 				'rgba(255, 159, 64, 0.2)',
	// 			],
	// 			borderColor: [
	// 				'rgba(54, 162, 235, 1)',
	// 				'rgba(255, 99, 132, 1)',
	// 				'rgba(255, 206, 86, 1)',
	// 				'rgba(75, 192, 192, 1)',
	// 				'rgba(153, 102, 255, 1)',
	// 				'rgba(255, 159, 64, 1)',
	// 			],
	// 			borderWidth: 1,
	// 		},
	// 	],
	// };

	return (
		<Container maxWidth="lg">
			{!loading ? (
				<>
					{/* <Line data={initialData} options={lineOptions} />
					<Line data={additionalData1} options={lineOptions} />
					<Line data={additionalData2} options={lineOptions} /> */}
					<Doughnut data={data} />
				</>
			) : (
				<div className={classes.progress}>
					<CircularProgress />
				</div>
			)}
		</Container>
	);
};

export default Chart;
