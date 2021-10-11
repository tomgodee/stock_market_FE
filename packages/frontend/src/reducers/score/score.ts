import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ScoreState, ScorePayload } from '../../types/score';
import {
  sendScore,
  getTopScores,
} from './thunks';

const initialState: ScoreState = {
  score: 0,
  topScores: [{
    id: 0,
    score: 0,
    createdAt: '',
    user: {
      id: 0,
      name: '',
    },
  }],
};

export const slice = createSlice({
  name: 'scoreState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendScore.pending, (state) => {});
    builder.addCase(sendScore.fulfilled, (state, action: PayloadAction<ScorePayload>) => {
      const { payload } = action;
    });
    builder.addCase(sendScore.rejected, (state, action) => {});
    builder.addCase(getTopScores.pending, (state) => {});
    builder.addCase(getTopScores.fulfilled, (state, action: PayloadAction<any>) => {
      const { payload } = action;
      state.topScores = payload;
    });
    builder.addCase(getTopScores.rejected, (state, action) => {});
  },
});

const { actions, reducer } = slice;

// export const {} = actions;

export const selectScoreState = (state: any): ScoreState => state.scoreState;

export default reducer;
