import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import classes from "./single-question.module.css";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className={classes.question}>
      <div className={classes.header}>
        <h5>{title}</h5>
        <button
          className={classes.question_btn}
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <AiOutlineMinus className={classes.icon} />
          ) : (
            <AiOutlinePlus className={classes.icon} />
          )}
        </button>
      </div>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
