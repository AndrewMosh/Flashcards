import React from "react";
import "./flashcard.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Flashcard = ({ words, setWords }) => {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState(false);
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

  const moveToLearned = (index) => {
    setWords(
      words.map((word) =>
        word.id === index ? { ...word, learned: !word.learned } : word
      )
    );
  };
  return (
    <div className="flashcontainer">
      {(filteredWords.length > 0 && (
        <div className="flashcards">
          <div>
            <div>{question.term}</div>
            <span
              title="в изученные"
              onClick={() => moveToLearned(question.id)}
            >
              X
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
          <Link to={"/"}>вернуться в словарь</Link>
        </div>
      )}
    </div>
  );
};
