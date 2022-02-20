import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import Answer from "../Answer";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const intialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = true;
        });
      });

      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  document.title = "Quiz";
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, disptach] = useReducer(reducer, intialState);

  useEffect(() => {
    disptach(
      {
        type: "questions",
        value: questions,
      },
      [questions]
    );
  });

  function handleAnswerChange(e, index) {
    disptach({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answer
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar />
          <MiniPlayer></MiniPlayer>
        </>
      )}
    </>
  );
};

export default Quiz;
