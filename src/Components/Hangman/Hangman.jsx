import React from "react";
import { useState } from "react";
import { Word } from "./Word";
import "./hangman.scss";
export let alphabet = [
  { letter: "a", flag: false },
  { letter: "b", flag: false },
  { letter: "c", flag: false },
  { letter: "d", flag: false },
  { letter: "e", flag: false },
  { letter: "f", flag: false },
  { letter: "g", flag: false },
  { letter: "h", flag: false },
  { letter: "i", flag: false },
  { letter: "j", flag: false },
  { letter: "k", flag: false },
  { letter: "l", flag: false },
  { letter: "m", flag: false },
  { letter: "n", flag: false },
  { letter: "o", flag: false },
  { letter: "p", flag: false },
  { letter: "q", flag: false },
  { letter: "r", flag: false },
  { letter: "s", flag: false },
  { letter: "t", flag: false },
  { letter: "u", flag: false },
  { letter: "v", flag: false },
  { letter: "w", flag: false },
  { letter: "x", flag: false },
  { letter: "y", flag: false },
  { letter: "z", flag: false },
];
export const Hangman = ({ words, setWords }) => {
  const [game, setGame] = useState(false);
  const [word, setWord] = useState("");
  const [alpha, setAlphabet] = useState(alphabet);

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
          }}
        >
          Играть
        </button>
      )) || (
        <Word
          newWord={newWord}
          alpha={alpha}
          randomWord={randomWord}
          setAlphabet={setAlphabet}
          setWord={setWord}
        />
      )}
    </div>
  );
};
