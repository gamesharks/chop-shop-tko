

import React from "react";
// import styled from "styled-components";
import './matchups.css';
import { useQuery } from '@apollo/client';
import { GET_MATCHUPS } from '../../utils/queries';


// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   width: 80vw;
//   height: 100px;
//   background-color: #f9f9f9;
//   padding: 20px;
//   border-radius: 5px;
// `;

// const FighterWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
  
// `;

// const FighterName = styled.h3`
//   font-size: 20px;
//   font-weight: bold;
//   margin: 0;
// `;

// const Odds = styled.div`
//   font-size: 20px;
//   color: gray;
//   margin-top: 30px;
//   font-weight: bolder;
// `;

// const Versus = styled.span`
//   font-size: 24px;
//   margin: 0 10px;
// `;

// const PlaceholderFighter = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 2px solid #ccc;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

function Matchups() {
  const { loading, error, data } = useQuery(GET_MATCHUPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

// const VersusCard = () => {
//   return (
//     <CardWrapper>
//       <FighterWrapper>
//         {/* v-fighters name -v */}
//         <FighterName>{matchup.fightName}</FighterName>
//         <PlaceholderFighter>
//           {/* v-fighters image here-v */}
//           <span>PF</span>
//           {/* v-odds here-v  */}
//         <Odds>+120</Odds>
//         </PlaceholderFighter>
//       </FighterWrapper>
//       <Versus>vs</Versus>
//       <FighterWrapper>
//         <FighterName>Placeholder Fighter</FighterName>
//         <PlaceholderFighter>
//           <span>PF</span>
//           <Odds>-120</Odds>
//         </PlaceholderFighter>
//       </FighterWrapper>
//     </CardWrapper>
//     )};
// };






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
              <div className="versus">vs</div>
              
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
