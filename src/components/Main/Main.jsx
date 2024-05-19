import React from "react";
import MenuCard from "./MenuCard/MenuCard";
import "./Main.css";
import { CARD_DATA } from "../../constants";

import { Fade, Slide } from "react-awesome-reveal";

const Main = () => {
  return (
    <>
      <Slide direction="down" triggerOnce>
        <h1 className="main__title">Board Game Club</h1>
      </Slide>
      <Fade triggerOnce>
        <ul className="main__card-block">
          {CARD_DATA.map((card) => (
            <MenuCard
              key={card.id}
              title={card.title}
              path={card.path}
              backgroundColor={card.backgroundColor}
            />
          ))}
        </ul>
      </Fade>
    </>
  );
};

export default Main;
