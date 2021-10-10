/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Score, ScorePayload } from '../../types/score';
import {
  sendScore,
} from './thunks';

const initialState: Score = {
  score: 0,
};

export const slice = createSlice({
  name: 'userState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendScore.pending, (state) => {});
    builder.addCase(sendScore.fulfilled, (state, action: PayloadAction<ScorePayload>) => {
      const { payload } = action;
      console.log('payload', payload);
    });
    builder.addCase(sendScore.rejected, (state, action) => {});
  },
});

const { actions, reducer } = slice;

// export const {} = actions;

export const selectScoreState = (state: any): Score => state.score;

export default reducer;
