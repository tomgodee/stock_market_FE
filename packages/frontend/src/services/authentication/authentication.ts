import baseService from '../baseApi';
import { LoginForm } from '../../types/user';

export const BASE_URL = '/user';

function login(data: LoginForm): any {
  return baseService.post(`${BASE_URL}/login`, data);
}

function verifyToken(token: string): any {
  return baseService.get(`${BASE_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export default {
  login,
  verifyToken,
};
