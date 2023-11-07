import axios from "axios";

export const instance = axios.create({
  timeout: 5000,
  baseURL: "https://k92309e2e8ca6a.user-app.krampoline.com",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Token");
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
