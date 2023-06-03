import React from "react";
import { useState } from "react";
import { Word } from "./Word";
import "./hangman.scss";
import { alphabet } from "../../utils/alphabet";
import { useSelector } from "react-redux";
import InProgress from "../In Progress/InProgress";
export const Hangman = () => {
  const { words } = useSelector((state) => state);
  const [game, setGame] = useState(false);
  const [word, setWord] = useState("");
  const [alpha, setAlphabet] = useState(alphabet);

  let terms = words.map((el) => el.term);
  let randomWord = terms[Math.floor(Math.random() * terms.length)];
  let newWord = word.split("");

  return (
    <>
      <div className="hangman">
        {(!game && words.length > 0 && (
          <button
            onClick={() => {
              setGame(!game);
              setWord(randomWord);
            }}
          >
            Играть
          </button>
        )) ||
          (game && (
            <Word
              newWord={newWord}
              alpha={alpha}
              randomWord={randomWord}
              setAlphabet={setAlphabet}
              setWord={setWord}
            />
          )) || <div style={{ color: "white" }}>словарь пуст</div>}
      </div>
      <InProgress />
    </>
  );
};
