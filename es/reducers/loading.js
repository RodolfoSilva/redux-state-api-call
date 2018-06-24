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

import { REQUEST_PATTERN, VALID_TYPE_PATTERN } from '../constants';

export default (function() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref = arguments[1];
  var type = _ref.type;

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!/(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)) return state;

  var requestName = type.toString().replace(VALID_TYPE_PATTERN, '$1');

  // Store whether a request is happening at the moment or not
  // e.g. will be true when receiving GET_TODOS_REQUEST
  //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
  return _extends(
    {},
    state,
    _defineProperty({}, requestName, REQUEST_PATTERN.test(type))
  );
});
