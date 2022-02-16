import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import CheckBoxField from "./CheckBoxField";
import Form from "./Form";
import TextInputField from "./TextInputField";

const SignUpForm = () => {
  return (
    <Form className={classes.signup}>
      <TextInputField type="text" placeholder="Enter name" icon="person" />
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
      <TextInputField
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
      />
      <CheckBoxField>
        <span> I agree to the Terms & Conditions</span>
      </CheckBoxField>
      <Button>
        <span>Submit now</span>
      </Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignUpForm;
