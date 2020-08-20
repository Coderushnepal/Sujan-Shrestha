import { ADD_DATE, REMOVE_DATE } from "../constants/actions";

export const addDate = () => {
  return { type: ADD_DATE };
};

export const removeDate = () => {
  return { type: REMOVE_DATE };
};
