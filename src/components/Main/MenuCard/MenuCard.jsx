import React from "react";
import "./MenuCard.css";
import { Link } from "react-router-dom";

const MenuCard = ({ title, backgroundColor, path }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <Link to={path}>
      <li className="menu-card" style={cardStyle}>
        <h2 className="menu-card__title">{title}</h2>
      </li>
    </Link>
  );
};

export default MenuCard;
