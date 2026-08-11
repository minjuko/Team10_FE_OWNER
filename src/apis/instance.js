import axios from "axios";

const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseURL) {
  throw new Error("VITE_API_BASE_URL is required");
}

export const instance = axios.create({
  timeout: 5000,
  baseURL: apiBaseURL,
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

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    // if (error.response.data.error.status === 401) {
    //   window.location.href = "/login";
    // }
    return Promise.reject(error);
  }
);
