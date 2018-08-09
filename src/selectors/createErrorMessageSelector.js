import { createSelector } from 'reselect';
import rootState from './rootState';
import validateActionName from '../validateActionName';
import splitNameAndTypeFromString from '../splitNameAndTypeFromString';

const rootStateSelector = createSelector(rootState, state => state.error);

// returns the first error messages for actions
// * We assume when any request fails on a page that
//   requires multiple API calls, we shows the first error
const createErrorMessageSelector = (actions) => {
  actions.forEach(validateActionName);
  const plainActions = actions.map(
    action => splitNameAndTypeFromString(action.toString())[0],
  );

  return createSelector([rootStateSelector], (state) => {
    const errors = plainActions
      .map(action => state[action])
      .filter(error => error);
    if (!errors || !errors.length) return null;
    return errors[0];
  });
};

export default createErrorMessageSelector;
