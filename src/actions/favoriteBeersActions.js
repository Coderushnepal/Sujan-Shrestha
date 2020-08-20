import { fetchBeerById } from "../services/beerService";
import {
  ADD_FAVORITE_BEER,
  REMOVE_FAVORITE_BEER,
  ERROR_FETCHING_BEER,
} from "../constants/actions";

export const modifyError = (payload) => {
  return { type: ERROR_FETCHING_BEER, payload };
};

export const addBeer = (payload) => {
  return { type: ADD_FAVORITE_BEER, payload };
};

export const addFavoriteBeer = (favoriteBeer) => {
  // return { type: ADD_FAVORITE_BEER, payload: favoriteBeer };
  return async (dispatch) => {
    try {
      await fetchBeerById(favoriteBeer.id % 2 ? favoriteBeer.id : "jpt");

      dispatch(addBeer(favoriteBeer));
      dispatch(modifyError(null));
    } catch (error) {
      const errorMsg = error.response.data.data[0].msg;

      dispatch(modifyError(errorMsg));
    }
  };
};

export const removeFavoriteBeer = (favoriteBeerId) => {
  return { type: REMOVE_FAVORITE_BEER, payload: favoriteBeerId };
};
