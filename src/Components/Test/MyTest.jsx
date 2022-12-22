import React from "react";
import { useState } from "react";

export const MyTest = () => {
  const [term, setTerm] = useState("");
  const [v1, setV1] = useState({ answer: "", correct: false });
  const [v2, setV2] = useState({ answer: "", correct: false });
  const [v3, setV3] = useState({ answer: "", correct: false });
  const [v4, setV4] = useState({ answer: "", correct: false });
  const [correct, setCorrect] = useState(false);
  const [test, setTest] = useState([]);
  const [message, setMessage] = useState({ one: "", two: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      term.length > 0 &&
      v1.answer.length > 0 &&
      v2.answer.length > 0 &&
      v3.answer.length > 0 &&
      v4.answer.length > 0 &&
      correct === true
    ) {
      setTest([...test, { term: term, v1: v1, v2: v2, v3: v3, v4: v4 }]);
      console.log(test);
    } else {
      if (
        term.length === 0 ||
        v1.answer.length === 0 ||
        v1.answer.length === 0 ||
        v1.answer.length === 0 ||
        v1.answer.length === 0
      ) {
        setMessage({ ...message, one: "выбери все 4 варианта" });
      }
      if (correct === false) {
        setMessage({ ...message, two: "отметь галочкой правильный ответ" });
      }
    }
  };

  return (
    <form className="test_container_questions" onSubmit={handleSubmit}>
      <input
        value={term}
        type="text"
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>
        <div>
          <input
            value={v1.answer}
            type="text"
            onChange={(e) => {
              setV1({ ...v1, answer: e.target.value });
              setCorrect(!correct);
            }}
          />
          <input
            type="checkbox"
            onChange={() => {
              setV1({ ...v1, answer: v1.answer, correct: !v1.correct });
              setCorrect(!correct);
            }}
          />
        </div>
        <div>
          <input
            value={v2.answer}
            type="text"
            onChange={(e) => {
              setV2({ ...v2, answer: e.target.value });
              setCorrect(!correct);
            }}
          />
          <input
            type="checkbox"
            onChange={() => {
              setV2({ ...v2, answer: v2.answer, correct: !v2.correct });
              setCorrect(!correct);
            }}
          />
        </div>
        <div>
          <input
            value={v3.answer}
            type="text"
            onChange={(e) => {
              setV3({ ...v3, answer: e.target.value });
              setCorrect(!correct);
            }}
          />
          <input
            type="checkbox"
            onChange={() => {
              setV3({ ...v3, answer: v3.answer, correct: !v3.correct });
              setCorrect(!correct);
            }}
          />
        </div>
        <div>
          <input
            value={v4.answer}
            type="text"
            onChange={(e) => {
              setV4({ ...v4, answer: e.target.value });
              setCorrect(!correct);
            }}
          />
          <input
            type="checkbox"
            onChange={() => {
              setV4({ ...v4, answer: v4.answer, correct: !v4.correct });
              setCorrect(!correct);
            }}
          />
        </div>
      </div>
      <button>Сохранить</button>
      <span>{message.one}</span>
      <span>{message.two}</span>
    </form>
  );
};
