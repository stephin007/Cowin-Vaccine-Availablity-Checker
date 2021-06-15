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
