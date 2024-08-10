import React from "react";

const Input = ({ type, onChange, value }) => {
  return <input type={type} onChange={onChange} value={value} />;
};

export default Input;
