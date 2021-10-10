/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ScorePayload } from '../../types/score';
import scoreService, { SCORE_URL } from '../../services/score';

export const sendScore = createAsyncThunk(`${SCORE_URL}/sendScore`, async (data: ScorePayload) => {
  const response = await scoreService.sendScore(data);
  return response.data;
});
