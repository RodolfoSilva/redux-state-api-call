import MODULE_NAME from './moduleName';

var apiStateSelector = function apiStateSelector(state) {
  return state[MODULE_NAME];
};

export default apiStateSelector;
