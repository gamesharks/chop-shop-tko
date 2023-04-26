// import React from 'react';
// import { useStoreContext } from "../../utils/GlobalState";
// import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";

// const CartItem = ({ item }) => {

//   const [, dispatch] = useStoreContext();

//   const removeFromCart = item => {
//     dispatch({
//       type: REMOVE_FROM_CART,
//       _id: item._id
//     });
//     idbPromise('cart', 'delete', { ...item });

//   };

//   const onChange = (e) => {
//     const value = e.target.value;
//     if (value === '0') {
//       dispatch({
//         type: REMOVE_FROM_CART,
//         _id: item._id
//       });
//       idbPromise('cart', 'delete', { ...item });

//     } else {
//       dispatch({
//         type: UPDATE_CART_QUANTITY,
//         _id: item._id,
//         purchaseQuantity: parseInt(value)
//       });
//       idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

//     }
//   }

//   return (
//     <div className="flex-row">
//       <div>
//         <img
//           src={`/images/${item.image}`}
//           alt=""
//         />
//       </div>
//       <div>
//         <div>{item.name}, ${item.price}</div>
//         <div>
//           <span>Qty:</span>
//           <input
//             type="number"
//             placeholder="1"
//             value={item.purchaseQuantity}
//             onChange={onChange}
//           />
//           <span
//             role="img"
//             aria-label="trash"
//             onClick={() => removeFromCart(item)}
//           >
//             🗑️
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartItem;


// !!! original Gerardo code
// import React from 'react';
// import { useQuery } from '@apollo/client';
// import {
//     GET_FIGHTERS
// } from '../../utils/queries';

// function FighterStats() {
//     const { loading, error, data } = useQuery(GET_FIGHTERS);
  
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;
  
//     return (
//       <div>
        
//         <ul>
//           {data.fighters.map(fighters => (
//             <li key={fighters._id}>
//               <h2>{fighters.name}</h2>
//               <p>Wins: {fighters.wins}</p>
//               <p>Losses: {fighters.losses}</p>
//               <img src={`/images/${fighters.image}`}></img>
//               <p>Wins by KO: {fighters.winsByKO}</p>
//               <p>Wins by submission: {fighters.winsBySubmission}</p>
//               <p>Nickname: {fighters.nickName}</p>
//               <p>Odds: {fighters.odds}</p>
//               <p>Stance: {fighters.stance}</p>
//               <p>Height: {fighters.height}</p>
//               <p>Weight: {fighters.weight}</p>
//               <p>Age: {fighters.age}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

// export default FighterStats;

import React, { useState } from 'react';
import './fighterstats.css';
import { useQuery } from '@apollo/client';
import { GET_FIGHTERS } from '../../utils/queries';

function FighterStats() {
  const { loading, error, data } = useQuery(GET_FIGHTERS);
  const [expandedFighterId, setExpandedFighterId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const toggleExpanded = (id) => {
    if (id === expandedFighterId) {
      setExpandedFighterId(null);
    } else {
      setExpandedFighterId(id);
    }
  };

  return (
    <div className="fighter-grid">
      {data.fighters.map((fighter) => (
        <div key={fighter._id} className="fighter-card">
          <img
            src={`/images/${fighter.image}`}
            alt={fighter.name}
            className="fighter-image"
            onClick={() => toggleExpanded(fighter._id)}
          />
          {expandedFighterId === fighter._id && (
            <div className="fighter-details">
              <h2>{fighter.name}</h2>
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

