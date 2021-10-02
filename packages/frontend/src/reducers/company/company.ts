import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CompanyState } from '../../types/company';
import {
  getAll,
  getOne,
} from './thunks';

const initialState: CompanyState = {
  companies: [{
    id: 0,
    name: '',
    ticker: '',
    description: '',
    stock_price: 0,
  }],
  selectedCompany: {
    id: 0,
    name: '',
    ticker: '',
    description: '',
    stock_price: 0,
  },
};

export const slice = createSlice({
  name: 'companyState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {});
    builder.addCase(getAll.fulfilled, (state, action: PayloadAction<any>) => {
      const { payload } = action;
      state.companies = payload;
    });
    builder.addCase(getAll.rejected, (state, action) => {});
    builder.addCase(getOne.pending, (state) => {});
    builder.addCase(getOne.fulfilled, (state, action: PayloadAction<any>) => {
      const { payload } = action;
      state.selectedCompany = payload;
    });
    builder.addCase(getOne.rejected, (state, action) => {});
  },
});

export const selectCompanyState = (state: any): CompanyState => state.companyState;

export default slice.reducer;
