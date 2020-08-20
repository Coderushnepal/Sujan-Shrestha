import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_MODIFY,
} from "../constants/actions";

export const increaseCount = () => {
  return { type: COUNTER_INCREMENT };
};

export const decreaseCount = () => {
  return { type: COUNTER_DECREMENT };
};

export const modifyCount = (value) => {
  return { type: COUNTER_MODIFY, payload: value };
};
