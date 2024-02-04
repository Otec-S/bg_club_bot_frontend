import React from "react";

import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import GamesList from "./GamesList/GamesList";
import Rules from "./Rules/Rules";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";
import TeseraCard from "./TeseraCard/TeseraCard";
import Location from "./Location/Location";
import Photos from "./Photos/Photos";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/bg_club_bot_frontend" element={<Main />} />
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
          <Route
            path="/location"
            element={
              <>
                <ButtonsBlock />
                <Header headerTitle="Адрес клуба" />
                <Location />
              </>
            }
          />
          <Route
            path="/photos"
            element={
              <>
                <ButtonsBlock />
                <Header headerTitle="Фотографии" />
                <Photos />
              </>
            }
          />
          <Route
            path="/tesera-card/:link"
            element={
              <>
                <ButtonsBlock />
                <Header headerTitle="Описание игры" />
                <TeseraCard />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
