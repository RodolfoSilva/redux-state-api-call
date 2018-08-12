import { createSelector } from 'reselect';
import createCountLoadingSelector from './createCountLoadingSelector';

const isLoading = state => state > 0;

// returns true only when all actions is not loading
const createIsLoadingSelector = (actions) => {
  const selector = createCountLoadingSelector(actions);
  return createSelector([selector], isLoading);
};

export default createIsLoadingSelector;
