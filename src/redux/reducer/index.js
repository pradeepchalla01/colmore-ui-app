import { combineReducers } from 'redux';
import SearchReducer from '../reducer/SearchReducer';
import CompanyDetailsReducer from '../reducer/CompanyDetailsReducer';

const rootReducer = combineReducers({
  SearchReducer,
  CompanyDetailsReducer
});

export default rootReducer;
