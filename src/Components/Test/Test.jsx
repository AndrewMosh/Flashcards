import React, { useState } from "react";
import "./test.scss";
import { TermTest } from "./TermTest";
import { DefinitionTest } from "./DefinitionTest";
import { MyTest } from "./MyTest";
const Test = ({ words, setWords }) => {
  const [constructor1, setConstructor1] = useState(false);
  const [constructor2, setConstructor2] = useState(false);
  const [constructor3, setConstructor3] = useState(false);

  return (
    <div>
      <div className="test_container">
        <>
          <button onClick={() => setConstructor1(!constructor1)}>
            Термин &rarr; Определение
          </button>
          <button onClick={() => setConstructor2(!constructor2)}>
            Определение &rarr; Термин
          </button>
          <button onClick={() => setConstructor3(!constructor3)}>
            Свой тест
          </button>
        </>
      </div>

      {(constructor1 && <TermTest words={words} setWords={setWords} />) ||
        (constructor2 && (
          <DefinitionTest words={words} setWords={setWords} />
        )) ||
        (constructor3 && <MyTest />)}
    </div>
  );
};

export default Test;
