'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _reselect = require('reselect');

var _rootState = require('./rootState');

var _rootState2 = _interopRequireDefault(_rootState);

var _validateActionName = require('../validateActionName');

var _validateActionName2 = _interopRequireDefault(_validateActionName);

var _splitNameAndTypeFromString = require('../splitNameAndTypeFromString');

var _splitNameAndTypeFromString2 = _interopRequireDefault(
  _splitNameAndTypeFromString
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var rootStateSelector = (0, _reselect.createSelector)(
  _rootState2.default,
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
    return (0, _splitNameAndTypeFromString2.default)(action.toString())[0];
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
