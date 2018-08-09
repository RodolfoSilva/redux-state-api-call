'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var REQUEST = exports.REQUEST = 'REQUEST';
var FAILURE = exports.FAILURE = 'FAILURE';
var SUCCESS = exports.SUCCESS = 'SUCCESS';

var ASYNC_TYPE_PATTERN = exports.ASYNC_TYPE_PATTERN = new RegExp('(.*)_(' + REQUEST + '|' + FAILURE + '|' + SUCCESS + ')$');