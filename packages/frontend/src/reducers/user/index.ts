import userReducer, { selectUserState } from './user';
import { login, verifyToken } from './thunks';

export {
  selectUserState,
  login,
  verifyToken,
};

export default {
  userReducer,
};
