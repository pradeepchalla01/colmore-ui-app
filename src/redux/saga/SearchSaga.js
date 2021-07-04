
import { takeLatest, put, call, delay } from 'redux-saga/effects';
import * as types from '../constants';
import { searchCompany } from '../services';

export const searchCompanySaga = function* (action) {
  try {
    yield put({ type: types.LOADING });
    yield delay(1000);
    const searchResults = yield call(searchCompany, action.keyword);
    yield put({ type: types.SEARCH_COMPANY_SUCCESS, payload: searchResults });
  } catch {
    yield put({ type: types.SEARCH_COMPANY_FAILURE });
  }
}

export default function* SearchCompanySaga() {
  yield takeLatest(types.SEARCH_COMPANY, searchCompanySaga);
}
