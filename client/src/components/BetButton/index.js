import React, { useState } from 'react';
import './button.css';

function BetButton(props) {
    const { fighterName, bet, onClick } = props;
  
    return (
      <button className='betButton' onClick={onClick}>
        Place {fighterName} {bet} Bet
      </button>
    );
  }
  
  export default BetButton;
