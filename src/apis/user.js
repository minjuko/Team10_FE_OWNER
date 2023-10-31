import { instance } from "./instance";

export const login = async (data) => {
  const { email, password } = data;
  return instance.post("/login/owner", { email, password });
};

export const signup = async (data) => {
  const { nickname, email, password, tel } = data;
  return instance.post("/join/owner", { nickname, email, password, tel });
};
