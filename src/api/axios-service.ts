import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'http://localhost:5050/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default axiosService;
