import React from 'react';

const NullState = ({
  toSearchValue,
  vaccineData,
  districtCode,
  VaccineDataMain,
  pin,
  pinCodeSearch,
}) => {
  if (
    toSearchValue === 'Find By District' ||
    toSearchValue === 'Find By District & Date(Slots for next 7 days)'
  ) {
    if (districtCode === 'PLEASE SELECT A STATE FIRST') {
      return <div></div>;
    } else if (vaccineData.length > 0) {
      return (
        <div>
          <VaccineDataMain vaccineData={vaccineData} />
        </div>
      );
    } else {
      return (
        <div>
          No results found for the entered State, Pin code or Date, Please Try
          Again
        </div>
      );
    }
  } else if (
    toSearchValue === 'Find By PinCode & Date' ||
    toSearchValue === 'Find By Pincode & Date(Slots for next 7 days)'
  ) {
    if (vaccineData.length > 0) {
      return (
        <div>
          <VaccineDataMain vaccineData={vaccineData} />
        </div>
      );
    } else if (pin.length <= 6 && !pinCodeSearch && vaccineData.length === 0) {
      return <div></div>;
    } else {
      return (
        <div>
          No results found for the entered State, Pin code or Date, Please Try
          Again
        </div>
      );
    }
  } else {
    return <div></div>;
  }
};

export default NullState;
