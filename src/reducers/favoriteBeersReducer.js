import {
  ADD_FAVORITE_BEER,
  REMOVE_FAVORITE_BEER,
  ERROR_FETCHING_BEER,
} from "../constants/actions";

const initialState = {
  favoriteBeers: [],
  error: null,
};

const favoriteBeersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_BEER:
      return {
        ...state,
        favoriteBeers: [...state.favoriteBeers, action.payload],
      };
    case REMOVE_FAVORITE_BEER:
      return {
        ...state,
        favoriteBeers: state.favoriteBeers.filter(
          (beer) => beer.id !== action.payload
        ),
      };
    case ERROR_FETCHING_BEER:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default favoriteBeersReducer;
