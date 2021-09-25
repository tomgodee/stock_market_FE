import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';
import { sectorReducer } from '../reducers/sector';
import { companyReducer } from '../reducers/company';

const store = configureStore({
  reducer: {
    user: user.userReducer,
    sectorState: sectorReducer,
    companyState: companyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
