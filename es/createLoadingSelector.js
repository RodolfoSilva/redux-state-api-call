import { createSelector } from 'reselect';
import apiStateSelector from './apiStateSelector';
import { VALID_TYPE_PATTERN } from './constants';
import validateActionName from './validateActionName';

var rootStateSelector = createSelector([apiStateSelector], function(state) {
  return state.loading;
});

var selectLoading = function selectLoading(state) {
  return function(action) {
    var propertyKey = action.toString().replace(VALID_TYPE_PATTERN, '$1');
    return Boolean(state[propertyKey]);
  };
};

// returns true only when all actions is not loading
var createLoadingSelector = function createLoadingSelector(actions) {
  actions.forEach(validateActionName);
  return createSelector([rootStateSelector], function(state) {
    return actions.some(selectLoading(state));
  });
};

export default createLoadingSelector;
