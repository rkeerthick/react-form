import React, { useState } from "react";
import "./Input.css";

const Input = ({ handleChange, error, required, label, id, ...others }) => {
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(true);
  };
  return (
    <div className="input">
      <label htmlFor="">{label}</label>
      <input
        {...others}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={() => others.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{error}</span>
    </div>
  );
};

export default Input;
