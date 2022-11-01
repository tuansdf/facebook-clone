import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axios.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer token`;
  }
  return config;
});

export default axiosInstance;
