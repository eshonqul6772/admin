import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'http://localhost:1212/admin';

const getProduct = () => {
  return axios.get(API_URL + '/products', { headers: authHeader() });
};

const create = (data) => {
  return axios.post(API_URL + '/products/167', data, { headers: authHeader() });
};

export default {
  getProduct,
  create
};
