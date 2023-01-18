import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>Словарь</Link>
        <Link to={`/quiz`}>Карточки</Link>
        <Link to={`/test`}>Создать тест</Link>
        <Link to={`/hangman`}>Виселица</Link>
      </nav>
    </header>
  );
};

export default Header;
