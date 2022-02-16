import React from "react";

const CheckBoxField = ({ className, text, ...rest }) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span> {text}</span>
    </label>
  );
};

export default CheckBoxField;
