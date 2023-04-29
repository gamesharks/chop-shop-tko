
import React from "react";
// import { Link } from 'react-router-dom';
// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';
import backgroundImage2 from '../assets/images/background02.jpg'
import FighterStats from '../components/Fighterstats/index';


const Fighterstats = () => {
  return (
    <div className="" style={{
      backgroundImage: `url(${backgroundImage2})`,
      backgroundSize: 'cover',
      width: '100vw',
      height: 'cover',
      
      
    }}>
    <div className="container">
      <h1> Fighter Stats </h1>
      
      {/* {make component to provide a drop down selection of fighters} */}
      
      <FighterStats />
    </div>
  </div>
  );
};

export default Fighterstats;
