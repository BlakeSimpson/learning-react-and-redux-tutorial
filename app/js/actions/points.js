import { FAVOURITE_ADDED, FAVOURITE_REMOVED } from '../constants';

export const addFavourite = id => {
  return {
    type: FAVOURITE_ADDED,
    payload: {
      id: id
    }
  };
};

export const removeFavourite = id => {
  return {
    type: FAVOURITE_REMOVED,
    payload: {
      id: id
    }
  };
};
