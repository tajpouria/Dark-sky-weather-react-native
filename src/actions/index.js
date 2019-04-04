import { C } from "./types";

export const dataAction = data => {
  return { type: C, payload: data };
};
