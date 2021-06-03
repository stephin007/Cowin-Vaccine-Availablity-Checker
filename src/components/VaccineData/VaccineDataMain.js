import VaccineDataSingle from "./SingleVaccineData/VaccineDataSingle";

const VaccineDataMain = ({ vaccineData }) => {
  return (
    <>
      {vaccineData?.map((vaccine) => {
        return <VaccineDataSingle key={vaccine.center_id} {...vaccine} />;
      })}
    </>
  );
};

export default VaccineDataMain;
