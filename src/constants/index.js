export const getApiKey = () => {
  return window.sessionStorage.getItem('api_key');
};
export const setApiKey = (key) => {
  window.sessionStorage.setItem('api_key', key);
};

export const FiltersObject = {
  type: { prop: '3. type', val: 'Type' },
  region: { prop: '4. region', val: 'Region' },
  timeZone: { prop: '7. timezone', val: 'TimeZone' },
  currency: { prop: '8. currency', val: 'Currency' },
  matchScore: { prop: '9. matchScore', val: 'Match Score' }
}
