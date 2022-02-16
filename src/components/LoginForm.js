import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import Form from "./Form";
import TextInputField from "./TextInputField";

const LoginForm = () => {
  return (
    <Form className={classes.login}>
      <TextInputField
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
      />
      <TextInputField
        type="password"
        placeholder="Enter password"
        icon="lock"
      />

      <Button>
        <span>Submit now</span>
      </Button>
      <div className="info">
        Don't have an account? <Link to="/login">Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
