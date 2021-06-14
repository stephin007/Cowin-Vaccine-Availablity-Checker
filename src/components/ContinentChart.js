import { Container, makeStyles, CircularProgress } from '@material-ui/core';
import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';

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

const useStyles = makeStyles({
	progress: {
		textAlign: 'center',
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	},
});

const bgColor = [
	'rgba(153, 102, 255, 0.2)',
	'rgba(255, 99, 132, 0.2)',
	'rgba(54, 162, 235, 0.2)',
	'rgba(255, 206, 86, 0.2)',
	'rgba(75, 192, 192, 0.2)',
	'rgba(255, 159, 64, 0.2)',
	'rgba(237, 247, 86,0.2)',
	'rgba(255, 168, 182,0.2)',
	'rgba(162, 128, 137,0.2)',
	'rgba(143, 130, 85, 0.2)',
	'rgba(232, 177, 135, 0.2)',
	'rgba(220, 207, 236, 0.2)',
	'rgba(169, 151, 223, 0.2)',
	'rgba(79, 81, 125, 0.2)',
];

const borderColor = [
	'rgba(153, 102, 255, 1)',
	'rgba(255, 99, 132, 1)',
	'rgba(54, 162, 235, 1)',
	'rgba(255, 206, 86, 1)',
	'rgba(75, 192, 192, 1)',
	'rgba(255, 159, 64, 1)',
	'#edf756',
	'#ffa8B6',
	'#a28089',
	'#8F8255',
	'#E8B187',
	'#dccfec',
	'#a997df',
	'#4f517d',
];

const ContinentChart = ({ dataByContinent, loading }) => {
	const classes = useStyles();
	let count = 0;

	return (
		<Container maxWidth="lg">
			{!loading ? (
				<>
					<Doughnut
						data={{
							labels: [
								'Active Cases in North America',
								'Cases in North America',
								'Critical in North America',
								'Deaths in North America',
								'Recovered in North America',
								'Active Cases in Asia',
								'Cases in Asia',
								'Critical in Asia',
								'Deaths in Asia',
								'Recovered in Asia',
								'Active Cases in South America',
								'Cases in South America',
								'Critical in South America',
								'Deaths in South America',
								'Recovered in South America',
								'Active Cases in Europe',
								'Cases in Europe',
								'Critical in Europe',
								'Deaths in Europe',
								'Recovered in Europe',
								'Active Cases in Africa',
								'Cases in Africa',
								'Critical in Africa',
								'Deaths in Africa',
								'Recovered in Africa',
								'Active Cases in Australia-Oceania',
								'Cases in Australia-Oceania',
								'Critical in Australia-Oceania',
								'Deaths in Australia-Oceania',
								'Recovered in Australia-Oceania',
							],
							datasets: [
								{
									label: dataByContinent[0].continent,
									fill: true,
									data: [
										dataByContinent[0].active,
										dataByContinent[0].cases,
										dataByContinent[0].critical,
										dataByContinent[0].deaths,
										dataByContinent[0].recovered,
										dataByContinent[1].active,
										dataByContinent[1].cases,
										dataByContinent[1].critical,
										dataByContinent[1].deaths,
										dataByContinent[1].recovered,
										dataByContinent[2].active,
										dataByContinent[2].cases,
										dataByContinent[2].critical,
										dataByContinent[2].deaths,
										dataByContinent[2].recovered,
										dataByContinent[3].active,
										dataByContinent[3].cases,
										dataByContinent[3].critical,
										dataByContinent[3].deaths,
										dataByContinent[3].recovered,
										dataByContinent[4].active,
										dataByContinent[4].cases,
										dataByContinent[4].critical,
										dataByContinent[4].deaths,
										dataByContinent[4].recovered,
										dataByContinent[5].active,
										dataByContinent[5].cases,
										dataByContinent[5].critical,
										dataByContinent[5].deaths,
										dataByContinent[5].recovered,
									],
									backgroundColor: bgColor,
									borderColor: borderColor,
									borderWidth: 1,
								},
							],
						}}
					/>
					{dataByContinent.map((data) => {
						count = count + 1;
						return (
							<Line
								data={{
									labels: ['Active Cases', 'Cases', 'Critical', 'Deaths', 'Recovered'],
									datasets: [
										{
											label: data.continent,
											fill: true,
											data: [data.active, data.cases, data.critical, data.deaths, data.recovered],
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

export default ContinentChart;
