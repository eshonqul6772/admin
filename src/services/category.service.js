import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'http://localhost:1212/admin';

const getCategory = () => {
  return axios.get(API_URL + '/categories', { headers: authHeader() });
};

const create = (data) => {
  return axios.post(API_URL + '/categories', data, { headers: authHeader() });
};

const deleteCategory = (id) => {
  return axios.delete(API_URL + '/categories/' + id, { headers: authHeader() });
};

export default {
  getCategory,
  create,
  deleteCategory
};
