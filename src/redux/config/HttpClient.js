import axios from 'axios';
import localforage from 'localforage';
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 60*60*1000,
  store: localforage,
  exclude: {
    query: false
  }
});

class HttpClient {
  http;
  constructor() {
    this.http = axios.create({
      adapter: cache.adapter
    })
  }

  get = (url, ...args) => this.http.get(url, ...args)
  post = (url, ...args) => this.http.get(url, ...args)
  put = (url, ...args) => this.http.get(url, ...args)
  delete = (url, ...args) => this.http.get(url, ...args)
}

export default new HttpClient();
