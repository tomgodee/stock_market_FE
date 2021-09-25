import userReducer, { selectUser } from './user';
import { login, verifyToken } from './thunks';

export {
  selectUser,
  login,
  verifyToken,
};

export default {
  userReducer,
};
