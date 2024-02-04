import React from "react";
import "./MenuCard.css";
import { Link } from "react-router-dom";

const MenuCard = ({ title, backgroundColor, path }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <li className="menu-card" style={cardStyle}>
      <Link to={path} className="menu-card__title">
        <h2>{title}</h2>
      </Link>
    </li>
  );
};

export default MenuCard;
