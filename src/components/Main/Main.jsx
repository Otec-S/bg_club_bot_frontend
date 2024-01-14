import React from 'react';
import MenuCard from './MenuCard/MenuCard';
import './Main.css';
import { CARD_DATA } from '../../constants';


const Main = () => {
  return (
    <ul className='main'>
      {CARD_DATA.map((card) => (
        <MenuCard key={card.id} title={card.title} path={card.path} backgroundColor={card.backgroundColor}/>
      ))}
    </ul>
  );
};

export default Main;