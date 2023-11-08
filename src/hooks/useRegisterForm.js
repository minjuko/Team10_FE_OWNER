import { useState } from "react";

const useRegisterForm = (initialValue) => {
  const [inputs, setInputs] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);

  const handleChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
    if (initialValue[name] !== inputs[name]) setIsDirty(true);
    else setIsDirty(false);
  };

  return { inputs, handleChange, isDirty };
};

export default useRegisterForm;
