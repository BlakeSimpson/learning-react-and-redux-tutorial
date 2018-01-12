import reducer from '../points';
import { addFavourite, removeFavourite } from '../../actions';

const buildPointsMock = (firstFavouriteState, secondFavouriteState) => [
  { id: 'point-1', favourite: firstFavouriteState },
  { id: 'point-2', favourite: secondFavouriteState }
];

describe('Points Reducer', () => {
  let initialPoints;

  beforeEach(() => {
    initialPoints = [
      {
        id: 'point-1',
        favourite: false
      },
      {
        id: 'point-2',
        favourite: true
      }
    ];
  });

  it('returns the initial state', () => {
    expect(reducer(initialPoints, {})).toEqual(initialPoints);
  });

  describe('favourites handling', () => {
    it('can update a point to be a favourite', () => {
      const action = addFavourite('point-1');
      const result = reducer(initialPoints, action);

      let expected = [
        {
          id: 'point-1',
          favourite: true
        },
        {
          id: 'point-2',
          favourite: true
        }
      ];

      expect(result).toEqual(expected);
    });

    it('can remove a point from being a favourite', () => {
      const action = removeFavourite('point-2');
      const result = reducer(initialPoints, action);

      let expected = [
        {
          id: 'point-1',
          favourite: false
        },
        {
          id: 'point-2',
          favourite: false
        }
      ];

      expect(result).toEqual(expected);
    });
  });
});
