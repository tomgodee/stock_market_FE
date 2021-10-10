import scoreReducer, {
  selectScoreState,
} from './score';
import { sendScore } from './thunks';

export {
  selectScoreState,
  sendScore,
};

export default {
  scoreReducer,
};
