import React from "react";

const CheckBoxField = ({ type, children }) => {
  return (
    <label>
      <input type="checkbox" />
      {children}
    </label>
  );
};

export default CheckBoxField;
