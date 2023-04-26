
import React from "react";
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import FighterStats from '../components/Fighterstats/index';


const Fighterstats = () => {
  return (
    <div className="container">
      <h1>Fighter Stats </h1>
      
      {/* {make component to provide a drop down selection of fighters} */}
      
      <FighterStats />
    </div>
  );
};

export default Fighterstats;
