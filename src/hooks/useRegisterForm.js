import { useCallback, useRef, useState } from "react";

const useRegisterForm = (initialValue) => {
  const [inputs, setInputs] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const initialValueRef = useRef(initialValue);

  const handleChange = useCallback((name, value) => {
    setInputs((prev) => {
      const nextInputs = { ...prev, [name]: value };
      const hasChanged = Object.keys(nextInputs).some(
        (key) =>
          JSON.stringify(nextInputs[key]) !==
          JSON.stringify(initialValueRef.current[key]),
      );

      setIsDirty(hasChanged);
      return nextInputs;
    });
  }, []);

  return { inputs, handleChange, isDirty };
};

export default useRegisterForm;
