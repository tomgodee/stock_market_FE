import baseService from '../baseApi';
import type { ScorePayload } from '../../types/score';

export const BASE_URL = '/score';

function sendScore(data: ScorePayload): any {
  return baseService.post(`${BASE_URL}`, data);
}

function getTopScores(): any {
  return baseService.get(`${BASE_URL}`);
}

export default {
  sendScore,
  getTopScores,
};
