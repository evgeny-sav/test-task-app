import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1';

export const API = {
  login: data => axios.post(`${baseUrl}/login`, data),
  logout: token => axios.delete(`${baseUrl}/logout/${token}`),
  fetchUserList: token => axios.get(`${baseUrl}/users/${token}`),
  fetchUserById: (id, token) => axios.get(`${baseUrl}/users/${id}/${token}`),
};
