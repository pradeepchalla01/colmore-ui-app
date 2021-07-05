import * as type from '../constants';

const initialState = {};

export default function CompanyDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case type.COMPANY_DETAILS_LOADING:
      return {
        ...state,
        loading: true
      };
    case type.COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        companyDetails: { ...action.payload }
      };
    case type.COMPANY_DETAILS_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export const getCompanyData = state => state.CompanyDetailsReducer;
