import React from "react";

import { useEffect } from "react";
import "./App.css";
// import { useTelegram } from "./hooks/useTelegram";
import Header from "./Header/Header";
import { Route, Router, Routes } from "react-router-dom";
import SiteMenu from "./SiteMenu/SiteMenu";
import Main from "./Main/Main";
import GamesList from "./GamesList/GamesList";
import Rules from "./Rules/Rules";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";

function App() {
  //  window.Telegram.WebApp.expand();
  // const { onToggleButton, tg } = useTelegram();

  // useEffect(() => {
  //   tg.ready();
  // }, []);//
  // hjhj

  return (
    <div>
      <Routes>
        <Route
          path="/bg_club_bot_frontend"
          element={
            <>
              {/* <Header headerTitle="Board Game Club" /> */}
              <Main />
            </>
          }
        />
        <Route
          path="/gameslist"
          element={
            <>
              <ButtonsBlock />
              <Header headerTitle="Список игр" />
              <GamesList />
            </>
          }
        />
        <Route
          path="/rules"
          element={
            <>
              <ButtonsBlock />
              <Header headerTitle="Правила клуба" />
              <Rules />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
