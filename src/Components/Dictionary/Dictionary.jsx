import React from "react";
import { useState } from "react";
import "./dictionary.scss";

const vocab = [];
const Dictionary = () => {
  const [words, setWords] = useState(vocab);
  const [term, setTerm] = useState("");
  const [def, setDef] = useState("");
  const [learned, setLearned] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setWords([
      ...words,
      {
        id: Math.floor(Math.random() * 10000),
        term: term,
        definition: def,
        learned: false,
      },
    ]);
    setDef("");
    setTerm("");
  };

  const moveToLearned = (index) => {
    setWords(
      words.map((word) =>
        word.id === index ? { ...word, learned: !word.learned } : word
      )
    );
  };
  const moveToAll = (index) => {
    setWords(
      words.map((word) =>
        word.id === index ? { ...word, learned: !word.learned } : word
      )
    );
  };
  const deleteWord = (index) => {
    let newArr = words.filter((word) => word.id !== index);
    setWords(newArr);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Enter a new word or term"
        />
        <input
          value={def}
          onChange={(e) => setDef(e.target.value)}
          type="text"
          placeholder="Enter its translation or definition"
        />
        <button>add</button>
      </form>
      <div className="tabs">
        <div onClick={() => setLearned(false)}>all words</div>
        <div onClick={() => setLearned(true)}>learned</div>
      </div>
      <div className="dictCont">
        {(!learned &&
          words.map(
            (word) =>
              !word.learned && (
                <div className="book" key={word.id}>
                  <div>{word.term}</div>
                  <div>{word.definition}</div>
                  {(!word.learned && (
                    <button onClick={() => moveToLearned(word.id)}>
                      add to learned
                    </button>
                  )) || (
                    <button onClick={() => moveToAll(word.id)}>
                      back to all
                    </button>
                  )}

                  <button onClick={() => deleteWord(word.id)}>delete</button>
                </div>
              )
          )) ||
          words.map(
            (word) =>
              word.learned && (
                <div className="book" key={word.id}>
                  <div>{word.term}</div>
                  <div>{word.definition}</div>
                  {(!word.learned && (
                    <button onClick={() => moveToLearned(word.id)}>
                      add to learned
                    </button>
                  )) || (
                    <button onClick={() => moveToAll(word.id)}>
                      back to all
                    </button>
                  )}

                  <button onClick={() => deleteWord(word.id)}>delete</button>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default Dictionary;
