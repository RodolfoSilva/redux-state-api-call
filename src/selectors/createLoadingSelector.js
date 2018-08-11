import { createSelector } from 'reselect';
import rootState from './rootState';
import validateActionName from '../validateActionName';
import splitNameAndTypeFromString from '../splitNameAndTypeFromString';

const rootStateSelector = createSelector([rootState], state => state.loading);

const selectLoading = state => (action) => {
  const [propertyKey] = splitNameAndTypeFromString(action.toString());
  return state[propertyKey] !== undefined ? state[propertyKey] : 0;
};

const sum = (a, b) => a + b;

const sumLoadingActions = actions => state => actions
  .map(selectLoading(state))
  .reduce(sum, 0);

// returns true only when all actions is not loading
const createLoadingSelector = (actions) => {
  actions.forEach(validateActionName);
  return createSelector([rootStateSelector], sumLoadingActions(actions));
};

export default createLoadingSelector;
