import React from "react";
import classes from "../styles/Form.module.css";

const Button = ({ children, ...rest }) => {
  return (
    <div className={classes.button} {...rest}>
      {children}
    </div>
  );
};

export default Button;
