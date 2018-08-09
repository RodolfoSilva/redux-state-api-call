import rootState from '../selectors/rootState';

describe('selectors', function () {
  describe('rootState', function () {
    test('should return the root state', function () {
      var root = {
        loading: {},
        error: {}
      };

      expect(rootState({ api: root })).toEqual(root);
    });
  });
});