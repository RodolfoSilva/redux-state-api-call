import rootState from '../selectors/rootState';
import createCountLoadingSelector from '../selectors/createCountLoadingSelector';
import createIsLoadingSelector from '../selectors/createIsLoadingSelector';

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

  describe('createCountLoadingSelector', () => {
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

      const isLoading = createCountLoadingSelector(actionType);
      expect(isLoading({ api: root })).toEqual(expected);
    });
  });

  describe('createIsLoadingSelector', () => {
    test.each([
      [
        ['FETCH_ALL_REQUEST'],
        {},
        false,
      ],
      [
        ['FETCH_ALL_REQUEST'],
        {
          FETCH_ALL: 0,
        },
        false,
      ],
      [
        ['FETCH_ALL_REQUEST'],
        {
          FETCH_ALL: 100,
        },
        true,
      ],
      [
        ['FETCH_ALL_REQUEST', 'SAVE_ITEM_REQUEST'],
        {
          FETCH_ALL: 1,
          SAVE_ITEM: 5,
        },
        true,
      ],
    ])('should return the number off loading root state', (actionType, state, expected) => {
      const root = {
        loading: state,
      };

      const isLoading = createIsLoadingSelector(actionType);
      expect(isLoading({ api: root })).toEqual(expected);
    });
  });
});
