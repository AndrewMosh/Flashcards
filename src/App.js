import "./App.css";
import Dictionary from "./Components/Dictionary/Dictionary";
import { useState, useEffect } from "react";

function App() {
  const Vocabulary = JSON.parse(window.localStorage.getItem("words")) || [];
  const [words, setWords] = useState(Vocabulary);

  useEffect(() => {
    window.localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  return (
    <div className="App">
      <Dictionary words={words} setWords={setWords} />
    </div>
  );
}

export default App;
