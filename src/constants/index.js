export const getApiKey = () => {
    return window.sessionStorage.getItem('api_key');
};
export const setApiKey = (key) => {
    window.sessionStorage.setItem('api_key', key);
};

