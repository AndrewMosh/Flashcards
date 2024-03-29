import React from "react";
import { useState } from "react";
import "./dictionary.scss";
import { EditWord } from "../EditWord/EditWord";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleAdd, toggleMove, deleteWord } from "../../store/wordSlice";
import InProgress from "../In Progress/InProgress";
const Dictionary = () => {
  const [term, setTerm] = useState("");
  const [def, setDef] = useState("");
  const [learned, setLearned] = useState(false);
  const [blurLeft, setBlurLeft] = useState(true);
  const [blurRight, setBlurRight] = useState(true);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const { words } = useSelector((state) => state);
  const { wordId } = useParams();

  let task = words.find(({ id }) => id === +wordId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim().length !== 0 || def.trim().length !== 0) {
      dispatch(
        handleAdd({
          id: Math.floor(Math.random() * 10000),
          term: term,
          definition: def,
          learned: false,
          right: false,
          wrong: false,
          empty: true,
        })
      );
      setDef("");
      setTerm("");
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            placeholder="Слово, предложение или термин"
          />
          <input
            value={def}
            onChange={(e) => setDef(e.target.value)}
            type="text"
            placeholder="Перевод или определение"
          />
          <button style={{ fontSize: "25px", padding: "5px 0" }}>+</button>
        </form>
        <div className="tabs">
          <div
            style={{
              width: "50px",
              transform: learned === false ? "scale(1.1)" : "scale(0.9)",
            }}
            onClick={() => setLearned(false)}
          >
            изучаю
          </div>
          <div
            style={{
              width: "50px",
              transform: learned === true ? "scale(1.1)" : "scale(0.9)",
            }}
            onClick={() => setLearned(true)}
          >
            выучил
          </div>
        </div>
        <div className="dictCont">
          {(!learned &&
            words.map(
              (word) =>
                !word.learned && (
                  <div className="book" key={word.id}>
                    <>
                      <div>
                        <span
                          title="редактировать"
                          onClick={() => setBlurLeft(!blurLeft)}
                          className={
                            !blurLeft ? "blur indent" : "nonBlur indent"
                          }
                        >
                          {word.term}
                        </span>
                      </div>
                      <div>
                        <span
                          title="редактировать"
                          onClick={() => setBlurRight(!blurRight)}
                          className={
                            !blurRight ? "blur indent" : "nonBlur indent"
                          }
                        >
                          {word.definition}
                        </span>
                      </div>
                      <Link
                        onClick={() => setEdit(!edit)}
                        to={`/word/${word.id}`}
                      >
                        <button className="pencil">&#9998;</button>
                      </Link>
                    </>
                    {(!word.learned && (
                      <button onClick={() => dispatch(toggleMove(word.id))}>
                        в изученные
                      </button>
                    )) || (
                      <button onClick={() => dispatch(toggleMove(word.id))}>
                        в словарь
                      </button>
                    )}
                    <button onClick={() => dispatch(deleteWord(word.id))}>
                      удалить
                    </button>
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
                      <button onClick={() => dispatch(toggleMove(word.id))}>
                        в изученные
                      </button>
                    )) || (
                      <button onClick={() => dispatch(toggleMove(word.id))}>
                        в словарь
                      </button>
                    )}

                    <button onClick={() => dispatch(deleteWord(word.id))}>
                      удалить
                    </button>
                  </div>
                )
            )}
        </div>
        {edit && <EditWord task={task} edit={edit} setEdit={setEdit} />}
      </div>
      <InProgress />
    </>
  );
};

export default Dictionary;
