
import { takeLatest, put, call } from 'redux-saga/effects';
import * as types from '../constants';
import { checkOnBoarding } from '../services';

export const validateUserSaga = function* () {
  try {
    yield call(checkOnBoarding)
    yield put({ type: types.VALIDATE_USER_SUCCESS })
  } catch {
    console.log("error")
  }
}

export default function* OnBoardingSaga() {
  yield takeLatest(types.VALIDATE_USER, validateUserSaga);
}
