import axios from "axios";

const token = localStorage.getItem("Token");

export const instance = axios.create({
  timeout: 5000,
  baseURL: "https://k29e4c1a30136a.user-app.krampoline.com",
  headers: {
    "Content-Type": "application/json",
    authorization: token,
  },
});

// export const instance = axios.create({
//   timeout: 5000,
//   headers: {
//     "Content-Type": "application/json",
//     authorization: token,
//   },
// });
