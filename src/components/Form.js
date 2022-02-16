import React from "react";
import classes from "../styles/Form.module.css";

const Form = ({ className, children, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
};

export default Form;
