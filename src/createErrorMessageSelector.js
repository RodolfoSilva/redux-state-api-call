import { createSelector } from 'reselect';
import apiStateSelector from './apiStateSelector';
import validateActionName from './validateActionName';
import { VALID_TYPE_PATTERN } from './constants';

const rootStateSelector = createSelector(
  apiStateSelector,
  state => state.error,
);

// returns the first error messages for actions
// * We assume when any request fails on a page that
//   requires multiple API calls, we shows the first error
const createErrorMessageSelector = (actions) => {
  actions.forEach(validateActionName);
  const plainActions = actions.map(action => action.toString().replace(VALID_TYPE_PATTERN, '$1'));

  return createSelector(
    [rootStateSelector],
    (state) => {
      const errors = plainActions.map(action => state[action]).filter(error => error);
      if (!errors || !errors.length) return null;
      return errors[0];
    },
  );
};

export default createErrorMessageSelector;
