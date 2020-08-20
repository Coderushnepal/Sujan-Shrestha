import { ADD_DATE, REMOVE_DATE } from "../constants/actions";

const initialDate = [];

const dateReducer = (state = initialDate, action) => {
  switch (action.type) {
    case ADD_DATE:
      return [...state, new Date().toLocaleTimeString()];
    case REMOVE_DATE:
      return [...state.slice(0, state.length - 1)];
    default:
      return state;
  }
};

export default dateReducer;
