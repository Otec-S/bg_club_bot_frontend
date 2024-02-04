import React from "react";
import { useNavigate } from "react-router-dom";

import "./GamesListItem.css";

const GamesListItem = ({ title, backgroundColor, link }) => {
  const itemStyle = {
    backgroundColor: backgroundColor,
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tesera-card/${encodeURIComponent(link)}`);
  };

  return (
    <li className="games-list-item" style={itemStyle} onClick={handleClick}>
      {title}
    </li>
  );
};

export default GamesListItem;
