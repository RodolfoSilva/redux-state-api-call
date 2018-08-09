import invariant from 'invariant';
import { ASYNC_TYPE_PATTERN } from './constants';

/**
 * @param action
 */
const validateActionName = action => invariant(
  ASYNC_TYPE_PATTERN.test(action.toString()),
  'The action name "%s" must end with one of those patterns: [_REQUEST, _FAILURE, _SUCCESS]',
  action,
);

export default validateActionName;
