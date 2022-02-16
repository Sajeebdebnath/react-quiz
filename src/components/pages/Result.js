import React from "react";
import Analysis from "../Analysis";
import Summery from "../Summery";

const Result = () => {
  document.title = "Result";
  return (
    <>
      <Summery></Summery>
      <Analysis></Analysis>
    </>
  );
};

export default Result;
