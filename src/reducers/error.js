import { ASYNC_TYPE_PATTERN, REQUEST, FAILURE, SUCCESS } from '../constants';
import splitNameAndTypeFromString from '../splitNameAndTypeFromString';

/**
 * @param {Error|null} state
 * @param {Object} action
 * @param {string} action.type
 * @param {boolean} [action.error]
 * @param {Error} [action.payload]
 * @return {Error|null}
 */
const errorReducer = (state = null, action) => {
  switch (action.type) {
    case REQUEST:
    case SUCCESS:
      return null;
    case FAILURE:
      return action.error === true ? action.payload : null;
    default:
      return state;
  }
};

/**
 * Handle all actions ended with _(REQUEST|FAILURE|SUCCESS)
 * @param {Object} state
 * @param {Object} action
 * @param {string} action.type
 * @param {boolean} [action.error]
 * @param {Error} [action.payload]
 * @returns {Object}
 */
export default (state = {}, action) => {
  if (!ASYNC_TYPE_PATTERN.test(action.type)) {
    return state;
  }

  const [requestName, actionType] = splitNameAndTypeFromString(action.type);

  return {
    ...state,
    [requestName]: errorReducer(state[requestName], {
      ...action,
      type: actionType
    })
  };
};
