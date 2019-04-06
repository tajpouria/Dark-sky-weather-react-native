import axios from "axios";
import { C } from "./types";

export const dataAction = () => {
  return dispatch => {
    axios
      .get(
        "https://api.darksky.net/forecast/5a72f38ca1adfa304e19c11586d8ca26/35.6892,51.3890"
      )
      .then(res => {
        return dispatch({ type: C, payload: res.data });
      })
      .catch(err => console.log(err));
  };
};

// TODO error handeling 