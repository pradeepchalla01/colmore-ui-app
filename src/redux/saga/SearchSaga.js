
import { takeLatest, put, call } from 'redux-saga/effects';
import * as types from '../constants';
import { searchCompany } from '../services';

export const searchCompanySaga = function* () {
  try {
    yield call(searchCompany)
    yield put({ type: types.SEARCH_COMPANY_SUCCESS })
  } catch {
    console.log("error")
  }
}

export default function* SearchCompanySaga() {
  yield takeLatest(types.SEARCH_COMPANY, searchCompanySaga);
}
