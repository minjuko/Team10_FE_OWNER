import { instance } from "./index";

export const login = (data) => {
  const { email, password } = data;
  return instance.post("/login/owner", {
    email,
    password,
  });
};
