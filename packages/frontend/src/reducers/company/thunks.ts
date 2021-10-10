import { createAsyncThunk } from '@reduxjs/toolkit';
import companyService, { COMPANY_URL } from '../../services/company';

export const getAll = createAsyncThunk(`${COMPANY_URL}/getAll`, async () => {
  const response = await companyService.getAll();
  return response.data;
});

export const getAllWithProfit = createAsyncThunk(`${COMPANY_URL}/getAllWithProfit`, async () => {
  const response = await companyService.getAllWithProfit();
  return response.data;
});

export const getManyBySector = createAsyncThunk(`${COMPANY_URL}/getManyBySector`, async (sectorName: string) => {
  const response: any = await companyService.getManyBySector(sectorName);
  return response.data;
});

export const getOne = createAsyncThunk(`${COMPANY_URL}/getOne`, async (companyId: number) => {
  const response: any = await companyService.getOne(companyId);
  return response.data;
});
