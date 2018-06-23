import apiStateSelector from '../apiStateSelector';

describe('apiStateSelector', () => {
  test('Return the root state', () => {
    const state = {
      api: {
        loading: {},
        error: {},
      },
    };
    expect(apiStateSelector(state)).toEqual(state.api);
  });
});
