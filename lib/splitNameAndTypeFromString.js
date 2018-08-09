'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash.memoize');

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = require('./constants');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @param {String} type
 * @returns {Array}
 */
var splitNameAndTypeFromString = function splitNameAndTypeFromString(type) {
  return type.match(_constants.ASYNC_TYPE_PATTERN).slice(1, 3);
};

exports.default = (0, _lodash2.default)(splitNameAndTypeFromString);
