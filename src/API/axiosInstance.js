import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://knowledgeshop.runasp.net/api",
});

export default axiosInstance;