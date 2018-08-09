import { createSelector } from 'reselect';
import rootState from './rootState';
import validateActionName from '../validateActionName';
import splitNameAndTypeFromString from '../splitNameAndTypeFromString';

var rootStateSelector = createSelector(rootState, function (state) {
  return state.error;
});

// returns the first error messages for actions
// * We assume when any request fails on a page that
//   requires multiple API calls, we shows the first error
var createErrorMessageSelector = function createErrorMessageSelector(actions) {
  actions.forEach(validateActionName);
  var plainActions = actions.map(function (action) {
    return splitNameAndTypeFromString(action.toString())[0];
  });

  return createSelector([rootStateSelector], function (state) {
    var errors = plainActions.map(function (action) {
      return state[action];
    }).filter(function (error) {
      return error;
    });
    if (!errors || !errors.length) return null;
    return errors[0];
  });
};

export default createErrorMessageSelector;