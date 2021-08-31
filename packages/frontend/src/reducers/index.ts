import { combineReducers } from 'redux';
import user from './user';

const reduxRootReducer = combineReducers({
  user,
});

export {
  user,
};

export default reduxRootReducer;
