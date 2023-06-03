import React from "react";
import "./flashcard.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toggleMove } from "../../store/wordSlice";
import { useSelector, useDispatch } from "react-redux";
import InProgress from "../In Progress/InProgress";
export const Flashcard = () => {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState(false);
  const dispatch = useDispatch();
  const { words } = useSelector((state) => state);
  let filteredWords = words.filter((word) => word.learned === false);
  let question = filteredWords[step];
  const handleNext = (step) => {
    if (step === filteredWords.length - 1) {
      setAnswer(!answer);
      setStep(0);
    } else {
      setAnswer(!answer);
      setStep(step + 1);
    }
  };

  return (
    <>
      <div className="flashcontainer">
        {(filteredWords.length > 0 && (
          <div className="flashcards">
            <div>
              <div>{question.term}</div>
              <span
                title="в изученные"
                onClick={() => dispatch(toggleMove(question.id))}
              >
                + в изученные
              </span>
              {(answer && (
                <>
                  <div>{question.definition}</div>{" "}
                  <button onClick={() => handleNext(step)}>далее</button>
                </>
              )) || <button onClick={() => setAnswer(!answer)}>узнать</button>}
            </div>
          </div>
        )) || (
          <div className="empty">
            <div style={{ color: "white" }}>в словаре нет новых слов</div>
            <Link to={"/Flashcards"}>вернуться в словарь</Link>
          </div>
        )}
      </div>
      <InProgress />
    </>
  );
};
