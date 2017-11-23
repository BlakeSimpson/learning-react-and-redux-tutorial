import reducer from '../points';
import { addFavourite, removeFavourite } from '../../actions';

const buildPoints = (firstFavourite = false, secondFavourite = true) => [
  { id: 1, favourite: firstFavourite },
  { id: 2, favourite: secondFavourite }
];

describe('Points reducer', () => {
  let initialPoints;

  beforeEach(() => {
    initialPoints = buildPoints();
  });

  it('returns the initial state', () => {
    expect(reducer(initialPoints, {})).toEqual(initialPoints);
  });

  describe('favourites handling', () => {
    it('can update a point to be a favourite', () => {
      const action = addFavourite(1);
      const result = reducer(initialPoints, action);
      const expected = buildPoints(true, true);

      expect(result).toEqual(expected);
    });

    it('can remove a point from being a favourite', () => {
      const action = removeFavourite(2);
      const result = reducer(initialPoints, action);
      const expected = buildPoints(false, false);

      expect(result).toEqual(expected);
    });
  });
});
