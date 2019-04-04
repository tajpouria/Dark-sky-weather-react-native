import { CITY } from "./types";

export const city = data => {
  return { type: CITY, payload: data.timezone };
};
