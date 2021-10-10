import baseService from '../baseApi';
import type { ScorePayload } from '../../types/score';

export const BASE_URL = '/score';

function sendScore(data: ScorePayload): any {
  return baseService.post(`${BASE_URL}`, data);
}

export default {
  sendScore,
};
