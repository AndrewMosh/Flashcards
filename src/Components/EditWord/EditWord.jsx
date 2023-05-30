import React from "react";
import { useState } from "react";
import "./edit.scss";
import { editWord } from "../../store/wordSlice";
import { useDispatch } from "react-redux";

export const EditWord = ({ edit, setEdit, task }) => {
  const [term, setTerm] = useState(task.term);
  const [def, setDef] = useState(task.definition);
const dispatch = useDispatch()
  const handleClick = () => {
   dispatch(editWord({id:task.id, term:term,definition:def}))
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
      <button title="сохранить" onClick={() => handleClick()}>
        &#10004;
      </button>
    </div>
  );
};
