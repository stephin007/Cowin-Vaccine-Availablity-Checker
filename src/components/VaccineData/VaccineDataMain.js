import VaccineDataSingle from "./SingleVaccineData/VaccineDataSingle";

const VaccineDataMain = ({
  vaccineData,
  filtervalueVaccine,
  filtervalueAge,
  filtervalueFare,
}) => {
  return (
    <>
  
      {vaccineData?.map((vaccine) => {
        return (
          console.log(vaccine),
          console.log(filtervalueVaccine, " > ", vaccine.vaccine),
          console.log(parseInt(filtervalueAge), ">", vaccine.min_age_limit),
          console.log(filtervalueFare, ">", vaccine.fee_type),
          filtervalueVaccine === "ALL" &&
          filtervalueAge === "ALL" &&
          filtervalueFare === "ALL" ? (
            (console.log("cond>>>"),
            (<VaccineDataSingle key={vaccine.center_id} {...vaccine} />))
          ) : filtervalueVaccine === vaccine.vaccine &&
            filtervalueAge === "ALL" &&
            filtervalueFare === "ALL" ? (
            (console.log("cond1"),
            (<VaccineDataSingle key={vaccine.center_id} {...vaccine} />))
          ) : parseInt(filtervalueAge) === vaccine.min_age_limit &&
            filtervalueVaccine === "ALL" &&
            filtervalueFare === "ALL" ? (
            (console.log("cond2"),
            (<VaccineDataSingle key={vaccine.center_id} {...vaccine} />))
          ) : filtervalueFare === vaccine.fee_type &&
            filtervalueVaccine === "ALL" &&
            filtervalueAge === "ALL" ? (
            (console.log("cond3"),
            (<VaccineDataSingle key={vaccine.center_id} {...vaccine} />))
          ) : filtervalueFare === vaccine.fee_type &&
            filtervalueVaccine === vaccine.vaccine &&
            filtervalueAge === "ALL" ? (
            <VaccineDataSingle key={vaccine.center_id} {...vaccine} />
          ) : filtervalueFare === vaccine.fee_type &&
            parseInt(filtervalueAge) === vaccine.min_age_limit &&
            filtervalueVaccine === "ALL" ? (
            <VaccineDataSingle key={vaccine.center_id} {...vaccine} />
          ) : filtervalueVaccine === vaccine.vaccine &&
            parseInt(filtervalueAge) === vaccine.min_age_limit &&
            filtervalueFare === "ALL" ? (
            <VaccineDataSingle key={vaccine.center_id} {...vaccine} />
          ) : filtervalueVaccine === vaccine.vaccine &&
            parseInt(filtervalueAge) === vaccine.min_age_limit &&
            filtervalueFare === vaccine.fee_type ? (
            <VaccineDataSingle key={vaccine.center_id} {...vaccine} />
          ) : null
        );
      })}
    </>
  );
};
export default VaccineDataMain;
