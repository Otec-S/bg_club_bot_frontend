import React from "react";
import GamesListItem from "./GamesListItem/GamesListItem";
import { GAME_DATA } from "../../constants";
import "./GamesList.css";

import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
  AttentionSeeker,
} from "react-awesome-reveal";

const GameList = () => {
  return (
    <>
      <Fade cascade damping={0.1} triggerOnce>
        <ul className="games-list">
          {GAME_DATA.map((game) => (
            <GamesListItem
              key={game.id}
              title={game.title}
              backgroundColor={game.backgroundColor}
              link={game.link}
              isLast={game.isLast}
            />
          ))}
        </ul>
      </Fade>
    </>
  );
};

export default GameList;
