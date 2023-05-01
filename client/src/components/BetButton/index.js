import React from 'react';
import './button.css';
import { useMutation } from '@apollo/client'
import { PLACE_BET } from '../../utils/mutations';

function BetButton() {

const [placeBet, { data }] = useMutation(PLACE_BET);

const handleBetSubmit = async () => {


  try {
    const { data } = await placeBet({
      variables: {
    waiverAmount: 100
      }
    })
    console.log(data)
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
