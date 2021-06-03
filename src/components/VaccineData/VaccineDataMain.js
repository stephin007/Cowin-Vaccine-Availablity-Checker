import VaccineDataSingle from "./SingleVaccineData/VaccineDataSingle";

const VaccineDataMain = ({ vaccineData, loading }) => {
  return (
    <>
      {vaccineData.map((vaccine) => {
        const { center_id } = vaccine;
        return <VaccineDataSingle key={center_id} {...vaccine} />;
      })}
    </>
  );
};

export default VaccineDataMain;
