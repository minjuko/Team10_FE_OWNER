import { instance } from "./instance";

export const login = (data) => {
  const { email, password } = data;
  return instance.post("/owner/login", { email, password });
};

export const signup = (data) => {
  const { nickname, email, password, tel } = data;
  return instance.post("/owner/signup", { nickname, email, password, tel });
};
