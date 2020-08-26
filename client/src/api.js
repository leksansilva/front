import axios from 'axios';

const api = axios.create({
    baseURL:'https://topster-cine.herokuapp.com/'
});

export default api;