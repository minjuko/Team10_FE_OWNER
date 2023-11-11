import Button from "../atoms/Button";
import Box from "../atoms/Box";
import Image from "../atoms/Image";
import Logo from "/logo.svg";
import TextInput from "../atoms/TextInput";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginThunk } from "../../store/slices/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import WarningMessage from "../atoms/WarningMessage";

/**
 * LoginForm 로그인 폼
 *
 * 이메일, 비밀번호 입력창, 로그인 버튼, 회원가입 링크를 담고 있는 박스입니다.
 */
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginThunk(data))
      .then(unwrapResult)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        let message;

        if (error.error.status === "400") {
          switch (error.error.code) {
            case "1001":
              message = "이메일 형식에 맞게 입력해주세요.";
              break;
            default:
              message = "오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
              break;
          }
        } else if (error.error.status === "401") {
          switch (error.error.code) {
            case "1201":
              message = "비밀번호가 일치하지 않습니다.";
              break;
            default:
              message = "오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
              break;
          }
        } else if (error.error.status === "404") {
          switch (error.error.code) {
            case "1301":
              message = "이메일을 찾을 수 없습니다.";
              break;
          }
        }
        setErrorMessage(message);
      });
  };

  const email = watch("email");
  const password = watch("password");

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  return (
    <Box className="grid p-14 gap-14">
      <Image className="flex-center" src={Logo} />

      <form noValidate className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          placeholder="이메일"
          {...register("email", {
            required: "이메일은 필수 입력힙니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && (
          <WarningMessage>{errors.email.message}</WarningMessage>
        )}

        <TextInput
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
          })}
        />
        {errors.password && (
          <WarningMessage>{errors.password.message}</WarningMessage>
        )}
        {errorMessage && (
          <div className="w-96">
            <WarningMessage>{errorMessage}</WarningMessage>
          </div>
        )}

        <Button type="submit" disabled={isSubmitting} variant="long">
          로그인
        </Button>

        <Button
          variant="longwhite"
          onClick={() => {
            navigate("/signup");
          }}>
          회원가입
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
