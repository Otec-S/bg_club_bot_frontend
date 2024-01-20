import React from "react";
import "./Rules.css";

const Rules = () => {
  return (
    <div className="rules">
      <ul className="rules__list">
        <li className="rules__list-item">
          На мероприятие нужно <span className="italic">регистрироваться заранее</span> (по четвергам запускаем
          опрос), чтобы всем хватило места, и отменять регистрацию, если не
          придете, по той же причине.
        </li>
        <li className="rules__list-item">
          Оставляем за собой право удалять из чата тех, кто систематично
          регистрируется, но не приходит.
        </li>
        <li className="rules__list-item">
          Вы <span className="italic">можете</span> приносить свои игры, если захотите. Будет здорово, если вы
          напишете об этом в чате заранее. Вдруг кто-то мечтает поиграть в вашу
          игру?
        </li>
        <li className="rules__list-item">
          В нашем чате <span className="italic">можно и нужно</span> общаться по теме настолок, искать новых
          знакомых, но пожалуйста, не заваливайте чат флудом.
        </li>
        <li className="rules__list-item">
          Анонсы мероприятий с других площадок, особенно платных, а также
          рекламу <span className="italic">нужно согласовать</span> с админом перед тем, как их опубликовать.
        </li>
        <li className="rules__list-item">
          Не обсуждаем здесь политику и религию, околополитические новости, не
          оскорбляем друг друга. Оставляем за собой право удалять спорные
          сообщения.
        </li>
      </ul>
    </div>
  );
};

export default Rules;
