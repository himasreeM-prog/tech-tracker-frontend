import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/learning'; // Update if needed

const api = {
  get: () => axios.get(API_BASE_URL),
  post: (item) => axios.post(API_BASE_URL, item),
  delete: (id) => axios.delete(`${API_BASE_URL}/${id}`),
  put: (id, item) => axios.put(`${API_BASE_URL}/${id}`, item),
};

export default api;
