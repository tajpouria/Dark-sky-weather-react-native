import axios from "axios";
import { C } from "./types";

export const dataAction = (location) => {
  let latitude = 51.5074;
  let longitude = 0.1277;
  
  // if(location){
  //   latitude = location.coords.latitude;
  //   longitude = location.coords.longitude;
  // }
  return dispatch => {
    axios
      .get(
        'https://api.darksky.net/forecast/5a72f38ca1adfa304e19c11586d8ca26/37.8267,-122.4233'
      )
      .then(res => {
        return dispatch({ type: C, payload: res.data });
      })
      .catch(err => console.log(err));
  };
};
