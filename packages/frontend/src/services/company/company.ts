import baseService from '../baseApi';

export const BASE_URL = '/company';

function getAll(): any {
  return baseService.get(`${BASE_URL}`);
}

function getManyBySector(sectorName: string): any {
  return baseService.get(`${BASE_URL}`, {
    params: {
      sector: sectorName,
    },
  });
}

function getOne(companyId: number): any {
  return baseService.get(`${BASE_URL}/${companyId}`);
}

export default {
  getAll,
  getManyBySector,
  getOne,
};
