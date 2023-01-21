import React from "react";
import { useState } from "react";
import "./match.scss";

export const Match = ({ words }) => {
  const [match, setMatch] = useState({ 1: false, 2: false });
  let dragged = null;

  const handleMatch = (e) => {
    if (e.currentTarget.textContent === "слово-перевод") {
      setMatch({ 1: true, 2: false });
    } else {
      setMatch({ 1: false, 2: true });
    }
  };
  return (
    <div className="match_container">
      <div className="match_buttons">
        <button onClick={(e) => handleMatch(e)}>слово-перевод</button>
        <button onClick={(e) => handleMatch(e)}>перевод-слово</button>
      </div>
      {(match[1] === true &&
        words.map((el) => (
          <div className="match">
            <div className="match__drag">{el.term}</div>
            <div
              className="match__drop"
              onDragEnter={(e) => e.currentTarget.classList.add("cunt")}
              onDragLeave={(e) => e.currentTarget.classList.remove("cunt")}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                dragged.parentNode.removeChild(dragged);
                e.target.appendChild(dragged);
              }}
            >
              <span>{el.definition}</span>
            </div>
          </div>
        ))) ||
        (match[2] === true && <div>whore</div>)}
      <div className="match_dnd">
        {words.map((el) => (
          <div
            draggable
            onDragStart={(e) => {
              dragged = e.currentTarget;
              e.currentTarget.classList.add("whore");
            }}
            onDragEnd={(e) => e.currentTarget.classList.remove("whore")}
          >
            {el.definition}
          </div>
        ))}
      </div>
    </div>
  );
};
