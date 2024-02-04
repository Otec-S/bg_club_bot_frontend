import React from "react";
import "./Header.css";

const Header = ({ headerTitle }) => {
  return (
    <div className="header">
      <h1 className="header__title">{headerTitle}</h1>
    </div>
  );
};

export default Header;
