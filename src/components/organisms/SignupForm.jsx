// import TextboxWithButton from "../molecules/TextboxWithButton";
import { TextInput } from "../atoms/TextInput";
import TextboxWithButton from "../molecules/TextboxWithButton";
import { Button } from "../atoms/Button";
import { Box } from "../atoms/Box";
import useInput from "../../hooks/useinput";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  //   const navigate = useNavigate();
  //   const [errors, setError] = useState({});
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phonenumber: "",
  });

  //Duplicate check handle

  //   const emailresponse = new Array(
  //     "이 이메일을 사용할 수 있습니다",
  //     "동일한 이메일이 존재하거나 올바르지 않은 입력입니다."
  //   );
  //   const regierror = "회원가입에 실패했습니다.";
  //   const emailerror = "유효한 이메일 형식이 아닙니다.";
  //   const passwderror =
  //     "비밀번호는 영문, 숫자, 특수문자를 포함하고, 공백이 없으며 8~20자여야 합니다.";
  //   const passwdconfirmerror = "입력한 비밀번호와 다릅니다.";

  //   const handleDuplicate = async () => {
  //     const email = value.email;
  //     try {
  //       const response = await duplicate(email);

  //       if (response.request.status === 200) {
  //         setError((prevState) => ({
  //           ...prevState,
  //           duplicate: emailresponse[0], //이 이메일을 사용할 수 있습니다
  //         }));
  //       }
  //     } catch (error) {
  //       setError((prevState) => ({
  //         ...prevState,
  //         duplicate: emailresponse[1], //동일한 이메일이 존재하거나 올바르지 않은 입력입니다
  //       }));
  //     }
  //   };

  //Register request handle
  //   const handleRegister = async (data) => {
  //     try {
  //       const { email, password, username } = data;
  //       const response = await register({ email, password, username });
  //       navigate(staticServerUrl + "/login");
  //     } catch (errors) {
  //       setError(regierror);
  //     }
  //   };

  //Email validation check
  //   const validateEmail = () => {
  //     const emailRange = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
  //     if (!emailRange.test(value.email)) {
  //       setError((prevState) => ({
  //         ...prevState,
  //         email: emailerror,
  //       }));
  //       return false;
  //     } else {
  //       setError((prevState) => ({
  //         ...prevState,
  //         email: undefined,
  //       }));
  //     }
  //     return true;
  //   };

  //   //Password validation check
  //   const validatePassword = () => {
  //     const passwordRange =
  //       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
  //     if (!passwordRange.test(value.password)) {
  //       setError((prevState) => ({
  //         ...prevState,
  //         password: passwderror,
  //       }));
  //       return false;
  //     } else {
  //       setError((prevState) => ({
  //         ...prevState,
  //         password: undefined,
  //       }));
  //     }
  //     return true;
  //   };

  //   // check Password = Passwordconfirm
  //   const validateConfirm = () => {
  //     if (value.password !== value.passwordConfirm) {
  //       setError((prevState) => ({
  //         ...prevState,
  //         passwordConfirm: passwdconfirmerror,
  //       }));
  //       return false;
  //     } else {
  //       setError((prevState) => ({
  //         ...prevState,
  //         passwordConfirm: undefined,
  //       }));
  //     }
  //     return true;
  //   };

  // meet all requirements then send register request
  //   const handleOnSubmit = () => {
  //     const isValidEmail = validateEmail();
  //     const isValidPassword = validatePassword();
  //     const isValidConfirm = validateConfirm();

  //     if (isValidEmail && isValidPassword && isValidConfirm) {
  //       handleRegister({
  //         email: value.email,
  //         password: value.password,
  //         username: value.username,
  //         passwordConfirm: value.passwordConfirm,
  //       });
  //     }
  //   };

  return (
    <Box size="medium" className="justify-center">
      <div className="font-bold text-3xl mb-5">회원가입</div>

      <TextboxWithButton
        type="text"
        name="username"
        placeholder="닉네임"
        label="닉네임"
        value={value.username}
        onChange={handleOnChange}
        buttonlabel="중복체크"
      />

      <TextboxWithButton
        type="text"
        name="email"
        placeholder="이메일"
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
        buttonlabel="중복체크"
      />
      <TextInput
        type="password"
        name="password"
        placeholder="**********."
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      {/* {errors.password && <div className="text-red-500">{errors.password}</div>} */}

      <TextInput
        type="password"
        name="password"
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      {/* {errors.passwordConfirm && (
        <div className="text-red-500">{errors.passwordConfirm}</div>
      )} */}
      <TextInput
        type="text"
        name="phonenumber"
        placeholder="전화번호"
        label="전화번호"
        value={value.phonenumber}
        onChange={handleOnChange}
      />
      <Button
        type="long"
        label="회원가입"
        // onClick={handleOnSubmit}
      ></Button>
    </Box>
  );
};

export default SignupForm;
