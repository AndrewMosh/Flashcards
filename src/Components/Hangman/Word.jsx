import React from "react";

export const Word = ({ newWord, alpha }) => {
  const handleAlphabet = (e) => {
    let cunt = document.querySelectorAll(".hangman__word div span");
    if (newWord.includes(e.currentTarget.innerHTML)) {
      let foundLetter = [...cunt];
      let whore = foundLetter.filter(
        (el) => el.innerHTML === e.currentTarget.innerHTML
      );
      whore.forEach((el) => el.classList.add("fuckU"));
    } else {
      console.log("u r bitch");
    }

    e.currentTarget.classList.add("notBitch");
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
          <div key={el} onClick={(e) => handleAlphabet(e)}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
};
