import React from "react";
import "./ButtonsBlock.css";
import returnButton from "../../images/button-return.svg";
import homeButton from "../../images/button-home.svg";
import { useNavigate } from "react-router-dom";

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
      <button className="return-button" onClick={goBack}>
        <img
          src={returnButton}
          alt="Кнопочка Назад"
          
        />
      </button>

      <button className="home-button" onClick={handleHomeButtonClick}>
        <img
          src={homeButton}
          alt="Кнопочка Домой"
          
        />
      </button>

    </div>
  );
};

export default ButtonsBlock;
