import { combineReducers } from 'redux';
import user from './user';

const reduxRootReducer = combineReducers({
  user: user.userReducer,
});

export default reduxRootReducer;
