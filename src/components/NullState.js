import React from 'react';
import Error from './Error';

const NullState = ({
  toSearchValue,
  vaccineData,
  districtCode,
  VaccineDataMain,
  pin,
  pinCodeSearch,
}) => {
  console.log(pinCodeSearch);
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
    } else if (pinCodeSearch) {
      return (
        <div>
          <Error />
        </div>
      );
    } else {
      return <div></div>;
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
          <Error />
        </div>
      );
    }
  } else {
    return <div></div>;
  }
};

export default NullState;
