import { CITY } from "../actions/types";
const INITIAL_STATE = { city: "Loading..." };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CITY:
      state = { city: action.payload };
      return state.city;
    default:
      return state.city;
  }
};
