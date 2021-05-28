import VaccineDataSingle from "./SingleVaccineData/VaccineDataSingle";

const VaccineDataMain = ({vaccineData}) => {
  return (
    <>
      {vaccineData.length !== 0 ? (
        <>
          {vaccineData.map((vaccine) => {
            const { center_id } = vaccine;
            return (
              <>
                <VaccineDataSingle key={center_id} {...vaccine} />
              </>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default VaccineDataMain;
