import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Sector, SectorState } from '../../types/sector';
import { LOGIN_PATH } from '../../config/paths';
import {
  getAll,
  getOne,
} from './thunks';

const initialState: SectorState = {
  sectors: [{
    id: 0,
    name: '',
    description: '',
  }],
  selectedSector: {
    id: 0,
    name: '',
    description: '',
    companies: [{
      id: 0,
      name: '',
      stock_price: 0,
      description: '',
      sectorId: 0,
    }],
  },
};

export const slice = createSlice({
  name: 'sectorState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {});
    builder.addCase(getAll.fulfilled, (state, action: PayloadAction<any>) => {
      const { payload } = action;
      state.sectors = payload;
    });
    builder.addCase(getAll.rejected, (state, action) => {
    });
    builder.addCase(getOne.pending, (state) => {});
    builder.addCase(getOne.fulfilled, (state, action: PayloadAction<any>) => {
      const { payload } = action;
      state.selectedSector = payload;
    });
    builder.addCase(getOne.rejected, (state, action) => {
      window.location.replace(LOGIN_PATH);
    });
  },
});

export const selectSector = (state: any): SectorState => state.sectorState;

export default slice.reducer;
