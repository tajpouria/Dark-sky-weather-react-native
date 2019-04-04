import { C } from "../actions/types";
const INITIAL_STATE = { city: "Loading...", icon: "Loading..." };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case C:
      state = {
        city: action.payload.timezone,
        icon: action.payload.currently.icon
      };
      return state;
    default:
      return state;
  }
};
