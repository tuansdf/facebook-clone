import axios from "axios";
import useAuthStore from "/src/features/auth/auth.store";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().user?.accessToken;
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
