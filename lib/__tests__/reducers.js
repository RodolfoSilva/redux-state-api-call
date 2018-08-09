'use strict';

var _loading = require('../reducers/loading');

var _loading2 = _interopRequireDefault(_loading);

var _error = require('../reducers/error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('reducer', function() {
  describe('loading', function() {
    it('should return the initial state', function() {
      expect((0, _loading2.default)(undefined, {})).toMatchSnapshot();
    });

    it('should handle actions ended with _REQUEST', function() {
      var action = { type: 'ADD_TODO_REQUEST' };

      expect((0, _loading2.default)(undefined, action)).toEqual({
        ADD_TODO: 1
      });
      expect((0, _loading2.default)({ ADD_TODO: 1 }, action)).toEqual({
        ADD_TODO: 2
      });
      expect((0, _loading2.default)({ ADD_TODO: 2 }, action)).toMatchSnapshot();
    });

    test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])('.add(%i, %i)', function(
      a,
      b,
      expected
    ) {
      expect(a + b).toBe(expected);
    });

    it('should handle actions ended with _FAILURE', function() {
      var action = { type: 'ADD_TODO_FAILURE' };
      expect((0, _loading2.default)({ ADD_TODO: 1 }, action)).toEqual({
        ADD_TODO: 0
      });
      expect((0, _loading2.default)({ ADD_TODO: 2 }, action)).toMatchSnapshot();
    });

    it('should handle actions ended with _SUCCESS', function() {
      var action = { type: 'ADD_TODO_SUCCESS' };
      expect((0, _loading2.default)({ ADD_TODO: 1 }, action)).toEqual({
        ADD_TODO: 0
      });
      expect((0, _loading2.default)({ ADD_TODO: 2 }, action)).toMatchSnapshot();
    });
  });

  describe('error', function() {
    it('should return the initial state', function() {
      expect((0, _error2.default)(undefined, {})).toMatchSnapshot();
    });

    it('should ignore actions not ended with _(REQUEST|SUCCESS|FAILURE)', function() {
      expect((0, _error2.default)(undefined, { type: 'helloWorld' })).toEqual(
        {}
      );
      expect(
        (0, _error2.default)(undefined, { type: 'ADD_TODO_FULFILLED' })
      ).toMatchSnapshot();
      expect(
        (0, _error2.default)(undefined, { type: 'ADD_TODO_REJECTED' })
      ).toMatchSnapshot();
      expect(
        (0, _error2.default)(undefined, { type: 'ADD_TODO_PENDING' })
      ).toMatchSnapshot();
    });

    it('should handle actions ended with _(REQUEST|SUCCESS|FAILURE)', function() {
      expect(
        (0, _error2.default)(undefined, { type: 'ADD_TODO_REQUEST' })
      ).toEqual({ ADD_TODO: null });
      expect(
        (0, _error2.default)(undefined, { type: 'ADD_TODO_SUCCESS' })
      ).toMatchSnapshot();
      expect(
        (0, _error2.default)(undefined, { type: 'ADD_TODO_FAILURE' })
      ).toMatchSnapshot();
    });

    it('should handle actions ended with _REQUEST', function() {
      var action = { type: 'ADD_TODO_REQUEST' };
      var error = new Error('Unexpected error');
      expect((0, _error2.default)(undefined, action)).toEqual({
        ADD_TODO: null
      });
      expect(
        (0, _error2.default)({ ADD_TODO: error }, action)
      ).toMatchSnapshot();
    });

    it('should handle actions ended with _FAILURE', function() {
      var error = new Error('Unexpected error');
      var action = { type: 'ADD_TODO_FAILURE', payload: error, error: true };
      expect((0, _error2.default)(undefined, action)).toEqual({
        ADD_TODO: error
      });
      expect(
        (0, _error2.default)({ ADD_TODO: null }, action)
      ).toMatchSnapshot();
    });

    it('should handle actions ended with _SUCCESS', function() {
      var action = { type: 'ADD_TODO_SUCCESS' };
      var error = new Error('Unexpected error');
      expect((0, _error2.default)(undefined, action)).toEqual({
        ADD_TODO: null
      });
      expect(
        (0, _error2.default)({ ADD_TODO: error }, action)
      ).toMatchSnapshot();
    });
  });
});
