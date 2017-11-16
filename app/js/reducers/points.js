import { FAVOURITE_ADDED, FAVOURITE_REMOVED } from '../constants';

const initialState = [
  {
    x: 450,
    y: 110,
    details: {
      name: 'The Wall',
      house: "Night's Watch",
      words: 'Night gathers, and now my watch begins.'
    },
    favourite: true
  },
  {
    x: 375,
    y: 355,
    details: {
      name: 'Winterfell',
      house: 'Stark',
      words: 'Winter is Coming'
    },
    favourite: true
  },
  {
    x: 345,
    y: 705,
    details: {
      name: 'The Twins',
      house: 'Frey',
      words: 'We Stand Together'
    }
  },
  {
    x: 155,
    y: 775,
    details: {
      name: 'The Iron Islands',
      house: 'Greyjoy',
      words: 'We Do Not Sow'
    }
  },
  {
    x: 150,
    y: 945,
    details: {
      name: 'Casterly Rock',
      house: 'Lannister',
      words: 'Hear me Roar!'
    }
  },
  {
    x: 545,
    y: 1000,
    details: {
      name: "King's Landing",
      house: 'Baratheon',
      words: 'Ours is the Fury'
    }
  },
  {
    x: 250,
    y: 1190,
    details: {
      name: 'Highgarden',
      house: 'Tyrell',
      words: 'Growing Strong'
    }
  }
];

const updateFavouriteState = (index, newValue, points) => {
  const updatedPoint = points[index];
  updatedPoint.favourite = newValue;

  return [...points.slice(0, index), updatedPoint, ...points.slice(index + 1)];
};

const points = (state = initialState, action) => {
  let index;

  switch (action.type) {
    case FAVOURITE_ADDED:
      index = action.payload.index;
      return updateFavouriteState(index, true, state);

    case FAVOURITE_REMOVED:
      index = action.payload.index;
      return updateFavouriteState(index, false, state);

    default:
      return state;
  }
};

export default points;
