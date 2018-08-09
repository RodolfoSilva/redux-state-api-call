import rootState from '../selectors/rootState';

describe('selectors', () => {
  describe('rootState', () => {
    test.only('Return the root state', () => {
      const state = {
        api: {
          loading: {},
          error: {}
        }
      };
      expect(rootState(state)).toEqual(state.api);
    });
  });
});
