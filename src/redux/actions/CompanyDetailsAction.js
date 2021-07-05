import * as types from '../constants';

export const companyDetails = (symbol) => {
  return { type: types.COMPANY_DETAILS, symbol }
}
