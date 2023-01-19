import React, { useState } from "react";
import { alphabet } from "./Hangman";

const miss = [
  { x: "x", state: false, id: 0 },
  { x: "x", state: false, id: 1 },
  { x: "x", state: false, id: 2 },
  { x: "x", state: false, id: 3 },
  { x: "x", state: false, id: 4 },
  { x: "x", state: false, id: 5 },
  { x: "x", state: false, id: 6 },
  { x: "x", state: false, id: 7 },
  { x: "x", state: false, id: 8 },
  { x: "x", state: false, id: 9 },
];

export const Word = ({ newWord, alpha, randomWord, setAlphabet, setWord }) => {
  const [next, setNext] = useState(miss);
  const [incr, setIncr] = useState(0);

  const [lost, setLost] = useState(false);
  const [clear, setClear] = useState(false);
  const [winner, setWinner] = useState(false);

  const handleAlphabet = (e) => {
    setAlphabet(
      alpha.map((el) =>
        el.letter === e.currentTarget.innerHTML ? { ...el, flag: true } : el
      )
    );
    let cunt = document.querySelectorAll(".hangman__word div span");
    let foundLetter = [...cunt];
    let fart = foundLetter.filter((el) => / /.test(el.innerHTML));
    if (fart.length > 0) {
      fart.forEach((el) => el.classList.add("fuckU"));
    }
    if (newWord.includes(e.currentTarget.innerHTML)) {
      let whore = foundLetter.filter(
        (el) => el.innerHTML === e.currentTarget.innerHTML
      );

      whore.forEach((el) => el.classList.add("fuckU"));
    } else {
      setNext(next.map((el) => (el.id === incr ? { ...el, state: true } : el)));
      setIncr(incr + 1);
      if (incr === 9) {
        setLost(true);
      }
    }
    let all = foundLetter.every((el) => el.classList.contains("fuckU"));
    if (all) {
      setWinner(true);
    }
  };
  const handleReset = () => {
    let cunt = document.querySelectorAll(".hangman__word div span");
    let foundLetter = [...cunt];
    foundLetter.forEach((el) => el.classList.remove("fuckU"));
    setClear(!clear);
    setLost(false);
    setWinner(false);
    setNext(
      next.map((el) => (el.state === true ? { ...el, state: false } : el))
    );
    setWord(randomWord);
    setAlphabet(alphabet);
    setIncr(0);
  };
  return (
    <>
      <div className="hangman__word">
        {newWord.map((el, index) => (
          <div
            key={index}
            style={{
              visibility: /[a-z]/.test(el.toString()) ? "visible" : "hidden",
            }}
            className="hangman__word__letters"
          >
            <span className="bitch">{el}</span>
          </div>
        ))}
      </div>
      <div className="hangman__alphabet">
        {alpha.map((el) => (
          <div
            key={el.letter}
            style={{
              backgroundColor:
                el.flag === true ? "rgba(128, 128, 128, 0.578)" : "bisque",
            }}
            onClick={(e) => handleAlphabet(e)}
          >
            {el.letter}
          </div>
        ))}
      </div>
      <div className="hangman__miss">
        {next.map((el, index) => (
          <div
            style={{ color: el.state === true ? "red" : "white" }}
            key={index}
          >
            {el.x}
          </div>
        ))}
      </div>
      {lost === true && (
        <div className="hangman__lostWin">
          <p>
            U lost Bitch!!!! this word was <span>{newWord}</span>
          </p>{" "}
          <br />
          <button onClick={handleReset}>новая игра</button>
        </div>
      )}
      {winner === true && (
        <div className="hangman__lostWin">
          <p>U won Bitch!!!! Congratulations!</p> <br />
          <button onClick={handleReset}>новая игра</button>
        </div>
      )}
      <div className="hangman__buttons">
        <button onClick={handleReset}>новая игра</button>
        <button>слово целиком</button>
      </div>
    </>
  );
};
