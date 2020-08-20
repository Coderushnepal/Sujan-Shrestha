import { combineReducers } from "redux";

import dateReducer from "./dateReducer";
import counterReducer from "./counterReducer";
import favoriteBeersReducer from "./favoriteBeersReducer";

const rootReducer = combineReducers({
  counterReducer,
  dateReducer,
  favoriteBeersReducer,
});

export default rootReducer;
