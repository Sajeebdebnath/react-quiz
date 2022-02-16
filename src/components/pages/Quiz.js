import React from "react";
import Answer from "../Answer";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const Quiz = () => {
  document.title = "Quiz";
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answer />
      <ProgressBar />
      <MiniPlayer></MiniPlayer>
    </>
  );
};

export default Quiz;
