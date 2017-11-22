import { FAVOURITE_ADDED, FAVOURITE_REMOVED } from '../constants';

const initialState = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    x: 345,
    y: 705,
    details: {
      name: 'The Twins',
      house: 'Frey',
      words: 'We Stand Together'
    }
  },
  {
    id: 4,
    x: 155,
    y: 775,
    details: {
      name: 'The Iron Islands',
      house: 'Greyjoy',
      words: 'We Do Not Sow'
    }
  },
  {
    id: 5,
    x: 150,
    y: 945,
    details: {
      name: 'Casterly Rock',
      house: 'Lannister',
      words: 'Hear me Roar!'
    }
  },
  {
    id: 6,
    x: 545,
    y: 1000,
    details: {
      name: "King's Landing",
      house: 'Baratheon',
      words: 'Ours is the Fury'
    }
  },
  {
    id: 7,
    x: 250,
    y: 1190,
    details: {
      name: 'Highgarden',
      house: 'Tyrell',
      words: 'Growing Strong'
    }
  }
];

const updateFavouriteState = (id, newValue, points) => {
  const updatedPoint = points.filter(point => point.id === id)[0];
  const index = points.indexOf(updatedPoint);

  updatedPoint.favourite = newValue;

  return [...points.slice(0, index), updatedPoint, ...points.slice(index + 1)];
};

const points = (state = initialState, action) => {
  let id;

  switch (action.type) {
    case FAVOURITE_ADDED:
      id = action.payload.id;
      return updateFavouriteState(id, true, state);

    case FAVOURITE_REMOVED:
      id = action.payload.id;
      return updateFavouriteState(id, false, state);

    default:
      return state;
  }
};

export default points;
