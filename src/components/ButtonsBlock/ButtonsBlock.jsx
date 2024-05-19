import React from "react";
import "./ButtonsBlock.css";
import returnButton from "../../images/button-return.svg";
import homeButton from "../../images/button-home.svg";
import { useNavigate } from "react-router-dom";

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

const ButtonsBlock = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Используем navigate с аргументом -1 для возврата на предыдущую страницу
  };

  const handleHomeButtonClick = () => {
    // Перенаправление пользователя на домашнюю страницу
    navigate("/bg_club_bot_frontend");
  };

  return (
    <div className="buttons-block">
      <Slide direction="left">
        <button className="return-button" onClick={goBack}>
          <img src={returnButton} alt="Кнопочка Назад" />
        </button>
      </Slide>
      <Slide direction="right" triggerOnce>
        <button className="home-button" onClick={handleHomeButtonClick}>
          <img src={homeButton} alt="Кнопочка Домой" />
        </button>
      </Slide>
    </div>
  );
};

export default ButtonsBlock;
