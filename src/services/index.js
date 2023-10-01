import axios from "axios";

const staticServerUrL = import.meta.env.VITE_APP_API_URL;
export const instance = axios.create({
  baseURL: staticServerUrL + "/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authoriztion"] = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);
