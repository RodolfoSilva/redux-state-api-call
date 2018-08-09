'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return']) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance'
      );
    }
  };
})();

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
  [_rootState2.default],
  function(state) {
    return state.loading;
  }
);

var selectLoading = function selectLoading(state) {
  return function(action) {
    var _splitNameAndTypeFrom = (0, _splitNameAndTypeFromString2.default)(
        action.toString()
      ),
      _splitNameAndTypeFrom2 = _slicedToArray(_splitNameAndTypeFrom, 1),
      propertyKey = _splitNameAndTypeFrom2[0];

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
