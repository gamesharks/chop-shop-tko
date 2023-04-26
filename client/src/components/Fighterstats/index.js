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
import React from 'react';
import { useQuery } from '@apollo/client';
import {
    GET_FIGHTERS
} from '../../utils/queries';

function FighterStats() {
    const { loading, error, data } = useQuery(GET_FIGHTERS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        <h1>Fighter Stats</h1>
        <ul>
          {data.fighters.map(fighters => (
            <li key={fighters._id}>
              <h2>{fighters.name}</h2>
              <p>Wins: {fighters.wins}</p>
              <p>Losses: {fighters.losses}</p>
              <img src={`/images/${fighters.image}`}></img>
              <p>Wins by KO: {fighters.winsByKO}</p>
              <p>Wins by submission: {fighters.winsBySubmission}</p>
              <p>Nickname: {fighters.nickName}</p>
              <p>Odds: {fighters.odds}</p>
              <p>Stance: {fighters.stance}</p>
              <p>Height: {fighters.height}</p>
              <p>Weight: {fighters.weight}</p>
              <p>Age: {fighters.age}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default FighterStats;