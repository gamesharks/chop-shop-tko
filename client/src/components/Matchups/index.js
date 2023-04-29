

import React from "react";
// import styled from "styled-components";
import VersesImage from '../../assets/images/vs04.jpg';
import './matchups.css';
import { useQuery } from '@apollo/client';
import { GET_MATCHUPS } from '../../utils/queries';


function Matchups() {
  const { loading, error, data } = useQuery(GET_MATCHUPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div className="matchups-container">
      <h2>Matchups</h2>
      <ul>
        {data.matchups.map((matchup) => (
          <li key={matchup._id}>
            <div className="matchup-wrapper">
              <div className="fighter-block">
                <img src={`/images/${matchup.fighters[0].image}`} />
                <div className="fighter-name">{matchup.fighters[0].name}</div>
                <div className="fighter-odds">Odds: {matchup.fighters[0].odds}</div>
              </div>
              <div className="versus">
                <img className="versusImage" src={VersesImage} alt="Verses Icon" />
              </div>
              
              <div className="fighter-block">
                <img src={`/images/${matchup.fighters[1].image}`} />
                <div className="fighter-name">{matchup.fighters[1].name}</div>
                <div className="fighter-odds">Odds: {matchup.fighters[1].odds}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Matchups;
