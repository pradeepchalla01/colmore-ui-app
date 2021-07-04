import client from '../config/HttpClient';

const baseURL = window.location.origin;
const dynamicPath = window.location.pathname.split('/')[1];
const isLocal = baseURL === 'http://localhost:3000';

export const dynamicPathName = isLocal ? 'http://localhost:3000' : baseURL + '/' + dynamicPath;

export const checkOnBoarding = () => {
  return client.get(`${dynamicPathName}/validate-user`)
}

export const searchCompany = () => {
  return client.get(`${dynamicPathName}/validate-user`)
}
