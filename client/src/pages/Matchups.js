
import React from "react";
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Matchups from '../components/Matchups/index';


const MatchUps = () => {
  return (
    // can replace this with an actual image if needed later
    <div className="" style={{
      background: 'black',
      width: '100vw',
      minHeight: '100vh',
    }}>

      <div className="container">
        <h1>Upcoming Fights</h1>
          <Matchups />
    
            {/* make component Bet/Wager Button */}
    </div>
  </div>
  );
};

export default MatchUps;
