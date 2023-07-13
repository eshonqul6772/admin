import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'http://localhost:1212/admin';

const getContact = () => {
  return axios.get(API_URL + '/contact/1', { headers: authHeader() });
};

export default {
    getContact,
};
