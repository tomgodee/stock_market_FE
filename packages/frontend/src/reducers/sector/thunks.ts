import { createAsyncThunk } from '@reduxjs/toolkit';
import sectorService, { SECTOR_URL } from '../../services/sector';

export const getAll = createAsyncThunk(`${SECTOR_URL}/getAll`, async () => {
  const response = await sectorService.getAll();
  return response.data;
});

export const getOne = createAsyncThunk(`${SECTOR_URL}/getOne`, async (sectorId: number) => {
  const response: any = await sectorService.getOne(sectorId);
  return response.data;
});
