import rootState from '../selectors/rootState';
import createLoadingSelector from '../selectors/createLoadingSelector';

describe('selectors', () => {
  describe('rootState', () => {
    test('should return the root state', () => {
      const root = {
        loading: {},
        error: {},
      };

      expect(rootState({ api: root })).toEqual(root);
    });
  });

  describe('createLoadingSelector', () => {
    test.each([
      [
        ['FETCH_ALL_REQUEST'],
        {},
        0,
      ],
      [
        ['FETCH_ALL_REQUEST'],
        {
          FETCH_ALL: 0,
        },
        0,
      ],
      [
        ['FETCH_ALL_REQUEST'],
        {
          FETCH_ALL: 100,
        },
        100,
      ],
      [
        ['FETCH_ALL_REQUEST', 'SAVE_ITEM_REQUEST'],
        {
          FETCH_ALL: 1,
          SAVE_ITEM: 5,
        },
        6,
      ],
    ])('should return the number off loading root state', (actionType, state, expected) => {
      const root = {
        loading: state,
      };

      const isLoading = createLoadingSelector(actionType);
      expect(isLoading({ api: root })).toEqual(expected);
    });
  });
});
