import { FAVOURITE_ADDED, FAVOURITE_REMOVED } from '../constants';

export const addFavourite = index => {
  return {
    type: FAVOURITE_ADDED,
    payload: {
      index: index
    }
  };
};

export const removeFavourite = index => {
  return {
    type: FAVOURITE_REMOVED,
    payload: {
      index: index
    }
  };
};
