import { REQUEST_PATTERN, VALID_TYPE_PATTERN } from '../constants';

export default (state = {}, { type }) => {
  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!/(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)) return state;

  const requestName = type.toString().replace(VALID_TYPE_PATTERN, '$1');

  // Store whether a request is happening at the moment or not
  // e.g. will be true when receiving GET_TODOS_REQUEST
  //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
  return {
    ...state,
    [requestName]: REQUEST_PATTERN.test(type),
  };
};
