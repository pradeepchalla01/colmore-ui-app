import client from '../config/HttpClient';
import { getApiKey } from '../../constants';
// import mockJson from '../constants/mock-json';

const apiKey = getApiKey();
const baseURL = 'https://www.alphavantage.co';

export const searchCompany = (keyword) => {
  const url = `${baseURL}/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${apiKey}`;
  // console.log(url);
  // console.log(client);
  // return mockJson;
  return client.get(url);
}

export const getHistoricalPrices = (timeframe, symbol) => {
  const url = `${baseURL}/query?function=${timeframe}&symbol=${symbol}&outputsize=full&apikey=${apiKey}`;
  return client.get(url);
}

export const getQuote = (symbol) => {
  const url = `${baseURL}/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
  return client.get(url);
}

export const getIndicators = (symbol) => {
  const url = `${baseURL}/query?function=SMA&symbol=${symbol}&interval=weekly&time_period=10&series_type=open&apikey=${apiKey}`;
  return client.get(url);
}