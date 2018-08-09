'use strict';

var _rootState = require('../selectors/rootState');

var _rootState2 = _interopRequireDefault(_rootState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('selectors', function () {
  describe('rootState', function () {
    test('should return the root state', function () {
      var root = {
        loading: {},
        error: {}
      };

      expect((0, _rootState2.default)({ api: root })).toEqual(root);
    });
  });
});