import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
    // <a href={link}>
    //   <li className="games-list-item" style={itemStyle}>
    //     {title}
    //   </li>
    // </a>

    // <Link to="/tesera-card">
      <li className="games-list-item" style={itemStyle} onClick={handleClick}>
        {title}
      </li>
    // </Link>
  );
};

export default GamesListItem;
