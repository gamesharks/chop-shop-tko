import React from 'react';
import './profile.css';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import Auth from '../utils/auth';


const Profile = () => {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
// original bet slip
  return (
    <div>
      <h2> Welcome, {user.firstName} </h2>
      <h2> Balance $ {user.accountBalance} </h2>
      <div className='profile-wrapper'>
      {/* <div className="flex-row justify-center mb-3"> */}
        <div className='wrapper-title'>
          <h3 className="">
          Bet History
          </h3>
        </div>
        <div className="bets-container">
      {/* <h2>bets</h2> */}
      <ul>
        {user.betslips.map((bet) => (
          <div key={bet._id}>
              <div className="bets">
              Date: &nbsp;        
                  {new Date(parseInt(bet.waiverDate)).toLocaleDateString()}
                  &nbsp; | Amount: ${bet.waiverAmount} &nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; {bet.fighter}  {bet.odds}
              </div>
            </div>
        ))}
      </ul>  
                 
    </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px solid #1a1a1a' }}
          >



          </div>
        )} 
      </div>


    {/* !!!!!!!!!!!!!!!!!!! Gerardos code goes starts here !!!!!!!!!!!!!!!!*/}
            {/* Friend Selector starts here */}
            <br></br> 
         <div className='profile-wrapper'>
      {/* <div className="flex-row justify-center mb-3"> */}
        <div className='wrapper-title'>
          <h3 className="">
          Friend History
          </h3>
        </div>
        <div className="bets-container">
      {/* <h2>bets</h2> */}
      <ul>
        {user.betslips.map((bet) => (
          <div key={bet._id}>
              <div className="bets">
              Amount: ${bet.waiverAmount} <br></br>
              Date: &nbsp;  &nbsp; &nbsp;             
                  {new Date(parseInt(bet.waiverDate)).toLocaleDateString()}
              </div>
            </div>
        ))}
      </ul>  
                 
    </div></div>

    </div> 

    
  );
};

export default Profile;
