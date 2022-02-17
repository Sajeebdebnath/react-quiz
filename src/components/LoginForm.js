import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext/AuthContext";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import Form from "./Form";
import TextInputField from "./TextInputField";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { signIn } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      return setError("Faild to Login");
    }
  }

  return (
    <Form className={classes.login} onSubmit={handleSubmit}>
      <TextInputField
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInputField
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" disabled={loading}>
        <span>Submit now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
