import axios from "axios";

const token = localStorage.getItem("Token");

export const instance = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    authorization: token,
  },
});
