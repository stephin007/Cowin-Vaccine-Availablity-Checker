import VaccineDataSingle from "./SingleVaccineData/VaccineDataSingle";

const VaccineDataMain = ({
  vaccineData,
  filterValue,
  filtervalueAge,
  filtervalueFare,
  filtervalueVaccine,
}) => {
  return (
    <>
      {vaccineData?.map((vaccine) => {
        return filterValue === "ALL" ? (
          <VaccineDataSingle key={vaccine.center_id} {...vaccine} />
        ) : filterValue === "VACCINE_TYPE" &&
          filtervalueVaccine === vaccine.vaccine ? (
          (console.info(vaccine.vaccine),
          (<VaccineDataSingle key={vaccine.center_id} {...vaccine} />))
        ) : null;
      })}

      {vaccineData?.map((vaccine) => {
        return filterValue === "ALL" ? (
          <VaccineDataSingle key={vaccine.center_id} {...vaccine} />
        ) : filterValue === "FARE_TYPE" &&
          filtervalueFare === vaccine.fee_type ? (
          <VaccineDataSingle key={vaccine.center_id} {...vaccine} />
        ) : null;
      })}

      {vaccineData?.map((vaccine) => {
        return filterValue === "ALL" ? (
          <VaccineDataSingle key={vaccine.center_id} {...vaccine} />
        ) : filterValue === "AGE_GROUP" &&
          parseInt(filtervalueAge) === vaccine.min_age_limit ? (
          <VaccineDataSingle key={vaccine.center_id} {...vaccine} />
        ) : null;
      })}
    </>
  );
};
export default VaccineDataMain;
