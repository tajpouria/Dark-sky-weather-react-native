import { C } from "../actions/types";
const INITIAL_STATE = {
  city: "Loading...",
  icon: "Loading...",
  temperature: "Loading.."
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case C:
      state = {
        city: action.payload.timezone,
        icon: action.payload.currently.icon,
        temperature: action.payload.currently.temperature,
        apparentTemperatureMax:
          action.payload.daily.data[0].apparentTemperatureMax,
        apparentTemperatureMin:
          action.payload.daily.data[0].apparentTemperatureMin
      };
      return state;
    default:
      return state;
  }
};
