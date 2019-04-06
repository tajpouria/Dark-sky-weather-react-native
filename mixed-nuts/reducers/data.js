import { C } from "../actions/types";

// TODO add appropirate loading..

const INITIAL_STATE = {
  daily: "Loading...",
  hourly: "Loding...",
  city: "Loading...",
  icon: "Loading...",
  temperature: "Loading...",
  summary : "Loading..."
};

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type){
    case C: 
      state = {
        daily: action.payload.daily.data,
        hourly: action.payload.hourly.data,
        city: action.payload.timezone,
        icon: action.payload.currently.icon,
        summary: action.payload.currently.summary,
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
