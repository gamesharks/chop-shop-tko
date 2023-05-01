// import React, { useState } from 'react';
import './button.css';

function BetButton(props) {
    const { fighterName, bet, onClick } = props;
  
    return (
      <button className='betButton' onClick={onClick}>
        Bet $100
      </button>
    );
  }
  
  export default BetButton;
