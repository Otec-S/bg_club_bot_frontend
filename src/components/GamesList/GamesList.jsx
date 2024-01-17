import React from "react";
import GamesListItem from "./GamesListItem/GamesListItem";
import { GAME_DATA } from "../../constants";
import './GamesList.css';

const GameList = () => {
  return (
    <ul className="games-list">
      {GAME_DATA.map((game) => (
        <GamesListItem
          key={game.id}
          title={game.title}
          backgroundColor={game.backgroundColor}
          link={game.link}
        />
      ))}
    </ul>
  );
};

export default GameList;
