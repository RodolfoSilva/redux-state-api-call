import { combineReducers } from 'redux';
import errorReducer from './error';
import loadingReducer from './loading';

export default combineReducers({
  error: errorReducer,
  loading: loadingReducer
});