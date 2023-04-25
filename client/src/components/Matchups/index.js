// commented code is for referenece, 
// CURRENT CODE STARTS LINE 143

// import React, { useState } from "react";
// import styled from "styled-components";

// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: #fff;
//   border: 1px solid #ccc;
//   padding: 16px;
//   margin-bottom: 16px;
// `;

// const MatchupWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   cursor: pointer;
// `;

// const Matchup = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const FighterName = styled.div`
//   margin-right: 16px;
// `;

// const Versus = styled.div`
//   margin-right: 16px;
// `;

// const FightDetailWrapper = styled.div`
//   margin-top: 16px;
// `;

// const FightDetail = styled.div`
//   margin-bottom: 8px;
// `;

// const FightCard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <CardWrapper>
//       <MatchupWrapper onClick={toggleExpand}>
//         <Matchup>
//           <FighterName>Conor McGregor</FighterName>
//           <Versus>vs</Versus>
//           <FighterName>Dustin Poirier</FighterName>
//         </Matchup>
//         <div>{isExpanded ? "-" : "+"}</div>
//       </MatchupWrapper>
//       {isExpanded && (
//         <FightDetailWrapper>
//           <FightDetail>Date: January 23, 2021</FightDetail>
//           <FightDetail>Time: 10:00 PM EST</FightDetail>
//           <FightDetail>Location: Etihad Arena, Abu Dhabi</FightDetail>
//           <FightDetail>Weight class: Lightweight</FightDetail>
//           <FightDetail>Result: Poirier wins via TKO (round 2)</FightDetail>
//         </FightDetailWrapper>
//       )}
//       <MatchupWrapper onClick={toggleExpand}>
//         <Matchup>
//           <FighterName>Israel Adesanya</FighterName>
//           <Versus>vs</Versus>
//           <FighterName>Jan Blachowicz</FighterName>
//         </Matchup>
//         <div>{isExpanded ? "-" : "+"}</div>
//       </MatchupWrapper>
//       {isExpanded && (
//         <FightDetailWrapper>
//           <FightDetail>Date: March 6, 2021</FightDetail>
//           <FightDetail>Time: 10:00 PM EST</FightDetail>
//           <FightDetail>Location: UFC Apex, Las Vegas</FightDetail>
//           <FightDetail>Weight class: Light Heavyweight</FightDetail>
//           <FightDetail>Result: Blachowicz wins via unanimous decision</FightDetail>
//         </FightDetailWrapper>
//       )}
//       <MatchupWrapper onClick={toggleExpand}>
//         <Matchup>
//           <FighterName>Amanda Nunes</FighterName>
//           <Versus>vs</Versus>
//           <FighterName>Megan Anderson</FighterName>
//         </Matchup>
//         <div>{isExpanded ? "-" : "+"}</div>
//       </MatchupWrapper>
//       {isExpanded && (
//         <FightDetailWrapper>
//           <FightDetail>Date: March 6, 2021</FightDetail>
//           <FightDetail>Time: 10:00 PM EST</FightDetail>
//       <FightDetail>Location: UFC Apex, Las Vegas</FightDetail>
//       <FightDetail>Weight class: Women's Featherweight</FightDetail>
//       <FightDetail>Result: Nunes wins via submission (triangle armbar, round 1)</FightDetail>
//     </FightDetailWrapper>
//   )}
//   <MatchupWrapper onClick={toggleExpand}>
//     <Matchup>
//       <FighterName>Petr Yan</FighterName>
//       <Versus>vs</Versus>
//       <FighterName>Aljamain Sterling</FighterName>
//     </Matchup>
//     <div>{isExpanded ? "-" : "+"}</div>
//   </MatchupWrapper>
//   {isExpanded && (
//     <FightDetailWrapper>
//       <FightDetail>Date: March 6, 2021</FightDetail>
//       <FightDetail>Time: 10:00 PM EST</FightDetail>
//       <FightDetail>Location: UFC Apex, Las Vegas</FightDetail>
//       <FightDetail>Weight class: Bantamweight</FightDetail>
//       <FightDetail>Result: Sterling wins via disqualification (illegal knee, round 4)</FightDetail>
//     </FightDetailWrapper>
//   )}
//   <MatchupWrapper onClick={toggleExpand}>
//     <Matchup>
//       <FighterName>Max Holloway</FighterName>
//       <Versus>vs</Versus>
//       <FighterName>Calvin Kattar</FighterName>
//     </Matchup>
//     <div>{isExpanded ? "-" : "+"}</div>
//   </MatchupWrapper>
//   {isExpanded && (
//     <FightDetailWrapper>
//       <FightDetail>Date: January 16, 2021</FightDetail>
//       <FightDetail>Time: 10:00 PM EST</FightDetail>
//       <FightDetail>Location: Etihad Arena, Abu Dhabi</FightDetail>
//       <FightDetail>Weight class: Featherweight</FightDetail>
//       <FightDetail>Result: Holloway wins via unanimous decision</FightDetail>
//     </FightDetailWrapper>
//   )}
// </CardWrapper>
//   )
// };

// export default FightCard;

import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  height: 100px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
`;

const FighterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const FighterName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const Odds = styled.div`
  font-size: 20px;
  color: gray;
  margin-top: 30px;
  font-weight: bolder;
`;

const Versus = styled.span`
  font-size: 24px;
  margin: 0 10px;
`;

const PlaceholderFighter = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VersusCard = () => {
  return (
    <CardWrapper>
      <FighterWrapper>
        {/* v-fighter name -v */}
        <FighterName>Placeholder Fighter</FighterName>
        <PlaceholderFighter>
          {/* v-fighter image here-v */}
          <span>PF</span>
          {/* v-odds here-v  */}
        <Odds>+120</Odds>
        </PlaceholderFighter>
      </FighterWrapper>
      <Versus>vs</Versus>
      <FighterWrapper>
        <FighterName>Placeholder Fighter</FighterName>
        <PlaceholderFighter>
          <span>PF</span>
          <Odds>-120</Odds>
        </PlaceholderFighter>
      </FighterWrapper>
    </CardWrapper>
  );
};

export default VersusCard;
