import React from "react";
import questions from "../../../utils/questions";
import classes from "./questions.module.css";
import SingleQuestion from "./single-question";

const Questions = () => {

  return (
    <section className={classes.question_container}>
        <h1>Frequently Asked Questions</h1>
      <div className={classes.question_section}>
        {questions.map((question) => {
          return (
            <SingleQuestion key={question.id} {...question}></SingleQuestion>
          );
        })}
      </div>
    </section>
  );
};

export default Questions;
