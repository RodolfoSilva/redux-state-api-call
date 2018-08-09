import rootState from '../selectors/rootState';

describe('selectors', function() {
  describe('rootState', function() {
    test.only('Return the root state', function() {
      var state = {
        api: {
          loading: {},
          error: {}
        }
      };
      expect(rootState(state)).toEqual(state.api);
    });
  });
});
