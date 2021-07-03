const APIKey = (() => {
  return {
    api_key: '',
    getApiKey: function () {
      return this.api_key || window.sessionStorage.getItem('api_key');
    },
    setApiKey: function (key) {
      this.api_key = key;
      window.sessionStorage.setItem('api_key', JSON.stringify(key));
    }
  }
})();

export default APIKey;
