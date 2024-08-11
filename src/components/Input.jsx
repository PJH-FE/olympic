import React from "react";

const Input = ({ id, type, onChange, value, placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
