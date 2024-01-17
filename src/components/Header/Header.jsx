import React from "react";
// import Button from "../Button/Button";
// import { useTelegram } from "../hooks/useTelegram";
import "./Header.css";

const Header = ({headerTitle}) => {
  // const { user, onClose } = useTelegram();

  return (
    <div className="header">
      <h1 className="header__title">{headerTitle}</h1>
    </div>
  );
};

export default Header;
