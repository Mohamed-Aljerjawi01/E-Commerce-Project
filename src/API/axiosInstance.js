import axios from 'Axios';

const axiosInstance = axios.create({
  baseURL: "https://knowledgeshop.runasp.net/api",
});

export default axiosInstance;