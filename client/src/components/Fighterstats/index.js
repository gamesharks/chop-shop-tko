import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_FIGHTERS } from '../../utils/queries';

import './fighterstats2.css';

function FighterStats() {
 
    const { loading, error, data } = useQuery(GET_FIGHTERS);
    const [expanded, setExpanded] = useState({});
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const toggleExpanded = (fighterId) => {
        setExpanded(prevExpanded => ({
            ...prevExpanded,
            [fighterId]: !prevExpanded[fighterId]
        }));
    }
  
    return (
        <div className="fighter-stats-container">
            {data.fighters.map(fighter => (
                <div className="fighter-card" key={fighter._id}>
                    <div className="fighter-header" onClick={() => toggleExpanded(fighter._id)}>
                        
                        <img src={`/images/${fighter.image}`} alt={fighter.name} />
                        <h2>{fighter.name}</h2>
                    </div>
                    {expanded[fighter._id] && (
                        <div className="fighter-details">
                            <p>Wins: {fighter.wins}</p>
                            <p>Losses: {fighter.losses}</p>
                            <p>Wins by KO: {fighter.winsByKO}</p>
                            <p>Wins by submission: {fighter.winsBySubmission}</p>
                            <p>Nickname: {fighter.nickName}</p>
                            <p>Odds: {fighter.odds}</p>
                            <p>Stance: {fighter.stance}</p>
                            <p>Height: {fighter.height}</p>
                            <p>Weight: {fighter.weight}</p>
                            <p>Age: {fighter.age}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FighterStats;
