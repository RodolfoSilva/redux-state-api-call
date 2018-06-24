'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _reselect = require('reselect');

var _apiStateSelector = require('./apiStateSelector');

var _apiStateSelector2 = _interopRequireDefault(_apiStateSelector);

var _validateActionName = require('./validateActionName');

var _validateActionName2 = _interopRequireDefault(_validateActionName);

var _constants = require('./constants');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var rootStateSelector = (0, _reselect.createSelector)(
  _apiStateSelector2.default,
  function(state) {
    return state.error;
  }
);

// returns the first error messages for actions
// * We assume when any request fails on a page that
//   requires multiple API calls, we shows the first error
var createErrorMessageSelector = function createErrorMessageSelector(actions) {
  actions.forEach(_validateActionName2.default);
  var plainActions = actions.map(function(action) {
    return action.toString().replace(_constants.VALID_TYPE_PATTERN, '$1');
  });

  return (0, _reselect.createSelector)([rootStateSelector], function(state) {
    var errors = plainActions
      .map(function(action) {
        return state[action];
      })
      .filter(function(error) {
        return error;
      });
    if (!errors || !errors.length) return null;
    return errors[0];
  });
};

exports.default = createErrorMessageSelector;
