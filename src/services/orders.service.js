import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'http://localhost:1212/admin';

const getOrders = () => {
  return axios.get(API_URL + '/orders/3', { headers: authHeader() });
};

export default {
    getOrders,
};
