import client from '../config/HttpClient';
import { getApiKey } from '../../constants';
import mockJson from '../constants/mock-json';

const apiKey = getApiKey();
const baseURL = 'https://www.alphavantage.co';

export const searchCompany = (keyword) => {
  const url = `${baseURL}/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${apiKey}`;
  console.log(url);
  console.log(client);
  return mockJson;
  // return client.get(url);
}
