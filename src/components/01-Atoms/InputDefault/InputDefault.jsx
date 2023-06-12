import React from "react";
import {
  divStyles,
  labelStyles,
  inputStyles,
  placeholderStyles,
  ellipsisStyles,
} from "./InputDefault.styles";

const InputDefault = ({ label, id, type, placeholder, onChange, value, className, isEllipsis }) => {
  const ell = isEllipsis ? ellipsisStyles : {};

  return (
    <div style={divStyles} className={className}>
      <label htmlFor={id} style={labelStyles}>{label}</label>
      <input
        style={{
          ...inputStyles,
          ...ell,
        }}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputDefault;
