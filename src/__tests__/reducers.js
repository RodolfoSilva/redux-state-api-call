import loadingReducer from '../reducers/loading';
import errorReducer from '../reducers/error';

describe('reducer', () => {
  describe('loading', () => {
    it('should return the initial state', () => {
      expect(loadingReducer(undefined, {})).toMatchSnapshot();
    });

    test.each([
      [
        { type: 'ADD_TODO_REQUEST' },
        undefined,
        { ADD_TODO: expect.any(Number) },
      ],
      [
        { type: 'ADD_TODO_FAILURE' },
        undefined,
        { ADD_TODO: expect.any(Number) },
      ],
      [
        { type: 'ADD_TODO_SUCCESS' },
        undefined,
        { ADD_TODO: expect.any(Number) },
      ],
    ])(
      'should handle actions ended with _(REQUEST|FAILURE|SUCCESS)',
      (action, state, expected) => {
        expect(loadingReducer(state, action)).toEqual(expected);
        expect(loadingReducer(state, action)).toMatchSnapshot();
      },
    );

    test.each([
      [{ type: 'ADD_TODO_FAILURE' }, undefined, { ADD_TODO: -1 }],
      [{ type: 'ADD_TODO_SUCCESS' }, undefined, { ADD_TODO: -1 }],
      [{ type: 'ADD_TODO_FAILURE' }, { ADD_TODO: 1 }, { ADD_TODO: 0 }],
      [{ type: 'ADD_TODO_FAILURE' }, { ADD_TODO: 3 }, { ADD_TODO: 2 }],
      [{ type: 'ADD_TODO_SUCCESS' }, { ADD_TODO: 1 }, { ADD_TODO: 0 }],
      [{ type: 'ADD_TODO_SUCCESS' }, { ADD_TODO: 3 }, { ADD_TODO: 2 }],
    ])(
      'should handle actions and decrement with _(FAILURE|SUCCESS)',
      (action, state, expected) => {
        expect(loadingReducer(state, action)).toEqual(expected);
        expect(loadingReducer(state, action)).toMatchSnapshot();
      },
    );

    test.each([
      [{ type: 'ADD_TODO_REQUEST' }, undefined, { ADD_TODO: 1 }],
      [{ type: 'ADD_TODO_REQUEST' }, { ADD_TODO: 1 }, { ADD_TODO: 2 }],
    ])(
      'should handle actions and increment with _REQUEST',
      (action, state, expected) => {
        expect(loadingReducer(state, action)).toEqual(expected);
        expect(loadingReducer(state, action)).toMatchSnapshot();
      },
    );
  });

  describe('error', () => {
    it('should return the initial state', () => {
      expect(errorReducer(undefined, {})).toMatchSnapshot();
    });

    test.each([
      [{ type: 'helloWorld' }, undefined, {}],
      [{ type: 'ADD_TODO_FULFILLED' }, undefined, {}],
      [{ type: 'ADD_TODO_REJECTED' }, undefined, {}],
      [{ type: 'ADD_TODO_PENDING' }, undefined, {}],
    ])(
      'should ignore actions not ended with _(REQUEST|SUCCESS|FAILURE)',
      (action, state, expected) => {
        expect(errorReducer(state, action)).toEqual(expected);
        expect(errorReducer(state, action)).toMatchSnapshot();
      },
    );

    test.each([
      [{ type: 'ADD_TODO_REQUEST' }, undefined, { ADD_TODO: null }],
      [{ type: 'ADD_TODO_SUCCESS' }, undefined, { ADD_TODO: null }],
      [{ type: 'ADD_TODO_FAILURE' }, undefined, { ADD_TODO: null }],
    ])(
      'should handle actions ended with _(REQUEST|SUCCESS|FAILURE)',
      (action, state, expected) => {
        expect(errorReducer(state, action)).toEqual(expected);
        expect(errorReducer(state, action)).toMatchSnapshot();
      },
    );

    test.each([
      [
        { type: 'ADD_TODO_REQUEST' },
        { ADD_TODO: new Error('Unexpected error') },
        { ADD_TODO: null },
      ],
      [
        { type: 'ADD_TODO_SUCCESS' },
        { ADD_TODO: new Error('Unexpected error') },
        { ADD_TODO: null },
      ],
    ])(
      'should handle actions ended with _(REQUEST|SUCCESS)',
      (action, state, expected) => {
        expect(errorReducer(state, action)).toEqual(expected);
        expect(errorReducer(state, action)).toMatchSnapshot();
      },
    );

    test.each([
      [
        {
          type: 'ADD_TODO_FAILURE',
          error: true,
          payload: new Error('Unexpected error'),
        },
        undefined,
        { ADD_TODO: new Error('Unexpected error') },
      ],
    ])(
      'should handle actions ended with _FAILURE',
      (action, state, expected) => {
        expect(errorReducer(state, action)).toEqual(expected);
        expect(errorReducer(state, action)).toMatchSnapshot();
      },
    );
  });
});
