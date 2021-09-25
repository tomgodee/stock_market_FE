import baseService from '../baseApi';

export const BASE_URL = '/sector';

function getAll(): any {
  return baseService.get(`${BASE_URL}`);
}

function getOne(sectorId: number): any {
  return baseService.get(`${BASE_URL}/${sectorId}/company`);
}

export default {
  getAll,
  getOne,
};
