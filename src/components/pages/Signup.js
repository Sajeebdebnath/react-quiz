import React from "react";
import signupImg from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignUpForm from "../SignUpForm";

const Signup = () => {
  document.title = "Signup";
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration img={signupImg}></Illustration>
        <SignUpForm></SignUpForm>
      </div>
    </>
  );
};

export default Signup;
