import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext/AuthContext";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import CheckBoxField from "./CheckBoxField";
import Form from "./Form";
import TextInputField from "./TextInputField";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    //Validation
    if (password !== confirmPassword) {
      return setError("Password does not match.");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(email, password, username);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      return setError("Faild to Signup");
    }
  }

  return (
    <Form className={classes.signup} onSubmit={handleSubmit}>
      <TextInputField
        required
        type="text"
        placeholder="Enter name"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInputField
        required
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInputField
        required
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInputField
        required
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CheckBoxField
        required
        text="I agree to the Terms & Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      ></CheckBoxField>
      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignUpForm;
