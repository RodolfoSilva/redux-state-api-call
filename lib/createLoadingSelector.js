'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _reselect = require('reselect');

var _apiStateSelector = require('./apiStateSelector');

var _apiStateSelector2 = _interopRequireDefault(_apiStateSelector);

var _constants = require('./constants');

var _validateActionName = require('./validateActionName');

var _validateActionName2 = _interopRequireDefault(_validateActionName);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var rootStateSelector = (0, _reselect.createSelector)(
  [_apiStateSelector2.default],
  function(state) {
    return state.loading;
  }
);

var selectLoading = function selectLoading(state) {
  return function(action) {
    var propertyKey = action
      .toString()
      .replace(_constants.VALID_TYPE_PATTERN, '$1');
    return Boolean(state[propertyKey]);
  };
};

// returns true only when all actions is not loading
var createLoadingSelector = function createLoadingSelector(actions) {
  actions.forEach(_validateActionName2.default);
  return (0, _reselect.createSelector)([rootStateSelector], function(state) {
    return actions.some(selectLoading(state));
  });
};

exports.default = createLoadingSelector;
