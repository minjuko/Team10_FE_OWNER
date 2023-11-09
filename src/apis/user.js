import { instance } from "./instance";

export const login = async (data) => {
  const { email, password } = data;
  return instance.post("/api/open/login/owner", { email, password });
};

export const signup = async (data) => {
  const { username, email, password, tel } = data;
  return instance.post("/api/open/join/owner", {
    username,
    email,
    password,
    tel,
  });
};

export const getUserInfo = async () => {
  return instance.get("/api/common/member/info");
};

export const checkUniqueEmail = async (email) => {
  return instance.post("/api/open/member/check", { email });
};
