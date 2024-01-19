import React from "react";

import { useEffect } from "react";
import "./App.css";
// import { useTelegram } from "./hooks/useTelegram";
import Header from "./Header/Header";
import { Route, Router, Routes } from "react-router-dom";
import SiteMenu from "./SiteMenu/SiteMenu";
import Main from "./Main/Main";
import GamesList from "./GamesList/GamesList";

function App() {
  // const { onToggleButton, tg } = useTelegram();

  // useEffect(() => {
  //   tg.ready();
  // }, []);//
  // hjhj

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header headerTitle="Board Game Club"/>
              <Main />
            </>
          }
        />
        <Route
          path="/gameslist"
          element={
            <>
              <Header headerTitle="Список игр"/>
              <GamesList />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
