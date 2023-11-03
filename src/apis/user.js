import { instance } from "./instance";

export const login = async (data) => {
  const { email, password } = data;
  return instance.post("/api/owner/login", { email, password });
};

export const signup = async (data) => {
  const { nickname, email, password, tel } = data;
  return instance.post("/api/owner/join", { nickname, email, password, tel });
};
