import React from "react";
import { useState } from "react";
import { Word } from "./Word";
import "./hangman.scss";
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export const Hangman = ({ words, setWords }) => {
  const [game, setGame] = useState(false);
  const [word, setWord] = useState("");
  const [alpha, setAlphabet] = useState([]);
  let terms = words.map((el) => el.term);
  let randomWord = terms[Math.floor(Math.random() * terms.length)];
  let newWord = word.split("");

  return (
    <div className="hangman">
      {(!game && (
        <button
          onClick={() => {
            setGame(!game);
            setWord(randomWord);
            setAlphabet(alphabet);
          }}
        >
          Играть
        </button>
      )) || <Word newWord={newWord} alpha={alpha} />}
    </div>
  );
};
