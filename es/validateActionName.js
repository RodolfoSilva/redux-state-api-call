import invariant from 'invariant';
import { VALID_TYPE_PATTERN } from './constants';

var validateActionName = function validateActionName(action) {
  return invariant(
    VALID_TYPE_PATTERN.test(action.toString()),
    'The action name "%s" must end with one of those patterns: [_REQUEST, _FAILURE, _SUCCESS]',
    action
  );
};

export default validateActionName;
