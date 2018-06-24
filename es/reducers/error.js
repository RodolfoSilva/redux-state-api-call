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

import { FAILURE_PATTERN, VALID_TYPE_PATTERN } from '../constants';

export default (function() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref = arguments[1];
  var type = _ref.type,
    payload = _ref.payload,
    error = _ref.error;

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!/(.*)_(REQUEST|FAILURE)/.exec(type)) return state;

  var requestName = type.toString().replace(VALID_TYPE_PATTERN, '$1');

  // Store errorMessage
  // e.g. stores errorMessage when receiving GET_TODOS_FAILURE
  //      else clear errorMessage when receiving GET_TODOS_REQUEST
  return _extends(
    {},
    state,
    _defineProperty(
      {},
      requestName,
      error === true && FAILURE_PATTERN.test(type) ? payload : null
    )
  );
});
