import scoreReducer, {
  selectScoreState,
} from './score';
import { sendScore, getTopScores } from './thunks';

export {
  selectScoreState,
  sendScore,
  getTopScores,
};

export default {
  scoreReducer,
};
