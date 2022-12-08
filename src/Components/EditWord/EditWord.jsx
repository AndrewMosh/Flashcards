import React from "react";
import { useState } from "react";
import "./edit.scss";

export const EditWord = ({ edit, setEdit, words, setWords, task }) => {
  const [term, setTerm] = useState(task.term);
  const [def, setDef] = useState(task.definition);

  const handleClick = (index) => {
    setWords(
      words.map((word) =>
        word.id === index ? { ...word, term: term, definition: def } : word
      )
    );
    setEdit(!edit);
  };
  return (
    <div className="editContainer">
      <input
        className="edit"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        autoFocus={true}
      />
      <input
        className="edit"
        type="text"
        value={def}
        onChange={(e) => setDef(e.target.value)}
      />
      <button title="сохранить" onClick={() => handleClick(task.id)}>
        &#10004;
      </button>
    </div>
  );
};
