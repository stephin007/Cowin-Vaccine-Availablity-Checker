import CircularProgress from '@material-ui/core/CircularProgress';

import VaccineDataSingle from './SingleVaccineData/VaccineDataSingle';

const VaccineDataMain = ({vaccineData, loading}) => {
	return (
		<>
			{loading === false ? (
				<>
					{vaccineData.map((vaccine) => {
						const { center_id } = vaccine;
						return <VaccineDataSingle key={center_id} {...vaccine} />;
					})}
				</>
			) : (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						padding: '2rem 0',
					}}
				>
					<CircularProgress />
				</div>
			)}
		</>
	);
};

export default VaccineDataMain;
