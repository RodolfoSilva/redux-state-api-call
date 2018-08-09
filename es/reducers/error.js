var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

import { ASYNC_TYPE_PATTERN, REQUEST, FAILURE, SUCCESS } from '../constants';
import splitNameAndTypeFromString from '../splitNameAndTypeFromString';

/**
 * @param {Error|null} state
 * @param {Object} action
 * @param {string} action.type
 * @param {boolean} [action.error]
 * @param {Error} [action.payload]
 * @return {Error|null}
 */
var errorReducer = function errorReducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case REQUEST:
    case SUCCESS:
      return null;
    case FAILURE:
      return action.error === true ? action.payload : null;
    default:
      return state;
  }
};

/**
 * Handle all actions ended with _(REQUEST|FAILURE|SUCCESS)
 * @param {Object} state
 * @param {Object} action
 * @param {string} action.type
 * @param {boolean} [action.error]
 * @param {Error} [action.payload]
 * @returns {Object}
 */
export default (function() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  if (!ASYNC_TYPE_PATTERN.test(action.type)) {
    return state;
  }

  var _splitNameAndTypeFrom = splitNameAndTypeFromString(action.type),
    _splitNameAndTypeFrom2 = _slicedToArray(_splitNameAndTypeFrom, 2),
    requestName = _splitNameAndTypeFrom2[0],
    actionType = _splitNameAndTypeFrom2[1];

  return _extends(
    {},
    state,
    _defineProperty(
      {},
      requestName,
      errorReducer(
        state[requestName],
        _extends({}, action, { type: actionType })
      )
    )
  );
});
