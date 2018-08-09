'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _constants = require('./constants');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @param action
 */
var validateActionName = function validateActionName(action) {
  return (0, _invariant2.default)(
    _constants.ASYNC_TYPE_PATTERN.test(action.toString()),
    'The action name "%s" must end with one of those patterns: [_REQUEST, _FAILURE, _SUCCESS]',
    action
  );
};

exports.default = validateActionName;
