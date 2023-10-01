// import TextboxWithButton from "../molecules/TextboxWithButton";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";
import { Box } from "../atoms/Box";
import useInput from "../../hooks/useinput";
import Photo from "../atoms/Photo";
import { Link } from "react-router-dom";
// import { login } from "../../services/users";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setUser, setToken } from "../../store/slices/userSlice";

// const staticServerUrl = import.meta.env.VITE_APP_API_URL;
const LoginForm = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
  //   const [error, setError] = useState("");

  //   const handleLogin = async (data) => {
  //     const { email, password } = data;
  //     try {
  //       const response = await login({ email, password });
  //       const token = response?.headers?.authorization;

  //       const oneHourInMs = 60 * 60 * 1000;
  //       const expirationTime = new Date().getTime() + oneHourInMs;

  //       const user = { ...response.data, expirationTime, email: value.email };

  //       dispatch(setUser(user));
  //       localStorage.setItem("user", JSON.stringify(user));
  //       dispatch(setToken(token));
  //       localStorage.setItem("token", token);
  //       navigate(staticServerUrl + "/");
  //     } catch (error) {
  //       setError("로그인에 실패했습니다.");
  //     }
  //   };

  return (
    <Box size="small" classname="justify-center">
      <Photo className="block w-64 h-9" src="src\images\logintitle.png" />
      <TextInput
        placeholder="이메일"
        id="email"
        type="email"
        value={value.email}
        onChange={handleOnChange}
      />
      <TextInput
        placeholder="*******"
        id="password"
        type="password"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        type="long"
        label="로그인"
        // onClick={() =>
        //   handleLogin({
        //     email: value.email,
        //     password: value.password,
        //   })
        // }
      ></Button>
    </Box>
  );
};

export default LoginForm;
