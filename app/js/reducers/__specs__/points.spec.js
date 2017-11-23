import reducer from '../points';
import { addFavourite, removeFavourite } from '../../actions';

describe('Points reducer', () => {
  let initialPoints;

  beforeEach(() => {
    initialPoints = [
      {
        id: 1,
        favourite: false
      },
      {
        id: 2,
        favourite: true
      }
    ];
  });

  it('returns the initial state', () => {
    expect(reducer(initialPoints, {})).toEqual(initialPoints);
  });

  describe('favourites handling', () => {
    it('can update a point to be a favourite', () => {
      const action = addFavourite(1);
      const result = reducer(initialPoints, action);

      let expected = [
        {
          id: 1,
          favourite: true
        },
        {
          id: 2,
          favourite: true
        }
      ];

      expect(result).toEqual(expected);
    });

    it('can remove a point from being a favourite', () => {
      const action = removeFavourite(2);
      const result = reducer(initialPoints, action);

      let expected = [
        {
          id: 1,
          favourite: false
        },
        {
          id: 2,
          favourite: false
        }
      ];

      expect(result).toEqual(expected);
    });
  });
});
