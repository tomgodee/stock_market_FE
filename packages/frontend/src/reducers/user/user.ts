/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Profile, Purchase } from '../../types/user';
import { ACCESS_TOKEN } from '../../config/localStorage';
import { LOGIN_PATH } from '../../config/paths';
import {
  login,
  verifyToken,
} from './thunks';

const initialState: Profile = {
  id: 0,
  name: '',
  role: '',
  money: 100000,
  stocks: [],
};

export const slice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    buyStock: (state, action: PayloadAction<Purchase>) => {
      const { payload } = action;
      state.money -= payload.worth;
      const stockIndex = state.stocks.findIndex((stock) => stock.ticker === payload.stock.ticker);
      if (stockIndex !== -1) {
        state.stocks[stockIndex].amount += payload.stock.amount;
      } else {
        state.stocks.push(payload.stock);
      }
    },
    sellStock: (state, action: PayloadAction<Purchase>) => {
      const { payload } = action;
      state.money += payload.worth;
      const stockIndex = state.stocks.findIndex((stock) => stock.ticker === payload.stock.ticker);
      if (stockIndex !== -1) {
        state.stocks[stockIndex].amount -= payload.stock.amount;
      } else {
        state.stocks.splice(stockIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {});
    builder.addCase(login.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.role = action.payload.role;
      localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
    });
    builder.addCase(login.rejected, (state, action) => {
    });
    builder.addCase(verifyToken.pending, (state) => {});
    builder.addCase(verifyToken.fulfilled, (state, action: PayloadAction<Profile>) => {
      const { payload } = action;
      state.id = payload.id;
      state.name = payload.name;
      state.role = payload.role;
    });
    builder.addCase(verifyToken.rejected, (state, action) => {
      localStorage.removeItem(ACCESS_TOKEN);
      window.location.replace(LOGIN_PATH);
    });
  },
});

const { actions, reducer } = slice;

export const {
  buyStock,
  sellStock,
} = actions;

export const selectUserState = (state: any): Profile => state.user;

export default reducer;
