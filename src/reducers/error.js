import { FAILURE_PATTERN, VALID_TYPE_PATTERN } from '../constants';

export default (state = {}, { type, payload, error }) => {
  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!/(.*)_(REQUEST|FAILURE)/.exec(type)) return state;

  const requestName = type.toString().replace(VALID_TYPE_PATTERN, '$1');

  // Store errorMessage
  // e.g. stores errorMessage when receiving GET_TODOS_FAILURE
  //      else clear errorMessage when receiving GET_TODOS_REQUEST
  return {
    ...state,
    [requestName]: error === true && FAILURE_PATTERN.test(type) ? payload : null,
  };
};
