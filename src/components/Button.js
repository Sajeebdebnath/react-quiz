import React from "react";
import classes from "../styles/Form.module.css";

const Button = ({ className, children, ...rest }) => {
  return (
    <div className={`${classes.button} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Button;
