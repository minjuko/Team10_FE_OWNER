import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { checkUniqueEmail, signup } from "../../apis/user";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import WarningMessage from "../atoms/WarningMessage";

const PATTERNS = {
  nickname: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,20}$/,
  email: /\S+@\S+\.\S+/,
  password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,24}$/,
  tel: /^\d{9,14}$/,
};

const MESSAGES = {
  username: {
    required: "이름을 입력해주세요.",
    pattern: "이름은 2자 이상 20자 이하, 영어 또는 한글로 입력해주세요.",
  },
  email: {
    required: "이메일을 입력해주세요.",
    pattern: "이메일 형식에 맞지 않습니다.",
  },
  password: {
    required: "비밀번호를 입력해주세요.",
    pattern:
      "비밀번호는 영문, 숫자, 특수기호 조합 8자리 이상으로 입력해주세요.",
  },
  passwordConfirm: {
    required: "비밀번호를 입력해주세요.",
    mismatch: "비밀번호가 일치하지 않습니다.",
  },
  tel: {
    required: "전화번호를 입력해주세요.",
    pattern: "전화번호는 숫자만 9자에서 14자 사이로 입력해주세요.",
  },
};

/**
 * SignupForm 회원가입 폼
 *
 * 닉네임, 이메일, 비밀번호, 비밀번호 확인, 전화번호 입력창, 회원가입 버튼을 담고 있는 박스입니다.
 */
const SignupForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const mutation = useMutation({
    mutationFn: (data) => {
      signup(data);
    },
    onSuccess: () => {
      alert("회원가입이 완료되었습니다. 로그인해주세요.");
      navigate("/login");
    },
    onError: (error) => {
      let message;

      switch (error.error.code) {
        case "1001":
          message = "입력값이 형식에 맞는지 확인해주세요.";
          break;
        case "1004":
          message = "중복된 이메일이 존재합니다.";
          break;
        case "1001":
          message = "이메일 형식에 맞게 입력해주세요.";
          break;
      }

      setErrorMessage(message);
    },
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange" });

  const email = watch("email");

  const [emailChecked, setEmailChecked] = useState(false);

  const checkEmail = async () => {
    try {
      const result = await checkUniqueEmail(email);
      if (result.data.success) setEmailChecked(true);
      alert("사용 가능한 이메일입니다. 회원가입을 진행해주세요.");
    } catch (error) {
      const errorCode = error.response.data.error.code;
      switch (errorCode) {
        case "1001":
          alert("이메일 형식에 맞게 입력해주세요.");
          break;
        case "1004":
          alert("중복된 이메일이 존재합니다. 다른 이메일을 입력해주세요.");
          break;
      }
    }
  };

  useEffect(() => {
    if (emailChecked) setEmailChecked(false);
  }, [email]);

  const onSubmit = async (data) => {
    if (!emailChecked) {
      alert("이메일 중복체크를 해주세요.");
      return;
    }
    mutation.mutate(data);
  };

  return (
    <Box className="grid p-14 gap-14">
      <h1 className="text-2xl font-bold text-center">회원가입</h1>

      <form noValidate className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 w-96">
          <TextInput
            type="email"
            placeholder="이메일"
            {...register("email", {
              required: MESSAGES.email.required,
              pattern: {
                value: PATTERNS.email,
                message: MESSAGES.email.pattern,
              },
            })}
          />
          <Button
            className="shrink-0"
            variant="small"
            type="button"
            onClick={checkEmail}
            disabled={isSubmitting || !email || errors.email}>
            중복체크
          </Button>
        </div>
        {errors.email && (
          <WarningMessage>{errors.email.message}</WarningMessage>
        )}

        <TextInput
          type="text"
          placeholder="이름"
          {...register("username", {
            required: MESSAGES.username.required,
            pattern: {
              value: PATTERNS.username,
              message: MESSAGES.username.pattern,
            },
          })}
        />
        {errors.username && (
          <WarningMessage>{errors.username.message}</WarningMessage>
        )}

        <TextInput
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: MESSAGES.password.required,
            pattern: {
              value: PATTERNS.password,
              message: MESSAGES.password.pattern,
            },
          })}
        />
        {errors.password && (
          <WarningMessage>{errors.password.message}</WarningMessage>
        )}

        <TextInput
          type="password"
          placeholder="비밀번호 확인"
          {...register("passwordConfirm", {
            required: MESSAGES.passwordConfirm.required,
            validate: {
              check: (value) => {
                if (getValues("password") !== value) {
                  return MESSAGES.passwordConfirm.mismatch;
                }
              },
            },
          })}
        />
        {errors.passwordConfirm && (
          <WarningMessage>{errors.passwordConfirm.message}</WarningMessage>
        )}

        <TextInput
          type="tel"
          placeholder="전화번호"
          {...register("tel", {
            required: MESSAGES.tel.required,
            pattern: {
              value: PATTERNS.tel,
              message: MESSAGES.tel.pattern,
            },
          })}
        />
        {errors.tel && <WarningMessage>{errors.tel.message}</WarningMessage>}

        {errorMessage && <WarningMessage>{errorMessage}</WarningMessage>}

        <Button type="submit" disabled={isSubmitting} variant="long">
          회원가입
        </Button>
      </form>
    </Box>
  );
};

export default SignupForm;
