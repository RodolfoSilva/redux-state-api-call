'use strict';

var _apiStateSelector = require('../apiStateSelector');

var _apiStateSelector2 = _interopRequireDefault(_apiStateSelector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('apiStateSelector', function() {
  test('Return the root state', function() {
    var state = {
      api: {
        loading: {},
        error: {}
      }
    };
    expect((0, _apiStateSelector2.default)(state)).toEqual(state.api);
  });
});
