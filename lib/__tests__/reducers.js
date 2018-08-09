'use strict';

var _loading = require('../reducers/loading');

var _loading2 = _interopRequireDefault(_loading);

var _error = require('../reducers/error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('reducer', function () {
  describe('loading', function () {
    it('should return the initial state', function () {
      expect((0, _loading2.default)(undefined, {})).toMatchSnapshot();
    });

    test.each([[{ type: 'ADD_TODO_REQUEST' }, undefined, { ADD_TODO: expect.any(Number) }], [{ type: 'ADD_TODO_FAILURE' }, undefined, { ADD_TODO: expect.any(Number) }], [{ type: 'ADD_TODO_SUCCESS' }, undefined, { ADD_TODO: expect.any(Number) }]])('should handle actions ended with _(REQUEST|FAILURE|SUCCESS)', function (action, state, expected) {
      expect((0, _loading2.default)(state, action)).toEqual(expected);
      expect((0, _loading2.default)(state, action)).toMatchSnapshot();
    });

    test.each([[{ type: 'ADD_TODO_FAILURE' }, undefined, { ADD_TODO: -1 }], [{ type: 'ADD_TODO_SUCCESS' }, undefined, { ADD_TODO: -1 }], [{ type: 'ADD_TODO_FAILURE' }, { ADD_TODO: 1 }, { ADD_TODO: 0 }], [{ type: 'ADD_TODO_FAILURE' }, { ADD_TODO: 3 }, { ADD_TODO: 2 }], [{ type: 'ADD_TODO_SUCCESS' }, { ADD_TODO: 1 }, { ADD_TODO: 0 }], [{ type: 'ADD_TODO_SUCCESS' }, { ADD_TODO: 3 }, { ADD_TODO: 2 }]])('should handle actions and decrement with _(FAILURE|SUCCESS)', function (action, state, expected) {
      expect((0, _loading2.default)(state, action)).toEqual(expected);
      expect((0, _loading2.default)(state, action)).toMatchSnapshot();
    });

    test.each([[{ type: 'ADD_TODO_REQUEST' }, undefined, { ADD_TODO: 1 }], [{ type: 'ADD_TODO_REQUEST' }, { ADD_TODO: 1 }, { ADD_TODO: 2 }]])('should handle actions and increment with _REQUEST', function (action, state, expected) {
      expect((0, _loading2.default)(state, action)).toEqual(expected);
      expect((0, _loading2.default)(state, action)).toMatchSnapshot();
    });
  });

  describe('error', function () {
    it('should return the initial state', function () {
      expect((0, _error2.default)(undefined, {})).toMatchSnapshot();
    });

    test.each([[{ type: 'helloWorld' }, undefined, {}], [{ type: 'ADD_TODO_FULFILLED' }, undefined, {}], [{ type: 'ADD_TODO_REJECTED' }, undefined, {}], [{ type: 'ADD_TODO_PENDING' }, undefined, {}]])('should ignore actions not ended with _(REQUEST|SUCCESS|FAILURE)', function (action, state, expected) {
      expect((0, _error2.default)(state, action)).toEqual(expected);
      expect((0, _error2.default)(state, action)).toMatchSnapshot();
    });

    test.each([[{ type: 'ADD_TODO_REQUEST' }, undefined, { ADD_TODO: null }], [{ type: 'ADD_TODO_SUCCESS' }, undefined, { ADD_TODO: null }], [{ type: 'ADD_TODO_FAILURE' }, undefined, { ADD_TODO: null }]])('should handle actions ended with _(REQUEST|SUCCESS|FAILURE)', function (action, state, expected) {
      expect((0, _error2.default)(state, action)).toEqual(expected);
      expect((0, _error2.default)(state, action)).toMatchSnapshot();
    });

    test.each([[{ type: 'ADD_TODO_REQUEST' }, { ADD_TODO: new Error('Unexpected error') }, { ADD_TODO: null }], [{ type: 'ADD_TODO_SUCCESS' }, { ADD_TODO: new Error('Unexpected error') }, { ADD_TODO: null }]])('should handle actions ended with _(REQUEST|SUCCESS)', function (action, state, expected) {
      expect((0, _error2.default)(state, action)).toEqual(expected);
      expect((0, _error2.default)(state, action)).toMatchSnapshot();
    });

    test.each([[{
      type: 'ADD_TODO_FAILURE',
      error: true,
      payload: new Error('Unexpected error')
    }, undefined, { ADD_TODO: new Error('Unexpected error') }]])('should handle actions ended with _FAILURE', function (action, state, expected) {
      expect((0, _error2.default)(state, action)).toEqual(expected);
      expect((0, _error2.default)(state, action)).toMatchSnapshot();
    });
  });
});