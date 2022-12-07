import React from "react";
import { useState } from "react";
import "./edit.scss";

export const EditWord = ({ word, edit, setEdit, words, setWords }) => {
  const [term, setTerm] = useState(word.term);
  const [def, setDef] = useState(word.definition);

  const handleClick = (index) => {
    setWords(
      words.map((word) =>
        word.id === index ? { ...word, term: term, definition: def } : word
      )
    );
    setEdit(!edit);
  };
  return (
    <>
      <input
        className="edit"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <input
        className="edit"
        type="text"
        value={def}
        onChange={(e) => setDef(e.target.value)}
      />
      <button onClick={() => handleClick(word.id)}>&#10004;</button>
    </>
  );
};
