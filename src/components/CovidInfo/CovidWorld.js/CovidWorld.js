import { useState, useEffect } from 'react';
import { FormControl, Select, InputLabel, MenuItem, FormHelperText } from '@material-ui/core';
import './CovidWorld.css';
// import { WorldPaperInformation, ContinentPaperInformation } from './CovidWorldContents';
import Chart from '../../Chart';
import ContinentChart from '../../ContinentChart';

const CovidWorld = ({ value, index }) => {
	const [allWorldData, setAllWorldData] = useState([]);
	const [dataByContinent, setDataByContinent] = useState([]);
	const [selectOptions, setSelectOptions] = useState('');
	const [loading, setLoading] = useState(true);
	// TODOs
	// 1. make a select field to filter out the slection
	//    - get whole world (done)
	//    - get Data by continents (done)
	//    - get Data by specific continent
	//    - get Data by countries
	//    - get Data by country

	const SelectOptions = [
		'Get COVID19 World Information',
		'Get COVID19 Data by continents',
		// "Get COVID19 Data by specific continent",
		// "Get COVID19 Data by countries",
		// "Get COVID19 Data by country",
	];

	const WorldPaperContents = [
		{
			paperTitle: 'Total Active Cases',
			paperAnswer: allWorldData.active,
		},
		{
			paperTitle: 'Active per one million',
			paperAnswer: allWorldData.activePerOneMillion,
		},
		{
			paperTitle: 'Affected Countries',
			paperAnswer: allWorldData.affectedCountries,
		},
		{
			paperTitle: 'Total Cases',
			paperAnswer: allWorldData.cases,
		},
		{
			paperTitle: 'Active Cases per million',
			paperAnswer: allWorldData.casesPerOneMillion,
		},
		{
			paperTitle: 'critical',
			paperAnswer: allWorldData.critical,
		},
		{
			paperTitle: 'critical per million',
			paperAnswer: allWorldData.criticalPerOneMillion,
		},
		{
			paperTitle: 'deaths',
			paperAnswer: allWorldData.deaths,
		},
		{
			paperTitle: 'deaths Per OneMillion',
			paperAnswer: allWorldData.deathsPerOneMillion,
		},
		{
			paperTitle: 'one Case Per People',
			paperAnswer: allWorldData.oneCasePerPeople,
		},
		{
			paperTitle: 'one Death Per People',
			paperAnswer: allWorldData.oneDeathPerPeople,
		},
		{
			paperTitle: 'one Test Per People',
			paperAnswer: allWorldData.oneTestPerPeople,
		},
		{
			paperTitle: 'population',
			paperAnswer: allWorldData.population,
		},
		{
			paperTitle: 'recovered',
			paperAnswer: allWorldData.recovered,
		},
		{
			paperTitle: 'recovered Per One Million',
			paperAnswer: allWorldData.recoveredPerOneMillion,
		},
		{
			paperTitle: 'tests',
			paperAnswer: allWorldData.tests,
		},
		{
			paperTitle: 'tests Per One Million',
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
	const getAllWorldCovidData = async () => {
		await fetch(`https://disease.sh/v3/covid-19/all`)
			.then((response) => response.json())
			.then((data) => {
				setAllWorldData(data);
				setLoading(false);
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
								<InputLabel id="demo-simple-select-filled-label">Search...</InputLabel>
								<Select
									labelId="world_select_options"
									id="world_select_options"
									value={selectOptions}
									fullWidth
									onChange={(e) => {
										setSelectOptions(e.target.value);
									}}
									error={selectOptions === ''}
								>
									{SelectOptions.map((option, index) => {
										return (
											<MenuItem key={index} value={option}>
												{option}
											</MenuItem>
										);
									})}
								</Select>
								<FormHelperText style={{ color: 'red' }}>
									{selectOptions === '' ? 'Please Select a value' : ' '}
								</FormHelperText>
							</FormControl>
						</div>
						<div className="world_head">
							{selectOptions === 'Get COVID19 World Information' && (
								<>
									{/* <WorldPaperInformation WorldPaperContents={WorldPaperContents} loading={loading} /> */}
									<Chart
										allWorldData={allWorldData}
										WorldPaperContents={WorldPaperContents}
										loading={loading}
									/>
								</>
							)}
							{selectOptions === 'Get COVID19 Data by continents' && (
								<>
									{/* <ContinentPaperInformation dataByContinent={dataByContinent} loading={loading} /> */}
									<ContinentChart dataByContinent={dataByContinent} loading={loading} />
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
