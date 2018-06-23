import { createSelector } from 'reselect';
import apiStateSelector from './apiStateSelector';
import { VALID_TYPE_PATTERN } from './constants';
import validateActionName from './validateActionName';

const rootStateSelector = createSelector([apiStateSelector], state => state.loading);

const selectLoading = state => (action) => {
  const propertyKey = action.toString().replace(VALID_TYPE_PATTERN, '$1');
  return Boolean(state[propertyKey]);
};

// returns true only when all actions is not loading
const createLoadingSelector = (actions) => {
  actions.forEach(validateActionName);
  return createSelector([rootStateSelector], state => actions.some(selectLoading(state)));
};

export default createLoadingSelector;
