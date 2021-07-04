import * as type from '../constants';

const initialState = {};

export default function SearchReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case type.LOADING:
      return {
        ...state,
        loading: true
      };
    case type.SEARCH_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: [...action.payload.bestMatches]
      };
    case type.SEARCH_COMPANY_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export const getSearchResults = state => state.SearchReducer;
