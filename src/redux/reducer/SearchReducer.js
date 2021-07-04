import * as type from '../constants';

const initialState = {userName: 'pradeep'};

export default function SearchReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case type.SEARCH_COMPANY_SUCCESS:
      return {
        ...state,
        verified: true,
        stepNo: 1
      };
    case type.SEARCH_COMPANY_FAILURE:
      return {
        ...state,
        verified: false,
        stepNo: 2
      };
    default:
      return state;
  }
}

export const getSearchResults = state => state;
