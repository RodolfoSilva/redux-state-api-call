'use strict';

var _rootState = require('../selectors/rootState');

var _rootState2 = _interopRequireDefault(_rootState);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('selectors', function() {
  describe('rootState', function() {
    test.only('Return the root state', function() {
      var state = {
        api: {
          loading: {},
          error: {}
        }
      };
      expect((0, _rootState2.default)(state)).toEqual(state.api);
    });
  });
});
