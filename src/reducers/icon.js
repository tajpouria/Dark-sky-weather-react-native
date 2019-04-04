import { C } from "../actions/types";
const INITIAL_STATE = { icon: "Loading..." };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case C:
      state = { icon: action.payload.currently.icon };
      return state.city;
    default:
      return state.icon;
  }
};
