import loadingReducer from '../reducers/loading';
import errorReducer from '../reducers/error';

describe('reducer', function() {
  describe('loading', function() {
    it('should return the initial state', function() {
      expect(loadingReducer(undefined, {})).toMatchSnapshot();
    });

    it('should handle actions ended with _REQUEST', function() {
      var action = { type: 'ADD_TODO_REQUEST' };

      expect(loadingReducer(undefined, action)).toEqual({ ADD_TODO: 1 });
      expect(loadingReducer({ ADD_TODO: 1 }, action)).toEqual({ ADD_TODO: 2 });
      expect(loadingReducer({ ADD_TODO: 2 }, action)).toMatchSnapshot();
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
      expect(loadingReducer({ ADD_TODO: 1 }, action)).toEqual({ ADD_TODO: 0 });
      expect(loadingReducer({ ADD_TODO: 2 }, action)).toMatchSnapshot();
    });

    it('should handle actions ended with _SUCCESS', function() {
      var action = { type: 'ADD_TODO_SUCCESS' };
      expect(loadingReducer({ ADD_TODO: 1 }, action)).toEqual({ ADD_TODO: 0 });
      expect(loadingReducer({ ADD_TODO: 2 }, action)).toMatchSnapshot();
    });
  });

  describe('error', function() {
    it('should return the initial state', function() {
      expect(errorReducer(undefined, {})).toMatchSnapshot();
    });

    it('should ignore actions not ended with _(REQUEST|SUCCESS|FAILURE)', function() {
      expect(errorReducer(undefined, { type: 'helloWorld' })).toEqual({});
      expect(
        errorReducer(undefined, { type: 'ADD_TODO_FULFILLED' })
      ).toMatchSnapshot();
      expect(
        errorReducer(undefined, { type: 'ADD_TODO_REJECTED' })
      ).toMatchSnapshot();
      expect(
        errorReducer(undefined, { type: 'ADD_TODO_PENDING' })
      ).toMatchSnapshot();
    });

    it('should handle actions ended with _(REQUEST|SUCCESS|FAILURE)', function() {
      expect(errorReducer(undefined, { type: 'ADD_TODO_REQUEST' })).toEqual({
        ADD_TODO: null
      });
      expect(
        errorReducer(undefined, { type: 'ADD_TODO_SUCCESS' })
      ).toMatchSnapshot();
      expect(
        errorReducer(undefined, { type: 'ADD_TODO_FAILURE' })
      ).toMatchSnapshot();
    });

    it('should handle actions ended with _REQUEST', function() {
      var action = { type: 'ADD_TODO_REQUEST' };
      var error = new Error('Unexpected error');
      expect(errorReducer(undefined, action)).toEqual({ ADD_TODO: null });
      expect(errorReducer({ ADD_TODO: error }, action)).toMatchSnapshot();
    });

    it('should handle actions ended with _FAILURE', function() {
      var error = new Error('Unexpected error');
      var action = { type: 'ADD_TODO_FAILURE', payload: error, error: true };
      expect(errorReducer(undefined, action)).toEqual({ ADD_TODO: error });
      expect(errorReducer({ ADD_TODO: null }, action)).toMatchSnapshot();
    });

    it('should handle actions ended with _SUCCESS', function() {
      var action = { type: 'ADD_TODO_SUCCESS' };
      var error = new Error('Unexpected error');
      expect(errorReducer(undefined, action)).toEqual({ ADD_TODO: null });
      expect(errorReducer({ ADD_TODO: error }, action)).toMatchSnapshot();
    });
  });
});
