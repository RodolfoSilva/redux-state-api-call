import { createSelector } from 'reselect';
import apiStateSelector from './apiStateSelector';
import validateActionName from './validateActionName';
import { VALID_TYPE_PATTERN } from './constants';

var rootStateSelector = createSelector(apiStateSelector, function(state) {
  return state.error;
});

// returns the first error messages for actions
// * We assume when any request fails on a page that
//   requires multiple API calls, we shows the first error
var createErrorMessageSelector = function createErrorMessageSelector(actions) {
  actions.forEach(validateActionName);
  var plainActions = actions.map(function(action) {
    return action.toString().replace(VALID_TYPE_PATTERN, '$1');
  });

  return createSelector([rootStateSelector], function(state) {
    var errors = plainActions
      .map(function(action) {
        return state[action];
      })
      .filter(function(error) {
        return error;
      });
    if (!errors || !errors.length) return null;
    return errors[0];
  });
};

export default createErrorMessageSelector;
