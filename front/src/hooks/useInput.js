import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = async (e) => {
    const value = e.target.value;
    setValue(e.target.value);
    if (validator) {
      const result = await validator(value);
      setIsValid(result.isValid);
      setErrorMessage(result.errorMessage);
    }
  };
  return { value, onChange, isValid, errorMessage };
};

export default useInput;
