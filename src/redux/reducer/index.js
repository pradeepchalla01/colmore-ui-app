import { combineReducers } from 'redux';
import OnBoarding from '../reducer/OnBoardingReducer'
import SearchReducer from '../reducer/SearchReducer'

const rootReducer = combineReducers({
  OnBoarding,
  SearchReducer
});

export default rootReducer;
