
import React from "react";
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import FighterStats from '../components/Fighterstats/index';


const Fighterstats = () => {
  return (
    <div className="container">
      <h1>Fighter Stats Placeholder</h1>
      This will show specific stats for the fighter selected from a dropdown
      {/* {make component to provide a drop down selection of fighters} */}
      <h1>Fighter Stats Page</h1>
      <FighterStats />
    </div>
  );
};

export default Fighterstats;
