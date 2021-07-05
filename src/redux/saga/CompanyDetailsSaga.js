
import { takeLatest, put, call, delay } from 'redux-saga/effects';
import * as types from '../constants';
import { getHistoricalPrices, getIndicators, getQuote } from '../services';

export const companyDetailsSaga = function* (action) {
  try {
    yield put({ type: types.COMPANY_DETAILS_LOADING });
    yield delay(1000);
    const dailyHistoricalData = yield call(getHistoricalPrices, types.TIME_SERIES_DAILY, action.symbol);
    const weeklyHistoricalData = yield call(getHistoricalPrices, types.TIME_SERIES_WEEKLY, action.symbol);
    const indicatorsData = yield call(getIndicators, action.symbol);
    const quoteData = yield call(getQuote, action.symbol);
    yield put({
      type: types.COMPANY_DETAILS_SUCCESS,
      payload: {
        dailyHistoricalData: dailyHistoricalData.data,
        weeklyHistoricalData: weeklyHistoricalData.data,
        indicatorsData: indicatorsData.data,
        quoteData: quoteData.data
      }
    });
  } catch {
    yield put({ type: types.COMPANY_DETAILS_FAILURE });
  }
}

export default function* CompanyDetailsSaga() {
  yield takeLatest(types.COMPANY_DETAILS, companyDetailsSaga);
}
