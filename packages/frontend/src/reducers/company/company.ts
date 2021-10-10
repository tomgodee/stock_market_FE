import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { last } from 'lodash';
import type { CompanyState, Company } from '../../types/company';
import {
  getAll,
  getAllWithProfit,
  getOne,
} from './thunks';

const initialState: CompanyState = {
  companies: [{
    id: 0,
    name: '',
    ticker: '',
    description: '',
    stock_price: [0],
    profit: [0],
  }],
  selectedCompany: {
    id: 0,
    name: '',
    ticker: '',
    description: '',
    stock_price: [0],
    profit: [0],
  },
};

export const slice = createSlice({
  name: 'companyState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {});
    builder.addCase(getAll.fulfilled, (state, action: PayloadAction<Company[]>) => {
      const { payload } = action;
      state.companies = payload;
    });
    builder.addCase(getAll.rejected, (state, action) => {});
    builder.addCase(getAllWithProfit.pending, (state) => {});
    builder.addCase(getAllWithProfit.fulfilled, (state, action: PayloadAction<Company[]>) => {
      const { payload } = action;
      state.companies = state.companies.map((company, index) => {
        const price = (last(payload[index].stock_price)!) + (last(payload[index].stock_price)!) * (last(payload[index].profit)! / 100);
        company.stock_price.push(Number(price.toFixed(2)));
        return company;
      });
    });
    builder.addCase(getAllWithProfit.rejected, (state, action) => {});
    builder.addCase(getOne.pending, (state) => {});
    builder.addCase(getOne.fulfilled, (state, action: PayloadAction<Company>) => {
      const { payload } = action;
      state.selectedCompany = payload;
    });
    builder.addCase(getOne.rejected, (state, action) => {});
  },
});

export const selectCompanyState = (state: any): CompanyState => state.companyState;

export default slice.reducer;
