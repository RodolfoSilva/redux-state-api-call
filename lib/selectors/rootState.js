'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moduleName = require('../moduleName');

var _moduleName2 = _interopRequireDefault(_moduleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootState = function rootState(state) {
  return state[_moduleName2.default];
};

exports.default = rootState;