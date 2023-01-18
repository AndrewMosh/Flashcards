import "./App.css";
import Dictionary from "./Components/Dictionary/Dictionary";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Flashcard } from "./Components/Flashcards/Flashcard";
import Test from "./Components/Test/Test";
import { Hangman } from "./Components/Hangman/Hangman";

function App() {
  const Vocabulary = JSON.parse(window.localStorage.getItem("words")) || [];
  const [words, setWords] = useState(Vocabulary);

  useEffect(() => {
    window.localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Dictionary words={words} setWords={setWords} />}
          />
          <Route
            path="/word/:wordId"
            element={<Dictionary words={words} setWords={setWords} />}
          />
          <Route
            path="/quiz"
            element={<Flashcard words={words} setWords={setWords} />}
          />
          <Route
            path="/test"
            element={<Test words={words} setWords={setWords} />}
          />
          <Route
            path="/hangman"
            element={<Hangman words={words} setWords={setWords} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
