import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';
import score from '../reducers/score';
import { sectorReducer } from '../reducers/sector';
import { companyReducer } from '../reducers/company';

const store = configureStore({
  reducer: {
    user: user.userReducer,
    score: score.scoreReducer,
    sectorState: sectorReducer,
    companyState: companyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
