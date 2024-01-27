import React from "react";
import MenuCard from "./MenuCard/MenuCard";
import "./Main.css";
import { CARD_DATA } from "../../constants";

const Main = () => {
  return (
    <>
      <h1 className="main__title">Board Game Club</h1>
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
    </>
  );
};

export default Main;
