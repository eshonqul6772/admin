import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'http://localhost:1212/admin';

const getTegnolgy = () => {
  return axios.get(API_URL + '/technology', { headers: authHeader() });
};

const create = (data) => {
  return axios.post(API_URL + '/technology', data, { headers: authHeader() });
};

const remove = (id) => {
  return axios.delete(API_URL + '/technology/'+id, { headers: authHeader() });
};

export default {
  getTegnolgy,
  create,
  remove,
};
