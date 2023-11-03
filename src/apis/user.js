import { instance } from "./instance";

export const login = async (data) => {
  const { email, password } = data;
  return instance.post("/api/login/owner", { email, password });
};

export const signup = async (data) => {
  const { nickname, email, password, tel } = data;
  return instance.post("/api/join/owner", { nickname, email, password, tel });
};
