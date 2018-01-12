import { FAVOURITE_ADDED, FAVOURITE_REMOVED } from '../../constants';
import { addFavourite, removeFavourite } from '../';

describe('Points Actions', () => {
  describe('adding a favourite', () => {
    it('builds the add action with the given ID in the payload', () => {
      const expected = {
        type: FAVOURITE_ADDED,
        payload: {
          id: 42
        }
      };
      const result = addFavourite(42);

      expect(result).toEqual(expected);
    });
  });

  describe('removing a favourite', () => {
    it('builds the remove action with the given ID in the payload', () => {
      const expected = {
        type: FAVOURITE_REMOVED,
        payload: {
          id: 42
        }
      };
      const result = removeFavourite(42);

      expect(result).toEqual(expected);
    });
  });
});
