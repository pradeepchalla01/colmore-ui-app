import * as type from '../constants';

const initialState = {};

export default function SearchReducer(state = initialState, action) {
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
        searchResults: action.payload.bestMatches,
        filtersObj: getFilterData(action.payload.bestMatches)
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

const getUniqueValues = (obj, val, attr, prop) => {
  return !obj[attr] ? [val[prop]] : !obj[attr].includes(val[prop]) ? obj[attr].concat(val[prop]) : obj[attr];
}

const getFilterData = (arr) => {
  return arr.reduce((obj, val) => {
    return {
      type: getUniqueValues(obj, val, 'type', '3. type'),
      region: getUniqueValues(obj, val, 'region', '4. region'),
      timeZone: getUniqueValues(obj, val, 'timeZone', '7. timezone'),
      currency: getUniqueValues(obj, val, 'currency', '8. currency'),
      matchScore: getUniqueValues(obj, val, 'matchScore', '9. matchScore')
    };
  }, {});
}

export const getSearchData = state => state.SearchReducer;
