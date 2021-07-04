import * as types from '../constants';

export const searchCompany = (keyword) => {
  return { type: types.SEARCH_COMPANY, keyword }
}
