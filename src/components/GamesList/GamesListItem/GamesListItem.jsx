import React from "react";
import { useNavigate } from "react-router-dom";

import "./GamesListItem.css";

const GamesListItem = ({ title, backgroundColor, link, isLast }) => {
  const itemStyle = {
    backgroundColor: backgroundColor,
    border: isLast ? "1px solid white" : "none" // Применяем белую рамку, если это последний элемент списка
  };

  const navigate = useNavigate();

  const handleClick = () => {
    if (isLast) {
      window.location.href = link; // Переход на определенный URL, если это последний элемент списка
    } else {
      navigate(`/tesera-card/${encodeURIComponent(link)}`);
    }
  };

  return (
    <li className={`games-list-item ${isLast ? 'last-item' : ''}`} style={itemStyle} onClick={handleClick}>
      {title}
    </li>
  );
};

export default GamesListItem;
