import React from "react";
import { useState } from "react";
import "./match.scss";

export const Match = ({ words, setWords }) => {
  const [match, setMatch] = useState({ 1: false, 2: false });
  const [randomTerms, setRandomTerms] = useState([]);
  const [randomDefs, setRandomDefs] = useState([]);

  let dragged = null;
  let options = words.map((el) => el.definition);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleMatch = (e) => {
    setRandomDefs(shuffleArray(options));
    if (e.currentTarget.textContent === "слово-перевод") {
      setMatch({ 1: true, 2: false });
      setRandomTerms(shuffleArray(words));
    } else {
      setMatch({ 1: false, 2: true });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();

    let match = words.filter((el) => el.definition === dragged.textContent);

    if (e.currentTarget.textContent === match[0].definition) {
      setRandomTerms(
        randomTerms.map((word) =>
          word.definition === e.currentTarget.textContent
            ? { ...word, right: true, wrong: false, empty: false }
            : word
        )
      );
    } else {
      setRandomTerms(
        randomTerms.map((word) =>
          word.definition === e.currentTarget.textContent
            ? { ...word, right: false, wrong: true, empty: false }
            : word
        )
      );
    }

    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
  };

  const handleDragStart = (e) => {
    dragged = e.currentTarget;
  };

  return (
    <div className="match_container">
      <div className="match_buttons">
        <button onClick={(e) => handleMatch(e)}>слово-перевод</button>
        <button onClick={(e) => handleMatch(e)}>перевод-слово</button>
      </div>
      {(match[1] === true &&
        randomTerms.map((el) => (
          <div className="match">
            <div className="match__drag">{el.term}</div>
            <div
              style={{
                border:
                  el.right === true && el.wrong === false && el.empty === false
                    ? "2px solid green"
                    : el.right === false &&
                      el.wrong === true &&
                      el.empty === false
                    ? "2px solid red"
                    : el.right === false &&
                      el.wrong === false &&
                      el.empty === true
                    ? "none"
                    : "1px solid white",
              }}
              className="match__drop"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e)}
            >
              <span>{el.definition}</span>
            </div>
          </div>
        ))) ||
        (match[2] === true && <div>whore</div>)}
      <div className="match_dnd">
        {randomDefs.map((el) => (
          <div
            draggable
            onDragStart={(e) => handleDragStart(e)}
            onDragEnd={(e) => e.currentTarget.classList.remove("whore")}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};
