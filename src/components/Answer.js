import React from "react";
import CheckBoxField from "./CheckBoxField";

const Answer = ({ options = [], handleChange }) => {
  return (
    <div className="answers">
      {options.map((option, index) => {
        return (
          <CheckBoxField
            key={index}
            className="answer"
            text={option.title}
            value={index}
            checked={option.checked}
            onChange={(e) => handleChange(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Answer;
