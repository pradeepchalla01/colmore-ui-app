import { getApiKey } from '../constants/index';

export const isApiKeyAvailable = function (history) {
  const apiKey = getApiKey();
  if (!apiKey) {
    history.push("/");
  }
}
