import rootState from '../selectors/rootState';

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
});
