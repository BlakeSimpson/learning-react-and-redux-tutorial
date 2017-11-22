import { FAVOURITE_ADDED, FAVOURITE_REMOVED } from '../../constants';
import { addFavourite, removeFavourite } from '../';

describe('Points Reducer', () => {
  describe('adding a favourite', () => {
    it('builds the action with the given ID in the payload', () => {
      const result = addFavourite(42);
      const expected = {
        type: FAVOURITE_ADDED,
        payload: {
          id: 42
        }
      };

      expect(result).toEqual(expected);
    });
  });

  describe('removing a favourite', () => {
    it('builds the action with the given ID in the payload', () => {
      const result = removeFavourite(42);
      const expected = {
        type: FAVOURITE_REMOVED,
        payload: {
          id: 42
        }
      };

      expect(result).toEqual(expected);
    });
  });
});
