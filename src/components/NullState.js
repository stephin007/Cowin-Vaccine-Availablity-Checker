import React from "react";
import Error from "./Error";

const NullState = ({
  toSearchValue,
  vaccineData,
  districtCode,
  VaccineDataMain,
  pin,
  pinCodeSearch,
}) => {
  console.log(pinCodeSearch);
  if (/district/gi.test(toSearchValue)) {
    if (districtCode === "PLEASE SELECT A STATE FIRST") {
      return <div></div>;
    } else if (vaccineData.length > 0) {
      return (
        <div>
          <VaccineDataMain />
        </div>
      );
    } else if (pinCodeSearch) {
      return (
        <div>
          <Error />
        </div>
      );
    } else {
      return <div></div>;
    }
  } else if (/pin/gi.test(toSearchValue)) {
    if (vaccineData.length > 0) {
      return (
        <div>
          <VaccineDataMain />
        </div>
      );
    } else if (pin.length <= 6 && !pinCodeSearch && vaccineData.length === 0) {
      return <div></div>;
    } else {
      return (
        <div>
          <Error />
        </div>
      );
    }
  } else {
    return <div></div>;
  }
};

export default NullState;
