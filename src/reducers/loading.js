import {
  ASYNC_TYPE_PATTERN, REQUEST, FAILURE, SUCCESS,
} from '../constants';
import splitNameAndTypeFromString from '../splitNameAndTypeFromString';

/**
 * @param {Number} state
 * @param {Object} action
 * @param {string} action.type
 * @return {Number}
 */
const countLoading = (state = 0, action) => {
  switch (action.type) {
    case REQUEST:
      return state + 1;
    case FAILURE:
    case SUCCESS:
      return state - 1;
    default:
      return state;
  }
};

/**
 * Handle all actions ended with _(REQUEST|FAILURE|SUCCESS)
 * @param {Object} state
 * @param {Object} action
 * @param {string} action.type
 * @returns {Object}
 */
export default (state = {}, { type }) => {
  if (!ASYNC_TYPE_PATTERN.test(type)) {
    return state;
  }

  const [requestName, actionType] = splitNameAndTypeFromString(type);

  return {
    ...state,
    [requestName]: countLoading(state[requestName], { type: actionType }),
  };
};
