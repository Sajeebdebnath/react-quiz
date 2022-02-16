import React from "react";
import classes from "../styles/Illustration.module.css";

const Illustration = ({ img }) => {
  return (
    <div className={classes.illustration}>
      <img src={img} alt="Signup" />
    </div>
  );
};

export default Illustration;
