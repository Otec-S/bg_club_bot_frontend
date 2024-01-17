import React from "react";
import "./GamesListItem.css";

const GamesListItem = ({ title, backgroundColor, link }) => {
  const itemStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <a href={link}>
      <li className="games-list-item" style={itemStyle}>
        {title}
      </li>
    </a>
  );
};

export default GamesListItem;
