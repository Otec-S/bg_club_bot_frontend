import React from "react";
import "./Header.css";

import { Zoom } from "react-awesome-reveal";

const Header = ({ headerTitle }) => {
  return (
    <Zoom>
      <div className="header">
        <h1 className="header__title">{headerTitle}</h1>
      </div>
    </Zoom>
  );
};

export default Header;
