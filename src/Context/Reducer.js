const initialState = {
  states: [],
  districts: [],
  vaccineData: [],
  contributors: [],
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

    default:
      return state;
  }
};

export { initialState };

export default reducer;
