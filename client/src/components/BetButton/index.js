import React from 'react';
import './button.css';
import { useMutation } from '@apollo/client'
import { PLACE_BET } from '../../utils/mutations';

function BetButton({matchupId, fighterName, betOdds}) {

const [placeBet, { data }] = useMutation(PLACE_BET);

const handleBetSubmit = async () => {


  try {
    const { data } = await placeBet({
      variables: {
    waiverAmount: 100,
    matchup: matchupId,
    fighter: fighterName,
    odds: betOdds
      }
      
    })
    console.log(data)
    alert('Your $100 bet has been placed successfully')
  } catch (err) {
    console.error(err)
  }
  console.log('test')
}


    return (
      <button
        name='waiverAmount'
       className='betButton' 
       onClick={handleBetSubmit}>
        Bet $100
      </button>
    );
  }
  
  export default BetButton;
