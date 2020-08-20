import { ADD_FAVORITE_BEER, REMOVE_FAVORITE_BEER } from "../constants/actions";

export const addFavoriteBeer = (favoriteBeer) => {
  return { type: ADD_FAVORITE_BEER, payload: favoriteBeer };
};

export const removeFavoriteBeer = (favoriteBeerId) => {
  return { type: REMOVE_FAVORITE_BEER, payload: favoriteBeerId };
};
