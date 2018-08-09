import { createSelector } from 'reselect';
import rootState from './rootState';
import validateActionName from '../validateActionName';
import splitNameAndTypeFromString from '../splitNameAndTypeFromString';

const rootStateSelector = createSelector([rootState], state => state.loading);

const selectLoading = state => (action) => {
  const [propertyKey] = splitNameAndTypeFromString(action.toString());
  return Boolean(state[propertyKey]);
};

// returns true only when all actions is not loading
const createLoadingSelector = (actions) => {
  actions.forEach(validateActionName);
  return createSelector([rootStateSelector], state => actions.some(selectLoading(state)));
};

export default createLoadingSelector;
