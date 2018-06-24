import apiStateSelector from '../apiStateSelector';

describe('apiStateSelector', function() {
  test('Return the root state', function() {
    var state = {
      api: {
        loading: {},
        error: {}
      }
    };
    expect(apiStateSelector(state)).toEqual(state.api);
  });
});
