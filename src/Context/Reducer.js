const initialState = {
  states: [],
  districts: [],
  vaccineData: [],
  contributors: [],
  toSearch: [
    "Find By District",
    "Find By PinCode & Date",
    "Find By Pincode & Date(Slots for next 7 days)",
    "Find By District & Date(Slots for next 7 days)",
  ],

  toSearchValue: "",
  stateCode: "States",
  districtCode: "PLEASE SELECT A STATE FIRST",
  vaccinePerPage: 3,
  currentPage: 1,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_STATES":
      return {
        ...state,
        states: action.states,
      };
    case "SET_DISTRICTS":
      return {
        ...state,
        districts: action.districts,
      };

    case "SET_VACCINEDATA":
      return {
        ...state,
        vaccineData: action.vaccineData,
      };
    case "SET_CONTRIBUTORS":
      return {
        ...state,
        contributors: action.contributors,
      };

    case "SET_TOSEARCHVALUE":
      return {
        ...state,
        toSearchValue: action.toSearchValue,
      };

    case "SET_STATECODE":
      return {
        ...state,
        stateCode: action.stateCode,
      };
    case "SET_DISTRICTCODE":
      return {
        ...state,
        districtCode: action.districtCode,
      };

    case "SET_CURRENTPAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export { initialState };

export default reducer;
