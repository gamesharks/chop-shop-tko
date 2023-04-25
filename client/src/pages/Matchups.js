
import React from "react";
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import CategoryMenu from "../components/CategoryMenu";
import VersusCard from '../components/Matchups';
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const CardsWrapper = styled.div`
  
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;
  justify-content: space-evenly;
  margin: 25px;
  
`;

const Matchups = () => {
  return (
    <div className="container">
      <h1>Upcoming Fights</h1>
      insert components/jsx for upcoming fights that includes
      side by side fighters and a component for odds.
      {/* {make component to show upcoming fights} */}
      <Wrapper>
      <CardsWrapper>
      <VersusCard />
      <VersusCard />
      <VersusCard />
      <VersusCard />
      <VersusCard />
    </CardsWrapper>
    </Wrapper>
      {/* make component for odds */}
    </div>
  );
};

export default Matchups;
