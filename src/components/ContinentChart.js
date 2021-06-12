import { Container, makeStyles, CircularProgress } from '@material-ui/core';
import React from 'react';
import { Line } from 'react-chartjs-2';

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

const ContinentChart = ({ dataByContinent, loading }) => {
	const classes = useStyles();

	const bgColor = [
		'rgba(153, 102, 255, 0.2)',
		'rgba(255, 99, 132, 0.2)',
		'rgba(54, 162, 235, 0.2)',
		'rgba(255, 206, 86, 0.2)',
		'rgba(75, 192, 192, 0.2)',
		'rgba(255, 159, 64, 0.2)',
	];

	const borderColor = [
		'rgba(153, 102, 255, 1)',
		'rgba(255, 99, 132, 1)',
		'rgba(54, 162, 235, 1)',
		'rgba(255, 206, 86, 1)',
		'rgba(75, 192, 192, 1)',
		'rgba(255, 159, 64, 1)',
	];

	let index;
	return (
		<Container maxWidth="lg">
			{!loading ? (
				<>
					<h1 className="title">Get World COVID 19 Information By Continent</h1>
					{dataByContinent.map((data) => {
						index = Math.floor(Math.random() * 6);
						return (
							<Line
								data={{
									labels: ['Active Cases', 'Cases', 'Critical', 'Deaths', 'Recovered'],
									datasets: [
										{
											label: data.continent,
											fill: true,
											data: [data.active, data.cases, data.critical, data.deaths, data.recovered],
											backgroundColor: bgColor[index],
											borderColor: borderColor[index],
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
