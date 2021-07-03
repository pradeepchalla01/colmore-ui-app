import axios from 'axios';

class HttpClient {
  http;
  constructor() {
    this.http = axios.create({})
  }

  get = (url, ...args) => this.http.get(url, ...args)
  post = (url, ...args) => this.http.get(url, ...args)
  put = (url, ...args) => this.http.get(url, ...args)
  delete = (url, ...args) => this.http.get(url, ...args)
}

export default new HttpClient();
