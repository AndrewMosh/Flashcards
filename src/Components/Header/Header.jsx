import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>Словарь</Link>
        <Link to={`/quiz`}>Карточки</Link>
      </nav>
    </header>
  );
};

export default Header;
