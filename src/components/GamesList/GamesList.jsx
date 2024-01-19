import React from "react";
import GamesListItem from "./GamesListItem/GamesListItem";
import { useNavigate  } from "react-router-dom"; // Подключаем useHistory
import { GAME_DATA } from "../../constants";
import "./GamesList.css";

const GameList = () => {
  const navigate  = useNavigate (); // Используем useHistory
  const goBack = () => {
    navigate(-1); // Используем navigate с аргументом -1 для возврата на предыдущую страницу
  };
  return (
    <>
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
      <button onClick={goBack}>Назад</button>
    </>
  );
};

export default GameList;
